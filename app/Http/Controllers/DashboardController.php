<?php

namespace App\Http\Controllers;
use App\Models\Notice;
use Illuminate\Http\Request;


class DashboardController extends Controller
{
    public function showDashboard()
    {
        return inertia('AdminPages/Dashboard');
    }

    public function showNoticePage()
    {
        return inertia('AdminPages/Notices', [
            'notices' => Notice::latest()->get()
        ]);
    }

    public function showNoticeForm()
    {
        return inertia('AdminPages/NoticeForm');
    }


    public function storeNotice(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'written_by' => 'nullable|string',
        ]);

        Notice::create($validated);

        return redirect('/admin/notices')->with('success', 'Notice created!');
    }

    public function editNotice($id)
    {
        $notice = Notice::findOrFail($id);
        return inertia('AdminPages/NoticeEdit', [
            'notice' => $notice
        ]);
    }

    // 2. Process the update request
    public function updateNotice(Request $request, $id)
    {
        $notice = Notice::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'written_by' => 'nullable|string',
        ]);

        $notice->update($validated);

        return redirect('/admin/notices')->with('success', 'Notice updated successfully!');
    }

    // 3. Delete the notice
    public function destroyNotice($id)
    {
        $notice = Notice::findOrFail($id);
        $notice->delete();

        return redirect('/admin/notices')->with('success', 'Notice deleted successfully!');
    }
}
