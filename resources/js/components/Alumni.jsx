import React from "react";

function Alumni() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-orange-500 pl-4">
                    Our Alumni
                </h2>
                <div className="flex gap-6 overflow-x-auto pb-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div
                            key={item}
                            className="min-w-[200px] flex flex-col items-center text-center"
                        >
                            <img
                                src={`https://placehold.co/120x120`}
                                className="w-24 h-24 rounded-full border-2 border-gray-200 shadow-md mb-3"
                                alt="Alumni"
                            />
                            <h4 className="font-bold text-gray-800">
                                Alumni Name
                            </h4>
                            <p className="text-xs text-gray-500">
                                Senior Software Engineer, Google
                            </p>
                            <button className="mt-2 text-xs text-blue-600 hover:underline">
                                Connect
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Alumni;
