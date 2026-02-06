import React from "react";
import { useForm, Head } from "@inertiajs/react";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";

function NoticeEdit({ notice }) {
    // Initialize form with existing notice data
    const { data, setData, patch, processing, errors } = useForm({
        title: notice.title || "",
        description: notice.description || "",
        written_by: notice.written_by || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send a PATCH request to the update route
        patch(`/admin/notices/${notice.id}`);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-slate-950 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
            <Head title="Edit Notice" />
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Edit Notice
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Title
                    </label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-gray-300 dark:border-gray-700 rounded-md dark:text-white"
                    />
                    {errors.title && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.title}
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Description
                    </label>
                    <textarea
                        rows="5"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-gray-300 dark:border-gray-700 rounded-md dark:text-white"
                    />
                    {errors.description && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.description}
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Written By
                    </label>
                    <input
                        type="text"
                        value={data.written_by}
                        onChange={(e) => setData("written_by", e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-gray-300 dark:border-gray-700 rounded-md dark:text-white"
                    />
                </div>

                <div className="pt-4 flex gap-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                        {processing ? "Updating..." : "Update Notice"}
                    </button>
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

NoticeEdit.layout = (page) => <AdminLayout children={page} />;
export default NoticeEdit;
