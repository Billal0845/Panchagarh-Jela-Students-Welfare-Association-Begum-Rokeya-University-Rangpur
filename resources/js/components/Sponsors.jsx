import React, { useState } from "react";
import { Link } from "@inertiajs/react";

function Sponsors({ sponsors }) {
    const [selectedSponsor, setSelectedSponsor] = useState(null);

    return (
        <section className="py-16 bg-linear-to-r from-teal-900 to-teal-800 text-white">
            <div className="max-w-300 mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">
                        Our Legends (Sponsors)
                    </h2>
                    <p className="text-teal-200">
                        The pillars who make our dreams possible. We honor you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.id}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition cursor-pointer group"
                        >
                            <img
                                src={sponsor.photo_url}
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-teal-300 object-cover group-hover:scale-110 transition"
                                alt={sponsor.name}
                            />
                            <h3 className="font-bold text-xl leading-tight">
                                {sponsor.name}
                            </h3>
                            <p className="text-teal-300 text-sm font-medium mb-2">
                                {sponsor.role}
                            </p>
                            <p className="text-teal-100/70 text-xs line-clamp-2 mb-4">
                                {sponsor.description}
                            </p>

                            <Link
                                href={`/sponsor/${sponsor.id}`}
                                className="text-xs bg-teal-500 px-4 py-2 rounded-full text-white font-bold hover:bg-teal-400 transition inline-block"
                            >
                                View Bio
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Simple Bio Modal */}
            {selectedSponsor && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={selectedSponsor.photo_url}
                                        className="w-16 h-16 rounded-full border-2 border-teal-500 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-bold text-xl">
                                            {selectedSponsor.name}
                                        </h3>
                                        <p className="text-teal-600 dark:text-teal-400 text-sm">
                                            {selectedSponsor.role}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedSponsor(null)}
                                    className="text-slate-400 hover:text-slate-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">
                                        About
                                    </h4>
                                    <p className="text-sm leading-relaxed">
                                        {selectedSponsor.description}
                                    </p>
                                </div>

                                {selectedSponsor.message_from_him && (
                                    <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg italic text-sm text-teal-800 dark:text-teal-200 border-l-4 border-teal-500">
                                        "{selectedSponsor.message_from_him}"
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {selectedSponsor.phone && (
                                        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                                            📞 {selectedSponsor.phone}
                                        </span>
                                    )}
                                    {selectedSponsor.email && (
                                        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                                            📧 {selectedSponsor.email}
                                        </span>
                                    )}
                                    {selectedSponsor.website_link && (
                                        <a
                                            href={selectedSponsor.website_link}
                                            target="_blank"
                                            className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700"
                                        >
                                            🌐 Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Sponsors;
