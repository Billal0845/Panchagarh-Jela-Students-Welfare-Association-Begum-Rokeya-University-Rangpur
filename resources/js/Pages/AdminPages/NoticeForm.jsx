import React from "react";
import { useForm } from "@inertiajs/react";
import { Layout } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";

function NoticeForm() {
    // 1. Initialize the Inertia Form Hook
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        written_by: "",
    });

    // 2. Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Since no Ziggy, we use the manual string path
        post("/admin/notice/store", {
            onSuccess: () => reset(), // Clear form on success
        });
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-slate-950 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Create New Notice
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Notice Title
                    </label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className={`mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border ${
                            errors.title
                                ? "border-red-500"
                                : "border-gray-300 dark:border-gray-700"
                        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white`}
                        placeholder="Enter notice title"
                    />
                    {errors.title && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.title}
                        </div>
                    )}
                </div>

                {/* Description Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Description
                    </label>
                    <textarea
                        rows="5"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className={`mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border ${
                            errors.description
                                ? "border-red-500"
                                : "border-gray-300 dark:border-gray-700"
                        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white`}
                        placeholder="Write the notice details here..."
                    />
                    {errors.description && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.description}
                        </div>
                    )}
                </div>

                {/* Written By Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Written By
                    </label>
                    <input
                        type="text"
                        value={data.written_by}
                        onChange={(e) => setData("written_by", e.target.value)}
                        className={`mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border ${
                            errors.written_by
                                ? "border-red-500"
                                : "border-gray-300 dark:border-gray-700"
                        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white`}
                        placeholder="e.g. Admin, Secretary"
                    />
                    {errors.written_by && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.written_by}
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:bg-blue-400"
                    >
                        {processing ? "Submitting..." : "Post Notice"}
                    </button>
                </div>
            </form>
        </div>
    );
}

NoticeForm.layout = (page) => <AdminLayout children={page} />;

export default NoticeForm;
