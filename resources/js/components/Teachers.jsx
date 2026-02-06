import React from "react";
import { FaUserTie, FaChalkboardTeacher } from "react-icons/fa";
function Teachers() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Teachers */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaChalkboardTeacher className="text-teal-600" /> From
                        BRUR
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
                                    alt="Teacher"
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
                        <FaChalkboardTeacher className="text-teal-600" /> From
                        Other University
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
                                    alt="Tutor"
                                />
                                <div>
                                    <h4 className="font-bold">Teacher Name</h4>
                                    <p className="text-xs text-gray-500">
                                        Department,Collage Name
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teachers;
