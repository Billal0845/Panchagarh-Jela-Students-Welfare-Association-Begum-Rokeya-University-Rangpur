import React from "react";

function RecentEvents() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4">
                        Recent Events
                    </h2>
                    <button className="text-teal-600 font-semibold hover:underline">
                        View All
                    </button>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-6 snap-x scrollbar-hide">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden snap-center border border-gray-100"
                        >
                            <img
                                src={`https://placehold.co/400x250?text=Event+${item}`}
                                className="w-full h-40 object-cover"
                                alt="Event"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2">
                                    Freshers Reception 2026
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2">
                                    A wonderful evening welcoming our new stars
                                    to the family...
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecentEvents;
