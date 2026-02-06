import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function GeneralLayout({ children, user }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navLinks = [
        { name: "Notice", href: "#" },
        { name: "Our Alumni", href: "#" },
        { name: "Soft Skill Army", href: "#" },
        { name: "Our Legends", href: "#" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="w-full max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Left: Sidebar Toggle & Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="text-2xl lg:hidden text-teal-700"
                        >
                            <HiMenuAlt1 />
                        </button>
                        <div className="flex items-center gap-2">
                            {/* Replace with actual Logo */}
                            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                                PJ
                            </div>
                            <span className="font-bold text-lg md:text-xl text-teal-800">
                                Panchagarh Jela Somity
                            </span>
                        </div>
                    </div>

                    {/* Middle: Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-teal-600 font-medium transition"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Login Button */}
                    <div>
                        <Link
                            href="/login"
                            className="px-5 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold hover:bg-teal-700 transition shadow-lg"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Sidebar (Mobile) */}
            <div
                className={`fixed inset-0 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`}
            >
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
                <div className="relative bg-white w-64 h-full shadow-xl p-5 flex flex-col">
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="self-end text-2xl text-gray-500 mb-8"
                    >
                        <HiX />
                    </button>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-700 hover:text-teal-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="pt-16 min-h-[calc(100vh-300px)]">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-20 py-10">
                <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-teal-400">
                            Panchagarh Jela Somity
                        </h3>
                        <p className="text-gray-400 text-sm">
                            United we stand, representing our family at BRUR.
                            Supporting students, building leaders.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Blood Donors
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Our Teachers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Connect With Us
                        </h3>
                        <div className="flex justify-center md:justify-start gap-4 text-2xl">
                            <a
                                href="#"
                                className="text-blue-500 hover:scale-110 transition"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="#"
                                className="text-red-500 hover:scale-110 transition"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="#"
                                className="text-green-500 hover:scale-110 transition"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-600 text-xs mt-10 border-t border-gray-800 pt-4">
                    &copy; {new Date().getFullYear()} PJ Welfare Association.
                    Developed by The EngliWeb Team (President).
                </div>
            </footer>
        </div>
    );
}
