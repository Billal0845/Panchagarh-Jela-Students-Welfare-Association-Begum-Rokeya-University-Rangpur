import React, { useEffect, useState } from "react";
import GeneralLayout from "../layouts/AdminLayout/GeneralLayout";
import { motion } from "framer-motion"; // Ensure you installed this
import { FaArrowRight, FaUserTie, FaChalkboardTeacher } from "react-icons/fa";

export default function LandingPage() {
    // 2. Hero Section Logic
    const [heroVisible, setHeroVisible] = useState(false);
    useEffect(() => {
        setHeroVisible(true);
    }, []);

    return (
        <GeneralLayout>
            {/* HERO SECTION */}
            <section className="bg-gradient-to-b from-teal-50 to-white overflow-hidden py-12 md:py-20">
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
                                "My introversion is my focus. I am here to build
                                a legacy, not just deliver speeches."
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

            {/* 3. RECENT EVENTS (Circular Slider logic simplified for prototype) */}
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

                    {/* Horizontal Scroll Container */}
                    <div className="flex gap-6 overflow-x-auto pb-6 snap-x">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden snap-center border border-gray-100"
                            >
                                <img
                                    src={`https://placehold.co/400x250?text=Event+${item}`}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-2">
                                        Freshers Reception 2026
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-2">
                                        A wonderful evening welcoming our new
                                        stars to the family...
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. OUR CREATIVE WORKS (আমাদের শিল্পকর্ম) */}
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

            {/* 5. OUR LEGENDS (SPONSORS) */}
            <section className="py-16 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-2">
                            Our Legends (Sponsors)
                        </h2>
                        <p className="text-teal-200">
                            The pillars who make our dreams possible. We honor
                            you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition cursor-pointer group"
                            >
                                <img
                                    src={`https://placehold.co/100x100?text=Sponsor`}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-teal-300 group-hover:scale-110 transition"
                                />
                                <h3 className="font-bold text-xl">
                                    Mr. Rahim Uddin
                                </h3>
                                <p className="text-teal-200 text-sm mb-4">
                                    Founder, ABC Hospital
                                </p>
                                <button className="text-xs bg-teal-500 px-4 py-2 rounded-full text-white font-bold hover:bg-teal-400">
                                    View Bio
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. OUR ALUMNI */}
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

            {/* 7 & 8. TEACHERS & TUTORS GRID */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Teachers */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <FaChalkboardTeacher className="text-teal-600" />{" "}
                            Honorable Teachers
                        </h2>
                        <div className="space-y-4">
                            {[1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
                                >
                                    <img
                                        src="https://placehold.co/60x60"
                                        className="w-14 h-14 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-bold">
                                            Professor Name
                                        </h4>
                                        <p className="text-xs text-gray-500">
                                            Dept of Mathematics, BRUR
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expert Tutors */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <FaUserTie className="text-blue-600" /> Expert Home
                            Tutors
                        </h2>
                        <div className="space-y-4">
                            {[1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
                                >
                                    <img
                                        src="https://placehold.co/60x60"
                                        className="w-14 h-14 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-bold">
                                            Student Name
                                        </h4>
                                        <p className="text-xs text-gray-500">
                                            Expert in Physics & Math
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </GeneralLayout>
    );
}
