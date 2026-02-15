import React from "react";
import AdminLayout from "../../../layouts/AdminLayout/AdminLayout";
import { useForm, Head, router } from "@inertiajs/react";

const Edit = ({ sponsor }) => {
    const { data, setData, errors, processing } = useForm({
        name: sponsor.name || "",
        role: sponsor.role || "",
        phone: sponsor.phone || "",
        description: sponsor.description || "",
        email: sponsor.email || "",
        website_link: sponsor.website_link || "",
        location_text: sponsor.location_text || "",
        map_location_link: sponsor.map_location_link || "",
        message_from_him: sponsor.message_from_him || "",
        note: sponsor.note || "",
        photo: null,
        _method: "put",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Use router.post with _method: put because of file upload limitations in PHP
        router.post(`/admin/sponsors/${sponsor.id}`, data, {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit ${sponsor.name}`} />

            <div className="max-w-4xl font-poppins mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                        Edit Sponsor: {sponsor.name}
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Section 1: Required & Basic Info */}
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
                                {errors.role && (
                                    <div className="text-red-500 text-xs mt-1">
                                        {errors.role}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Phone *
                                </label>
                                <input
                                    type="text"
                                    className={`w-full p-2.5 rounded-lg border bg-transparent outline-none transition ${errors.phone ? "border-red-500" : "border-slate-300 dark:border-slate-600 focus:border-teal-500"}`}
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />
                                {errors.phone && (
                                    <div className="text-red-500 text-xs mt-1">
                                        {errors.phone}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email (Optional)
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none focus:border-teal-500"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium mb-1">
                                Short Description (Optional)
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

                    {/* Section 2: Media & Links */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h2 className="text-lg font-semibold mb-4 text-teal-600">
                            Media & Links
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Profile Photo
                                </label>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={sponsor.photo_url}
                                        className="w-12 h-12 rounded-full object-cover border border-teal-500"
                                        alt="Current"
                                    />
                                    <input
                                        type="file"
                                        className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                                        onChange={(e) =>
                                            setData("photo", e.target.files[0])
                                        }
                                    />
                                </div>
                                {errors.photo && (
                                    <div className="text-red-500 text-xs mt-1">
                                        {errors.photo}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Website Link
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://..."
                                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none focus:border-teal-500"
                                    value={data.website_link}
                                    onChange={(e) =>
                                        setData("website_link", e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Location Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="City, Country"
                                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none focus:border-teal-500"
                                    value={data.location_text}
                                    onChange={(e) =>
                                        setData("location_text", e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Google Maps URL
                                </label>
                                <input
                                    type="url"
                                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none focus:border-teal-500"
                                    value={data.map_location_link}
                                    onChange={(e) =>
                                        setData(
                                            "map_location_link",
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Messages & Notes */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Message From Sponsor
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Personal quote or message..."
                                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none focus:border-teal-500"
                                    value={data.message_from_him}
                                    onChange={(e) =>
                                        setData(
                                            "message_from_him",
                                            e.target.value,
                                        )
                                    }
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Internal Note (Private)
                                </label>
                                <textarea
                                    rows="2"
                                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none focus:border-teal-500"
                                    value={data.note}
                                    onChange={(e) =>
                                        setData("note", e.target.value)
                                    }
                                ></textarea>
                            </div>
                        </div>
                    </div>

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

export default Edit;
