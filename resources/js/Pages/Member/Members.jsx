import React, { useState, useEffect } from "react";
import { Link, useForm, router } from "@inertiajs/react";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import MemberFilters from "./MemberFilters";
import {
    Edit,
    Trash2,
    UserPlus,
    Phone,
    Droplet,
    Search,
    Filter,
    FileDown,
    X,
} from "lucide-react";

function Members({ members, filters }) {
    const { delete: destroy } = useForm();
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState(filters.search || "");

    // Search with 500ms delay (Debounce)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery !== (filters.search || "")) {
                router.get(
                    "/members",
                    { ...filters, search: searchQuery },
                    { preserveState: true, replace: true },
                );
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this member?")) {
            destroy(`/members/${id}`);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Members
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                        Manage your directory and track member status
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Link
                        href="/members/create"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-violet-500/20"
                    >
                        <UserPlus size={18} /> Add Member
                    </Link>
                    <button
                        onClick={() =>
                            (window.location.href = `/members/export/pdf?${new URLSearchParams(filters).toString()}`)
                        }
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                    >
                        <FileDown size={18} /> Export PDF
                    </button>
                </div>
            </div>

            {/* Design inspired Search & Utility Bar */}
            <div className="bg-[#0f172a]/5 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        size={20}
                    />
                    <input
                        type="text"
                        placeholder="Search by name, department, or phone..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/50 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-500 transition-all outline-none"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    {/* Inline Toggle: Employed Only */}
                    <label className="flex items-center gap-3 bg-white dark:bg-slate-950 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex-1 lg:flex-none">
                        <input
                            type="checkbox"
                            checked={filters.has_job === "true"}
                            onChange={(e) =>
                                router.get(
                                    "/members",
                                    {
                                        ...filters,
                                        has_job: e.target.checked ? "true" : "",
                                    },
                                    { preserveState: true },
                                )
                            }
                            className="w-5 h-5 rounded border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                            Employed Only
                        </span>
                    </label>

                    {/* Filter Toggle Button */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 transition-all font-bold flex-1 lg:flex-none ${
                            showFilters
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500"
                        }`}
                    >
                        {showFilters ? <X size={18} /> : <Filter size={18} />}
                        <span>Filters</span>
                    </button>
                </div>
            </div>

            {/* Collapsible Panel */}
            {showFilters && (
                <div className="animate-in fade-in zoom-in-95 duration-200">
                    <MemberFilters filters={filters} />
                </div>
            )}

            {/* Table Container - Style matched to your layout */}
            <div className="bg-white dark:bg-[#0f172a]/50 shadow-xl border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                                    Member
                                </th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                                    Academic
                                </th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                                    Location
                                </th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                                    Blood Group
                                </th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 text-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {members.map((member) => (
                                <tr
                                    key={member.id}
                                    className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
                                >
                                    <td className="px-6 py-1">
                                        <div className="flex items-center gap-3">
                                            {member.photo ? (
                                                <img
                                                    src={`/storage/${member.photo}`}
                                                    className="h-15 w-15 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-15 w-15 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">
                                                    {member.name[0]}
                                                </div>
                                            )}
                                            <div>
                                                <div className="font-bold text-slate-900 dark:text-white">
                                                    {member.name}
                                                </div>
                                                <div className="text-xs text-slate-500">
                                                    {member.phone}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                                        {member.department} (Batch{" "}
                                        {member.batch})
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                                        {member.upozela}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-xs font-bold">
                                            {member.blood_group}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                href={`/members/${member.id}/edit`}
                                                className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg"
                                            >
                                                <Edit size={18} />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(member.id)
                                                }
                                                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

Members.layout = (page) => <AdminLayout children={page} />;
export default Members;
