import React from "react";
import GeneralLayout from "../../layouts/StudentLayout/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
import GoogleMap from "@/Components/GoogleMap";

export default function SponsorDetails({ sponsor }) {
    return (
        <GeneralLayout>
            <Head title={`${sponsor.name} - Sponsor Bio`} />

            <section className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
                <div className="max-w-5xl mx-auto px-4">
                    {/* Breadcrumb / Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back to Home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Image and Contact */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 text-center">
                                <img
                                    src={sponsor.photo_url}
                                    alt={sponsor.name}
                                    className="w-48 h-48 rounded-2xl mx-auto object-cover border-4 border-teal-500 mb-6 shadow-lg"
                                />
                                <h1 className="text-2xl font-bold dark:text-white">
                                    {sponsor.name}
                                </h1>
                                <p className="text-teal-600 dark:text-teal-400 font-semibold mb-6">
                                    {sponsor.role}
                                </p>

                                <div className="space-y-3 text-left border-t border-slate-100 dark:border-slate-800 pt-6">
                                    {sponsor.phone && (
                                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                            <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg text-teal-600">
                                                📞
                                            </span>
                                            <span className="text-sm font-medium">
                                                {sponsor.phone}
                                            </span>
                                        </div>
                                    )}
                                    {sponsor.email && (
                                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                            <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg text-teal-600">
                                                📧
                                            </span>
                                            <span className="text-sm font-medium">
                                                {sponsor.email}
                                            </span>
                                        </div>
                                    )}
                                    {sponsor.website_link && (
                                        <a
                                            href={sponsor.website_link}
                                            target="_blank"
                                            className="flex items-center gap-3 text-teal-600 hover:underline"
                                        >
                                            <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg text-teal-600">
                                                🌐
                                            </span>
                                            <span className="text-sm font-medium">
                                                Visit Website
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Bio, Message, and Map */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Bio Section */}
                            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h2 className="text-xl font-bold mb-4 border-b pb-2 border-teal-500 w-fit">
                                    Biography
                                </h2>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                    {sponsor.description}
                                </p>
                            </div>

                            {/* Message Section */}
                            {sponsor.message_from_him && (
                                <div className="bg-teal-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-teal-500/20">
                                    <svg
                                        className="absolute top-4 left-4 h-12 w-12 text-teal-500 opacity-50"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4z" />
                                    </svg>
                                    <h2 className="text-xl font-bold mb-4 relative z-10">
                                        Message to the Community
                                    </h2>
                                    <p className="text-lg italic leading-relaxed relative z-10 opacity-90">
                                        "{sponsor.message_from_him}"
                                    </p>
                                </div>
                            )}

                            {/* Location & Map Section */}
                            {(sponsor.location_text ||
                                sponsor.map_location_link) && (
                                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                                    <h2 className="text-xl font-bold mb-4">
                                        Location
                                    </h2>
                                    <p className="flex items-center gap-2 text-slate-500 mb-4 italic">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-red-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {sponsor.location_text || "Our Office"}
                                    </p>

                                    <GoogleMap
                                        mapLink={sponsor.map_location_link}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </GeneralLayout>
    );
}
