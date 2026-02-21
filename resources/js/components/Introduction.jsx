import React from "react";

export default function Introduction() {
    // Enhanced & verified data
    const stats = [
        { icon: "📅", value: "১৯৮৪", label: "প্রতিষ্ঠা সাল" },
        { icon: "📍", value: "৫ টি", label: "উপজেলা" },
        { icon: "📏", value: "১৪০৪.৬২", label: "আয়তন (বর্গ কিমি)" },
        { icon: "🌊", value: "৪৬ টি", label: "নদ-নদী" },
    ];

    const garhs = [
        { name: "ভিতরগড়", desc: "প্রাচীন ও সর্ববৃহৎ দুর্গ নগরী" },
        { name: "মীরগড়", desc: "ঐতিহাসিক প্রত্নতাত্ত্বিক নিদর্শন" },
        { name: "রাজনগড়", desc: "প্রাচীন শাসকদের অন্যতম কেন্দ্র" },
        { name: "হোসেনগড়", desc: "হোসেন শাহী আমলের স্মৃতিবিজড়িত" },
        { name: "দেবনগড়", desc: "প্রাচীন জনপদ ও দুর্গ" },
    ];

    const touristSpots = [
        {
            name: "বাংলাবান্ধা জিরো পয়েন্ট",
            description:
                "দেশের একমাত্র চতুর্দেশীয় (বাংলাদেশ, ভারত, নেপাল, ভুটান) স্থলবন্দর ও জিরো পয়েন্ট।",
            icon: "🚩",
            color: "bg-red-50 text-red-500 dark:bg-red-900/20 dark:text-red-400",
        },
        {
            name: "সমতলের চা বাগান",
            description:
                "সিলেট বা চট্টগ্রামের পর পঞ্চগড়ই দেশের দ্বিতীয় বৃহত্তম এবং একমাত্র সমতলের চা উৎপাদনকারী অঞ্চল।",
            icon: "🌿",
            color: "bg-green-50 text-green-500 dark:bg-green-900/20 dark:text-green-400",
        },
        {
            name: "ভিতরগড় মহারাজার দীঘি",
            description:
                "প্রাচীন আমলের স্থাপত্য ও প্রত্নতাত্ত্বিক নিদর্শনের এক বিশাল দুর্গ নগরী এবং ঐতিহাসিক দীঘি।",
            icon: "🏰",
            color: "bg-amber-50 text-amber-500 dark:bg-amber-900/20 dark:text-amber-400",
        },
        {
            name: "তেঁতুলিয়া ডাকবাংলো",
            description:
                "মহানন্দা নদীর তীরে অবস্থিত ঐতিহাসিক স্থান, যেখান থেকে শীতকালে কাঞ্চনজঙ্ঘা সবচেয়ে স্পষ্ট দেখা যায়।",
            icon: "🏔️",
            color: "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400",
        },
        {
            name: "মির্জাপুর শাহী মসজিদ",
            description:
                "মোগল স্থাপত্যশৈলীর এক অনন্য নিদর্শন, যা এর প্রাচীন টেরাকোটা ও নকশার জন্য বিখ্যাত।",
            icon: "🕌",
            color: "bg-emerald-50 text-emerald-500 dark:bg-emerald-900/20 dark:text-emerald-400",
        },
        {
            name: "রক্স মিউজিয়াম",
            description:
                "দেশের একমাত্র পাথরের জাদুঘর, যেখানে পঞ্চগড় সরকারি মহিলা কলেজে হাজার বছরের পুরোনো পাথর সংরক্ষিত আছে।",
            icon: "🪨",
            color: "bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400",
        },
    ];

    return (
        <div className="font-hind bg-gray-50 dark:bg-slate-950 min-h-screen py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-sm font-semibold tracking-wider mb-2">
                        উত্তরের প্রবেশদ্বার
                    </span>
                    <h1 className="text-4xl p-2 md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300 mb-6 pb-2">
                        হিমালয়কন্যা পঞ্চগড়
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        বাংলাদেশের মানচিত্রের সর্ব উত্তরের একটি জেলা, যা তার
                        প্রাকৃতিক সৌন্দর্য এবং বৈচিত্র্যময় ইতিহাসের জন্য
                        সমাদৃত। সমতলের চা বাগান আর কাঞ্চনজঙ্ঘার অপরূপ দৃশ্য এই
                        জেলাকে দিয়েছে এক অনন্য পরিচিতি।
                    </p>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <div className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* History & Geography Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {/* Naming & History */}
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-md border-t-4 border-teal-500 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-2xl group-hover:bg-teal-200 transition-colors"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center relative z-10">
                            <span className="text-3xl mr-3">📜</span> নামকরণ ও
                            ইতিহাস
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed relative z-10 text-justify">
                            পঞ্চগড় জেলার নামকরণ নিয়ে বেশ কিছু জনশ্রুতি রয়েছে।
                            সবচেয়ে গ্রহণযোগ্য ধারণা মতে, এই অঞ্চলে পাঁচটি
                            প্রাচীন 'গড়' বা দুর্গ ছিল, যার কারণে এর নাম হয়েছে
                            'পঞ্চগড়'। ব্রিটিশ আমলে এটি জলপাইগুড়ি জেলার
                            অন্তর্গত ছিল।
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                            {garhs.map((garh, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-3 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-slate-700"
                                >
                                    <div className="w-2 h-2 rounded-full bg-teal-500 mr-3"></div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                                            {garh.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {garh.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Geography */}
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-md border-t-4 border-orange-400 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-2xl group-hover:bg-orange-200 transition-colors"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center relative z-10">
                            <span className="text-3xl mr-3">🗺️</span> ভৌগোলিক
                            পরিচিতি
                        </h2>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-xl mr-4 border border-orange-100 dark:border-orange-800">
                                    🧭
                                </div>
                                <div>
                                    <span className="block font-bold text-gray-800 dark:text-gray-200 text-lg mb-1">
                                        আন্তর্জাতিক সীমানা
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        জেলার তিন দিকেই ভারতের দার্জিলিং,
                                        জলপাইগুড়ি ও কোচবিহার জেলার সাথে প্রায়
                                        ২৮৮ কিমি সীমানা রয়েছে।
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-xl mr-4 border border-blue-100 dark:border-blue-800">
                                    🌊
                                </div>
                                <div>
                                    <span className="block font-bold text-gray-800 dark:text-gray-200 text-lg mb-1">
                                        নদ-নদী
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        করতোয়া, আত্রাই, তিস্তা, মহানন্দা, ডাহুক
                                        ও টাঙ্গনসহ প্রায় ১৬টি নদী এই জেলার উপর
                                        দিয়ে প্রবাহিত।
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-xl mr-4 border border-purple-100 dark:border-purple-800">
                                    ✨
                                </div>
                                <div>
                                    <span className="block font-bold text-gray-800 dark:text-gray-200 text-lg mb-1">
                                        বিশেষ আকর্ষণ
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        ভৌগোলিক অবস্থানের কারণে শীতকালে আকাশ
                                        পরিষ্কার থাকলে এখান থেকে মাউন্ট
                                        কাঞ্চনজঙ্ঘার অপরূপ দৃশ্য দেখা যায়।
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Tourist Spots Grid (Replaced Table) */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                            দর্শনীয় স্থানসমূহ
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            ইতিহাস আর প্রকৃতির এক অপূর্ব মেলবন্ধন তৈরি করেছে
                            পঞ্চগড়ের দর্শনীয় স্থানগুলো।
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {touristSpots.map((spot, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800 group relative overflow-hidden"
                            >
                                <div
                                    className={`w-16 h-16 flex items-center justify-center rounded-2xl text-3xl mb-6 ${spot.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                                >
                                    {spot.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                    {spot.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {spot.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Economy & Culture */}
                <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-900 p-8 md:p-14 rounded- text-white shadow-2xl relative overflow-hidden">
                    {/* Background Decors */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-emerald-400 rounded-full opacity-20 blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
                            অর্থনীতি ও সংস্কৃতি{" "}
                            <span className="ml-4 text-4xl">🌾</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-teal-50">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-teal-200 border-b border-teal-600/50 pb-2">
                                    কৃষি ও শিল্প
                                </h3>
                                <p className="leading-relaxed text-justify">
                                    পঞ্চগড়ের অর্থনীতি মূলত কৃষিভিত্তিক। তবে
                                    এখানকার <strong>পাথর ও বালি শিল্প</strong>{" "}
                                    সারা দেশে পরিচিত। এছাড়া{" "}
                                    <strong>'সমতলের অর্গানিক চা'</strong> চাষে
                                    পঞ্চগড় এক নীরব বিপ্লব ঘটিয়েছে, যা দেশের
                                    অর্থনীতিতে গুরুত্বপূর্ণ ভূমিকা রাখছে।
                                </p>
                            </div>
                            <div className="space-y-4 md:border-l md:border-teal-600/50 md:pl-10">
                                <h3 className="text-xl font-semibold text-teal-200 border-b border-teal-600/50 pb-2">
                                    জীবনযাত্রা
                                </h3>
                                <p className="leading-relaxed text-justify">
                                    এ অঞ্চলের মানুষের ভাষা, সংস্কৃতি ও লোকজ
                                    ঐতিহ্যে (যেমন ভাওয়াইয়া গান) এক ধরণের
                                    স্নিগ্ধতা ও সারল্য মিশে আছে। উত্তরবঙ্গের এই
                                    শান্ত জনপদ পর্যটকদের হৃদয়ে সবসময় আলাদা
                                    জায়গা করে নেয়।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
