import React from "react";
import AdminLayout from "../../../layouts/AdminLayout/AdminLayout"; // Adjust path based on your folder structure
import { useForm, Head } from "@inertiajs/react";

const CreateSponsor = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        role: "",
        description: "",
        phone: "",
        email: "",
        website_link: "",
        location_text: "",
        map_location_link: "",
        message_from_him: "",
        note: "",
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Sending to the hardcoded URL
        post("/admin/sponsors", {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <AdminLayout>
            <Head title="Add New Sponsor" />

            <div className="max-w-4xl font-poppins mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                        Add New Sponsor (Legend)
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400">
                        Fill in the details to feature a new pillar of the
                        community.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        {/* Grid for basic info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
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

                            {/* Role */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Role / Designation *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Founder, ABC Hospital"
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

                            {/* Phone */}
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

                            {/* Email */}
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

                        {/* Description */}
                        <div className="mt-6">
                            <label className="block text-sm font-medium mb-1">
                                Short Description *
                            </label>
                            <textarea
                                rows="3"
                                className={`w-full p-2.5 rounded-lg border bg-transparent outline-none transition ${errors.description ? "border-red-500" : "border-slate-300 dark:border-slate-600 focus:border-teal-500"}`}
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            ></textarea>
                            {errors.description && (
                                <div className="text-red-500 text-xs mt-1">
                                    {errors.description}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Media & Location Section */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h2 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400">
                            Media & Links
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Photo Upload */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Profile Photo *
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

                            {/* Website */}
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

                            {/* Location Text */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Location Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Dhaka, Bangladesh"
                                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent outline-none focus:border-teal-500"
                                    value={data.location_text}
                                    onChange={(e) =>
                                        setData("location_text", e.target.value)
                                    }
                                />
                            </div>

                            {/* Map Link */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Google Maps Embed URL
                                </label>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                                    Go to Google Maps &gt; Share &gt; Embed a
                                    map &gt; Copy ONLY the link inside{" "}
                                    <strong>src="..."</strong>
                                </p>
                                <input
                                    type="url"
                                    placeholder="https://www.google.com/maps/embed?pb=..."
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

                    {/* Messages & Notes */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Message From Sponsor
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="A direct quote or message..."
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

                    {/* Submit Button */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => reset()}
                            className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-8 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-lg shadow-teal-500/30 transition disabled:opacity-50"
                        >
                            {processing ? "Saving..." : "Save Sponsor"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default CreateSponsor;
