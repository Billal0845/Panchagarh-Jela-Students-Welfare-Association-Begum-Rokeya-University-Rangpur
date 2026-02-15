<?php

namespace App\Http\Controllers;

use App\Models\Sponsor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Spatie\LaravelPdf\Facades\Pdf;
use Spatie\Browsershot\Browsershot;

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
            'phone' => 'required|string|max:255', // Required
            'description' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
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
        // Ensure this path matches your folder structure: resources/js/Pages/AdminPages/Sponsor/Edit.jsx
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
            'phone' => 'required|string|max:255',
            'description' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'email' => 'nullable|email',
            'website_link' => 'nullable|url',
            'location_text' => 'nullable|string',
            'map_location_link' => 'nullable|url',
            'message_from_him' => 'nullable|string',
            'note' => 'nullable|string',
        ]);

        if ($request->hasFile('photo')) {
            // 1. Delete the old photo if it exists
            if ($sponsor->photo && Storage::disk('public')->exists($sponsor->photo)) {
                Storage::disk('public')->delete($sponsor->photo);
            }
            // 2. Store the new photo
            $validated['photo'] = $request->file('photo')->store('sponsors', 'public');
        } else {
            // 3. CRUCIAL: Remove 'photo' from the array if no new file is uploaded.
            // This prevents the database from being updated to NULL.
            unset($validated['photo']);
        }

        // Now update only the fields present in the array
        $sponsor->update($validated);

        return redirect('/admin/sponsors')->with('success', 'Sponsor updated successfully!');
    }

    public function destroy($id)
    {
        $sponsor = Sponsor::findOrFail($id);

        // DELETE PHOTO FROM STORAGE
        if ($sponsor->photo && Storage::disk('public')->exists($sponsor->photo)) {
            Storage::disk('public')->delete($sponsor->photo);
        }

        $sponsor->delete();

        return redirect('/admin/sponsors')->with('success', 'Sponsor removed successfully!');
    }



    public function exportPDF()
    {
        $sponsors = Sponsor::orderBy('name', 'asc')->get();

        return Pdf::view('pdf.sponsors', ['sponsors' => $sponsors])
            ->withBrowsershot(function (Browsershot $browsershot) {
                $browsershot->noSandbox()
                    ->setOption('args', ['--disable-web-security']) // Helpful for local images
                    ->windowSize(1200, 800);

                // If it still fails, ONLY THEN uncomment the line below and 
                // make sure the path is correct for your PC:
                // $browsershot->setChromePath('C:\Program Files (x86)\Google\Chrome\Application\chrome.exe');
            })
            ->name('sponsors_list.pdf')
            ->download();
    }
}