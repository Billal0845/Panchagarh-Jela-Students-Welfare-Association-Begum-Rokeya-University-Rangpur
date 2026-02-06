import React from "react";
import AdminLayout from "../../../layouts/AdminLayout/AdminLayout";
import { useForm, Head, router } from "@inertiajs/react";

const EditSponsor = ({ sponsor }) => {
    const { data, setData, errors, processing } = useForm({
        name: sponsor.name || "",
        role: sponsor.role || "",
        description: sponsor.description || "",
        phone: sponsor.phone || "",
        email: sponsor.email || "",
        website_link: sponsor.website_link || "",
        location_text: sponsor.location_text || "",
        map_location_link: sponsor.map_location_link || "",
        message_from_him: sponsor.message_from_him || "",
        note: sponsor.note || "",
        photo: null, // New file if uploaded
        _method: "put", // Crucial for Laravel to treat POST as PUT
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since we are uploading a file, we use post even for updating
        router.post(`/admin/sponsors/${sponsor.id}`, data, {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit ${sponsor.name}`} />

            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                            Edit Sponsor
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400">
                            Update information for {sponsor.name}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    className={`w-full p-2.5 rounded-lg border bg-transparent outline-none transition ${errors.name ? "border-red-500" : "border-slate-300 dark:border-slate-600 focus:border-teal-500"}`}
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <div className="text-red-500 text-xs mt-1">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Role / Designation *
                                </label>
                                <input
                                    type="text"
                                    className={`w-full p-2.5 rounded-lg border bg-transparent outline-none transition ${errors.role ? "border-red-500" : "border-slate-300 dark:border-slate-600 focus:border-teal-500"}`}
                                    value={data.role}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium mb-1">
                                Short Description *
                            </label>
                            <textarea
                                rows="3"
                                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none focus:border-teal-500"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h2 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400">
                            Profile Image
                        </h2>
                        <div className="flex items-center gap-6">
                            <div className="shrink-0">
                                <img
                                    src={sponsor.photo_url}
                                    className="w-20 h-20 rounded-full object-cover border-2 border-teal-500"
                                    alt="Current"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-1">
                                    Upload New Photo (Leave blank to keep
                                    current)
                                </label>
                                <input
                                    type="file"
                                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                                    onChange={(e) =>
                                        setData("photo", e.target.files[0])
                                    }
                                />
                                {errors.photo && (
                                    <div className="text-red-500 text-xs mt-1">
                                        {errors.photo}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => router.get("/admin/sponsors")}
                            className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-8 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-lg shadow-teal-500/30 transition disabled:opacity-50"
                        >
                            {processing ? "Updating..." : "Update Sponsor"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default EditSponsor;
