<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BannerController extends Controller
{
    public function showCardCongratulation()
    {
        return Inertia::render('Member/CongratulationCard');
    }
}