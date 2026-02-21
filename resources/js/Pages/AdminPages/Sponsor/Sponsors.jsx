import React from "react";
import AdminLayout from "../../../layouts/AdminLayout/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

function Sponsors({ sponsors }) {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this legend?")) {
            router.delete(`/admin/sponsors/${id}`);
        }
    };

    const handleExportPDF = () => {
        window.open("/admin/sponsors/export-pdf", "_blank");
    };

    return (
        <>
            <Head title="Sponsors List" />

            <div className="font-poppins flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                        Our Legends
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Manage the pillars of our Jelasomity.
                    </p>
                </div>
                <div className="flex gap-3">
                    {/* PDF Export Button */}
                    <button
                        onClick={handleExportPDF}
                        className="bg-slate-700 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-semibold transition flex items-center gap-2 shadow-lg shadow-slate-500/20"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        Export PDF
                    </button>

                    <Link
                        href="/admin/sponsors/create"
                        className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-semibold transition flex items-center gap-2 shadow-lg shadow-teal-500/20"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Add New Sponsor
                    </Link>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                                <th className="p-4 font-semibold text-sm">
                                    Sponsor
                                </th>
                                <th className="p-4 font-semibold text-sm">
                                    Role & Organization
                                </th>
                                <th className="p-4 font-semibold text-sm">
                                    Contact
                                </th>
                                <th className="p-4 font-semibold text-sm text-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                            {sponsors.length > 0 ? (
                                sponsors.map((sponsor) => (
                                    <tr
                                        key={sponsor.id}
                                        className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition"
                                    >
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={sponsor.photo_url}
                                                    alt={sponsor.name}
                                                    className="w-12 h-12 rounded-full object-cover border-2 border-teal-500/20"
                                                />
                                                <div>
                                                    <div className="font-bold text-slate-800 dark:text-slate-200">
                                                        {sponsor.name}
                                                    </div>
                                                    <div className="text-xs text-slate-500 truncate max-w-37.5">
                                                        {sponsor.location_text ||
                                                            "No Location"}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="text-sm font-medium text-teal-600 dark:text-teal-400">
                                                {sponsor.role}
                                            </div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                                                {sponsor.description}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="text-sm text-slate-700 dark:text-slate-300">
                                                {sponsor.phone || "N/A"}
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                {sponsor.email || "No Email"}
                                            </div>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                {/* Edit Button - Static link for now */}
                                                <Link
                                                    href={`/admin/sponsors/${sponsor.id}/edit`}
                                                    className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                        />
                                                    </svg>
                                                </Link>

                                                {/* Delete Button */}
                                                <button
                                                    onClick={() =>
                                                        handleDelete(sponsor.id)
                                                    }
                                                    className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 transition"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="p-10 text-center text-slate-500"
                                    >
                                        No sponsors found. Click "Add New
                                        Sponsor" to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

Sponsors.layout = (page) => <AdminLayout children={page} />;

export default Sponsors;
