import React from "react";
import { router } from "@inertiajs/react";

const UPOZELAS = ["Sadar", "Tetulia", "Atwari", "Boda", "Debiganj"];
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export default function MemberFilters({ filters }) {
    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        if (!value) delete newFilters[key];
        router.get("/members", newFilters, {
            preserveState: true,
            replace: true,
        });
    };

    const inputClass =
        "block w-full text-sm rounded-xl border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800 px-4 py-3 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all";

    return (
        <div className="grid font-poppins grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div>
                <label className="block mb-2 text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Batch Year
                </label>
                <input
                    type="number"
                    value={filters.batch || ""}
                    onChange={(e) =>
                        handleFilterChange("batch", e.target.value)
                    }
                    className={inputClass}
                    placeholder="e.g. 08"
                />
            </div>
            <div>
                <label className="block mb-2 text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Upozela
                </label>
                <select
                    value={filters.upozela || ""}
                    onChange={(e) =>
                        handleFilterChange("upozela", e.target.value)
                    }
                    className={inputClass}
                >
                    <option value="">All Areas</option>
                    {UPOZELAS.map((u) => (
                        <option key={u} value={u}>
                            {u}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block mb-2 text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Blood Group
                </label>
                <select
                    value={filters.blood_group || ""}
                    onChange={(e) =>
                        handleFilterChange("blood_group", e.target.value)
                    }
                    className={inputClass}
                >
                    <option value="">All Groups</option>
                    {BLOOD_GROUPS.map((bg) => (
                        <option key={bg} value={bg}>
                            {bg}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex items-end">
                <button
                    onClick={() => router.get("/members")}
                    className="w-full py-3 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-bold text-sm hover:bg-white dark:hover:bg-slate-950 transition-all"
                >
                    Clear All Filters
                </button>
            </div>
        </div>
    );
}
