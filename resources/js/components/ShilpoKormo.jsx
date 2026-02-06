import React from "react";

function ShilpoKormo() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-purple-500 pl-4">
                        আমাদের শিল্পকর্ম
                    </h2>
                    <button className="text-purple-600 font-semibold hover:underline">
                        View All
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="font-bold text-lg mb-2">
                                The River of Panchagarh
                            </h4>
                            <p className="text-gray-600 italic text-sm mb-4">
                                "The water flows where the wind goes..."
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                                <span className="text-xs font-bold text-gray-500">
                                    Poet Name
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ShilpoKormo;
