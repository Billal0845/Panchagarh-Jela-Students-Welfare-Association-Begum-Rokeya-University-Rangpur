<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\VisitorController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SponsorController;
use App\Http\Controllers\BannerController;

Route::get('/', [VisitorController::class, 'home']);

Route::get('/admin', function () {
    return inertia('LandingPage');
});


Route::get('/admin', [DashboardController::class, 'showDashboard']);
Route::get('/admin/notices/create', [DashboardController::class, 'showNoticeForm']);
Route::get('/admin/notices', [DashboardController::class, 'showNoticePage']);
Route::post('/admin/notice/store', [DashboardController::class, 'storeNotice']);


Route::get('/admin/notices/{id}/edit', [DashboardController::class, 'editNotice']);
Route::patch('/admin/notices/{id}', [DashboardController::class, 'updateNotice']);
Route::delete('/admin/notices/{id}', [DashboardController::class, 'destroyNotice']);



Route::get('/admin/sponsors', [SponsorController::class, 'sponsorPage']);
Route::get('/admin/sponsors/create', [SponsorController::class, 'create']);
Route::post('/admin/sponsors', [SponsorController::class, 'store']);
Route::get('/admin/sponsors/{id}/edit', [SponsorController::class, 'edit']);
Route::put('/admin/sponsors/{id}', [SponsorController::class, 'update']);



Route::get('/sponsor/{id}', [VisitorController::class, 'show']);


Route::get('/member/congratulation_card', [BannerController::class, 'showCardCongratulation'])->name('member.card');