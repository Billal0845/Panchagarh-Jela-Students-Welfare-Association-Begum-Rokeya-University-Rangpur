import React, { useState } from "react";
import { useForm, Link } from "@inertiajs/react";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";

const UPOZELAS = ["Sadar", "Tetulia", "Atwari", "Boda", "Debiganj"];
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

function MemberForm() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        batch: "",
        department: "",
        upozela: "",
        phone: "",
        blood_group: "",
        has_job: false,
        job_post: "",
        photo: null,
    });

    const [preview, setPreview] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setData("photo", file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post("/members", {
            forceFormData: true,
        });
    };

    const inputClass =
        "w-full mt-1 px-4 py-2 border rounded-lg bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all";
    const labelClass =
        "text-sm font-semibold text-slate-700 dark:text-slate-300";

    return (
        <div className="max-w-300 mx-auto pb-10 font-poppins">
            <form
                onSubmit={submit}
                className="bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-10"
            >
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Register New Member
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400">
                        Fill in the details to add a new member to the
                        directory.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Photo Upload */}
                    <div className="md:col-span-2 flex flex-col items-center sm:flex-row gap-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-600">
                        <div className="h-24 w-24 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 flex-shrink-0 border-2 border-white dark:border-slate-600 shadow-md">
                            {preview ? (
                                <img
                                    src={preview}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center text-slate-400 text-xs text-center px-2">
                                    No Photo
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <label className={labelClass}>
                                Profile Photo Max 2MB
                            </label>
                            <input
                                type="file"
                                onChange={handlePhotoChange}
                                className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-slate-700 dark:file:text-slate-300 hover:file:bg-blue-100 transition-all"
                            />
                            {errors.photo && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.photo}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Name */}
                    <div className="md:col-span-2">
                        <label className={labelClass}>Full Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={inputClass}
                            placeholder="Enter full name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Batch & Phone */}
                    <div>
                        <label className={labelClass}>Batch</label>
                        <input
                            type="number"
                            value={data.batch}
                            onChange={(e) => setData("batch", e.target.value)}
                            className={inputClass}
                            placeholder="e.g. 10"
                        />
                        {errors.batch && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.batch}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className={labelClass}>Phone Number</label>
                        <input
                            type="text"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            className={inputClass}
                            placeholder="017XXXXXXXX"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Department & Upozela */}
                    <div>
                        <label className={labelClass}>Department</label>
                        <input
                            type="text"
                            value={data.department}
                            onChange={(e) =>
                                setData("department", e.target.value)
                            }
                            className={inputClass}
                            placeholder="e.g. CSE"
                        />
                    </div>

                    <div>
                        <label className={labelClass}>Upozela</label>
                        <select
                            value={data.upozela}
                            onChange={(e) => setData("upozela", e.target.value)}
                            className={inputClass}
                        >
                            <option value="">Select Upozela</option>
                            {UPOZELAS.map((u) => (
                                <option key={u} value={u}>
                                    {u}
                                </option>
                            ))}
                        </select>
                        {errors.upozela && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.upozela}
                            </p>
                        )}
                    </div>

                    {/* Blood Group (Radios) */}
                    <div className="md:col-span-2">
                        <label className={labelClass}>Blood Group</label>
                        <div className="flex flex-wrap gap-3 mt-3">
                            {BLOOD_GROUPS.map((group) => (
                                <label
                                    key={group}
                                    className="relative cursor-pointer group"
                                >
                                    <input
                                        type="radio"
                                        name="blood_group"
                                        value={group}
                                        checked={data.blood_group === group}
                                        onChange={(e) =>
                                            setData(
                                                "blood_group",
                                                e.target.value,
                                            )
                                        }
                                        className="peer sr-only"
                                    />
                                    <div
                                        className="px-4 py-2 text-sm font-medium border rounded-lg
border-slate-300 dark:border-slate-600
bg-white dark:bg-slate-800
text-slate-700 dark:text-slate-300
peer-checked:bg-red-600
peer-checked:text-white
peer-checked:border-red-600
peer-checked:ring-2
peer-checked:ring-red-400
peer-checked:ring-offset-2
dark:peer-checked:ring-offset-slate-900
transition-all
hover:bg-slate-50 dark:hover:bg-slate-700
shadow-sm"
                                    >
                                        {group}
                                    </div>
                                </label>
                            ))}
                        </div>
                        {errors.blood_group && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.blood_group}
                            </p>
                        )}
                    </div>

                    {/* Job Status (Checkbox) */}
                    <div className="md:col-span-2 pt-4">
                        <label className="flex items-center gap-3 cursor-pointer group w-fit">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={data.has_job}
                                    onChange={(e) =>
                                        setData("has_job", e.target.checked)
                                    }
                                    className="peer sr-only"
                                    id="has_job"
                                />
                                <div className="w-10 h-6 bg-slate-300 dark:bg-slate-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </div>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Currently has a job
                            </span>
                        </label>
                    </div>

                    {data.has_job && (
                        <div className="md:col-span-2 animate-in fade-in slide-in-from-top-2">
                            <label className={labelClass}>
                                Current Job Post / Organization
                            </label>
                            <input
                                type="text"
                                value={data.job_post}
                                onChange={(e) =>
                                    setData("job_post", e.target.value)
                                }
                                className={inputClass}
                                placeholder="Software Engineer at Company X"
                            />
                            {errors.job_post && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.job_post}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row justify-end gap-4 border-t border-slate-100 dark:border-slate-700 pt-8">
                    <Link
                        href="/members"
                        className="px-6 py-2.5 text-center text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-all"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-500/30 disabled:opacity-50 transition-all"
                    >
                        {processing ? "Saving..." : "Save Member"}
                    </button>
                </div>
            </form>
        </div>
    );
}

MemberForm.layout = (page) => <AdminLayout children={page} />;
export default MemberForm;
