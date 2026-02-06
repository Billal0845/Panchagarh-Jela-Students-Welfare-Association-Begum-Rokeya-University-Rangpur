<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\Request;
use App\Models\Sponsor;
use Inertia\Inertia;



class VisitorController extends Controller
{
    public function home()
    {
        $notice = Notice::latest()->first();
        return inertia('LandingPage', [
            'notice' => $notice,
            'sponsors' => Sponsor::where('is_active', true)
                ->orderBy('sort_order', 'asc')
                ->get(),
        ]);
    }



    public function show($id)
    {
        $sponsor = Sponsor::where('is_active', true)->findOrFail($id);
        return inertia('PublicPages/SponsorDetails', [
            'sponsor' => $sponsor
        ]);
    }
}
