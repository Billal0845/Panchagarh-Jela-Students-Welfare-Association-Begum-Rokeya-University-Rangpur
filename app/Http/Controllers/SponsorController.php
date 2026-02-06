<?php

namespace App\Http\Controllers;

use App\Models\Sponsor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SponsorController extends Controller
{

    public function sponsorPage()
    {
        $sponsors = Sponsor::orderBy('created_at', 'desc')->get();
        return inertia('AdminPages/Sponsor/Sponsors', [
            'sponsors' => $sponsors
        ]);
    }
    public function create()
    {
        return inertia('AdminPages/Sponsor/CreateSponsor');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'description' => 'required|string',
            'photo' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'phone' => 'nullable|string',
            'email' => 'nullable|email',
            'website_link' => 'nullable|url',
            'location_text' => 'nullable|string',
            'map_location_link' => 'nullable|url',
            'message_from_him' => 'nullable|string',
            'note' => 'nullable|string',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('sponsors', 'public');
        }

        Sponsor::create($validated);

        return redirect('/admin/sponsors')->with('success', 'Sponsor created successfully!');
    }


    public function edit($id)
    {
        $sponsor = Sponsor::findOrFail($id);
        return Inertia::render('AdminPages/Sponsor/Edit', [
            'sponsor' => $sponsor
        ]);
    }

    public function update(Request $request, $id)
    {
        $sponsor = Sponsor::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'description' => 'required|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048', // Nullable on update
            'phone' => 'nullable|string',
            'email' => 'nullable|email',
            'website_link' => 'nullable|url',
            'location_text' => 'nullable|string',
            'map_location_link' => 'nullable|url',
            'message_from_him' => 'nullable|string',
            'note' => 'nullable|string',
        ]);

        // Handle Image Update
        if ($request->hasFile('photo')) {
            // Delete old photo if it exists
            if ($sponsor->photo) {
                Storage::disk('public')->delete($sponsor->photo);
            }
            $validated['photo'] = $request->file('photo')->store('sponsors', 'public');
        } else {
            // Keep the old photo if no new one is uploaded
            unset($validated['photo']);
        }

        $sponsor->update($validated);

        return redirect('/admin/sponsors')->with('success', 'Sponsor updated successfully!');
    }

    public function destroy($id)
    {
        $sponsor = Sponsor::findOrFail($id);

        // Delete the image file from storage
        if ($sponsor->photo) {
            Storage::disk('public')->delete($sponsor->photo);
        }

        $sponsor->delete();

        return redirect('/admin/sponsors')->with('success', 'Sponsor removed successfully!');
    }
}
