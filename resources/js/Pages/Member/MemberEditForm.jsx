import React, { useState } from "react";
import { useForm, Link } from "@inertiajs/react";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";

const UPOZELAS = ["Sadar", "Tetulia", "Atwari", "Boda", "Debiganj"];
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

function MemberEditForm({ member }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: "PUT", // Spoofing PUT for file upload support
        name: member.name || "",
        batch: member.batch || "",
        department: member.department || "",
        upozela: member.upozela || "",
        phone: member.phone || "",
        blood_group: member.blood_group || "",
        has_job: member.has_job === 1 || member.has_job === true,
        job_post: member.job_post || "",
        photo: null,
    });

    const [preview, setPreview] = useState(
        member.photo ? `/storage/${member.photo}` : null,
    );

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setData("photo", file);
        if (file) setPreview(URL.createObjectURL(file));
    };

    const submit = (e) => {
        e.preventDefault();
        // Since we are uploading files, we must use POST and rely on _method: "PUT"
        post(`/members/${member.id}`, {
            forceFormData: true,
        });
    };

    const inputClass =
        "w-full mt-1 px-4 py-2 border rounded-lg bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all";
    const labelClass =
        "text-sm font-semibold text-slate-700 dark:text-slate-300";

    return (
        <div className="max-w-4xl mx-auto pb-10">
            <form
                onSubmit={submit}
                className="bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-10"
            >
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Edit Member Details
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400">
                        Modify information for {member.name}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Photo Edit */}
                    <div className="md:col-span-2 flex flex-col items-center sm:flex-row gap-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-600">
                        <div className="h-24 w-24 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 flex-shrink-0 border-2 border-white dark:border-slate-600 shadow-md">
                            {preview ? (
                                <img
                                    src={preview}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center text-slate-400 text-xs">
                                    No Photo
                                </div>
                            )}
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <label className={labelClass}>
                                Change Profile Photo
                            </label>
                            <input
                                type="file"
                                onChange={handlePhotoChange}
                                className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 dark:file:bg-slate-700 dark:file:text-slate-300 transition-all"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className={labelClass}>Full Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={inputClass}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className={labelClass}>Batch</label>
                        <input
                            type="number"
                            value={data.batch}
                            onChange={(e) => setData("batch", e.target.value)}
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className={labelClass}>Phone</label>
                        <input
                            type="text"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className={labelClass}>Department</label>
                        <input
                            type="text"
                            value={data.department}
                            onChange={(e) =>
                                setData("department", e.target.value)
                            }
                            className={inputClass}
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
                    </div>

                    {/* Blood Group Radios */}
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
                    </div>

                    {/* Job Checkbox */}
                    <div className="md:col-span-2 pt-4">
                        <label className="flex items-center gap-3 cursor-pointer w-fit">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={data.has_job}
                                    onChange={(e) =>
                                        setData("has_job", e.target.checked)
                                    }
                                    className="peer sr-only"
                                    id="has_job_edit"
                                />
                                <div className="w-10 h-6 bg-slate-300 dark:bg-slate-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                            </div>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Employed
                            </span>
                        </label>
                    </div>

                    {data.has_job && (
                        <div className="md:col-span-2">
                            <label className={labelClass}>
                                Job Post / Company
                            </label>
                            <input
                                type="text"
                                value={data.job_post}
                                onChange={(e) =>
                                    setData("job_post", e.target.value)
                                }
                                className={inputClass}
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
                        className="px-6 py-2.5 text-center text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-8 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-indigo-500/30 disabled:opacity-50 transition-all"
                    >
                        {processing ? "Updating..." : "Update Member"}
                    </button>
                </div>
            </form>
        </div>
    );
}

MemberEditForm.layout = (page) => <AdminLayout children={page} />;
export default MemberEditForm;
