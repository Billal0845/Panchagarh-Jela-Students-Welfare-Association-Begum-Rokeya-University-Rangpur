<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;

class MemberController extends Controller
{
    public function index(Request $request)
    {
        $query = Member::query();

        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                    ->orWhere('phone', 'like', "%{$request->search}%")
                    ->orWhere('department', 'like', "%{$request->search}%");
            });
        }

        $query->when($request->batch, fn($q, $v) => $q->where('batch', $v))
            ->when($request->upozela, fn($q, $v) => $q->where('upozela', $v))
            ->when($request->blood_group, fn($q, $v) => $q->where('blood_group', $v))
            ->when($request->has_job !== null && $request->has_job !== '', function ($q) use ($request) {
                $q->where('has_job', filter_var($request->has_job, FILTER_VALIDATE_BOOLEAN));
            });

        return Inertia::render('Member/Members', [
            'members' => $query->latest()->get(), // Fetch all or paginate
            'filters' => $request->only(['batch', 'upozela', 'blood_group', 'has_job'])
        ]);
    }

    public function create()
    {
        return Inertia::render('Member/MemberForm');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'batch' => 'required|integer',
            'department' => 'required|string',
            'upozela' => 'required|string',
            'phone' => 'required|string|unique:members,phone',
            'blood_group' => 'required|string',
            'has_job' => 'nullable|boolean',
            'job_post' => 'nullable|string|required_if:has_job,true',
            'photo' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('members', 'public');
        }

        Member::create($validated);

        return redirect()->route('members.index')->with('success', 'Member created successfully.');
    }

    public function edit(Member $member)
    {
        return Inertia::render('Member/MemberEditForm', [
            'member' => $member
        ]);
    }

    public function update(Request $request, Member $member)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'batch' => 'required|integer',
            'department' => 'required|string',
            'upozela' => 'required|string',
            'phone' => 'required|string|unique:members,phone,' . $member->id,
            'blood_group' => 'required|string',
            'has_job' => 'nullable|boolean',
            'job_post' => 'nullable|string|required_if:has_job,true',
            'photo' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('photo')) {
            // Delete old photo if it exists
            if ($member->photo) {
                Storage::disk('public')->delete($member->photo);
            }
            $validated['photo'] = $request->file('photo')->store('members', 'public');
        }

        $member->update($validated);

        return redirect()->route('members.index')->with('success', 'Member updated successfully.');
    }

    public function destroy(Member $member)
    {
        if ($member->photo) {
            Storage::disk('public')->delete($member->photo);
        }
        $member->delete();

        return redirect()->route('members.index')->with('success', 'Member deleted successfully.');
    }


    private function applyFilters($query, Request $request)
    {
        return $query
            ->when($request->batch, fn($q, $v) => $q->where('batch', $v))
            ->when($request->upozela, fn($q, $v) => $q->where('upozela', $v))
            ->when($request->blood_group, fn($q, $v) => $q->where('blood_group', $v))
            ->when($request->has_job !== null, function ($q) use ($request) {
                // Handle boolean from query string (often arrives as "1" or "0")
                $q->where('has_job', filter_var($request->has_job, FILTER_VALIDATE_BOOLEAN));
            });
    }

    public function exportPdf(Request $request)
    {
        $query = Member::query();
        $this->applyFilters($query, $request);

        $members = $query->get();

        $pdf = Pdf::loadView('pdf.members', compact('members'))
            ->setPaper('a4', 'landscape');

        return $pdf->download('members_list.pdf');
    }

}