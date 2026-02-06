import React from "react";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import { Link, Head, router } from "@inertiajs/react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function Notices({ notices }) {
    // Handle Delete
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this notice?")) {
            // Manual delete request without Ziggy
            router.delete(`/admin/notices/${id}`);
        }
    };

    return (
        <div className="font-poppins pb-10">
            <Head title="Manage Notices" />

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Notices
                </h1>
                <Link
                    href="/admin/notices/create"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-md"
                >
                    <FaPlus size={14} />
                    <span>Create Notice</span>
                </Link>
            </div>

            <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Date
                                </th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Title
                                </th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Description
                                </th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    By
                                </th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 text-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {notices.length > 0 ? (
                                notices.map((notice) => (
                                    <tr
                                        key={notice.id}
                                        className="hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-colors"
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                                            {new Date(
                                                notice.created_at,
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {notice.title}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
                                            {notice.description}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <span className="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300">
                                                {notice.written_by || "Admin"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right space-x-3">
                                            <Link
                                                href={`/admin/notices/${notice.id}/edit`}
                                                className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                            >
                                                <FaEdit size={18} />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(notice.id)
                                                }
                                                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                                            >
                                                <FaTrash size={17} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="px-6 py-10 text-center text-gray-500"
                                    >
                                        No notices found. Create your first
                                        notice!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Ensure the layout is preserved
Notices.layout = (page) => <AdminLayout children={page} />;

export default Notices;
