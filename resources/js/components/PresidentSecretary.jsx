import React from "react";
import { motion } from "framer-motion";

function PresidentSecretary() {
    return (
        <section className="bg-linear-to-b from-teal-50 to-white overflow-hidden py-12 md:py-20">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* President (Left Slide) */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl border-t-4 border-teal-500"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="President"
                            className="w-32 h-32 rounded-full border-4 border-teal-100 mb-4 object-cover"
                        />
                        <h2 className="text-2xl font-bold text-gray-800">
                            Your Name
                        </h2>
                        <span className="text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full text-sm mt-1">
                            President
                        </span>
                        <p className="mt-4 text-gray-500 text-sm italic">
                            "My introversion is my focus. I am here to build a
                            legacy, not just deliver speeches."
                        </p>
                    </motion.div>

                    {/* Secretary (Right Slide) */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl border-t-4 border-blue-500"
                    >
                        <img
                            src="https://placehold.co/150x150"
                            alt="Secretary"
                            className="w-32 h-32 rounded-full border-4 border-blue-100 mb-4 object-cover"
                        />
                        <h2 className="text-2xl font-bold text-gray-800">
                            Secretary Name
                        </h2>
                        <span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full text-sm mt-1">
                            General Secretary
                        </span>
                        <p className="mt-4 text-gray-500 text-sm italic">
                            "Working hand in hand to ensure every student's
                            welfare is prioritized."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default PresidentSecretary;
