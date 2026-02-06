import React from "react";
import { Link } from "@inertiajs/react";
import { BsArrowLeftCircleFill, BsNewspaper } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdSettings, MdLightMode, MdDarkMode } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { GoSponsorTiers } from "react-icons/go";

// ... (imports remain the same)

function Sidebar({ collapsed, setCollapsed, darkMode, toggleDarkMode }) {
    return (
        <aside
            className={`dark:bg-slate-950 dark:text-white font-poppins sticky top-0 left-0 h-screen overflow-y-auto bg-white border-r border-gray-300 dark:border-gray-700 shadow-sm transition-all duration-300 z-50 shrink-0
          ${collapsed ? "w-12 hover:w-40" : "w-40"} 
          lg:static`}
        >
            {/* ... Sidebar Header ... */}
            <div className="flex items-center justify-between px-2 h-16 border-b border-gray-300 dark:border-gray-700">
                {!collapsed && (
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                        PZS
                    </h2>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    {collapsed ? (
                        <GiHamburgerMenu size={20} />
                    ) : (
                        <BsArrowLeftCircleFill size={20} />
                    )}
                </button>
            </div>

            <nav className="py-2 px-1 flex flex-col gap-1 group">
                {/* ... Dashboard and Settings Links ... */}
                <Link
                    href="/admin"
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 rounded hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
                >
                    <IoHome size={20} className="shrink-0" />
                    <span
                        className={`transition-opacity duration-300 text-sm whitespace-nowrap ${collapsed ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                    >
                        Dashboard
                    </span>
                </Link>

                <Link
                    href="/admin/notices"
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 rounded hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
                >
                    <GrAnnounce size={20} className="shrink-0" />
                    <span
                        className={`transition-opacity duration-300 text-sm whitespace-nowrap ${collapsed ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                    >
                        Notices
                    </span>
                </Link>

                <Link
                    href="/admin/sponsors"
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 rounded hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
                >
                    <GoSponsorTiers size={20} className="shrink-0" />
                    <span
                        className={`transition-opacity duration-300 text-sm whitespace-nowrap ${collapsed ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                    >
                        Sponsors
                    </span>
                </Link>

                <Link
                    href="/admin/settings"
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 rounded hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
                >
                    <MdSettings size={20} className="shrink-0" />
                    <span
                        className={`transition-opacity duration-300 text-sm whitespace-nowrap ${collapsed ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                    >
                        Settings
                    </span>
                </Link>

                {/* Theme Toggle Button - UI Kept as requested */}
                <button
                    onClick={toggleDarkMode} // Logic fix here
                    className="sm:px-3 sm:py-2 px-2 py-1.5 items-center text-gray-700 rounded flex gap-2 dark:text-gray-300 duration-300 whitespace-nowrap hover:cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors overflow-hidden"
                >
                    <span>
                        <MdLightMode size={20} />
                    </span>
                    <span
                        className={`transition-all text-sm duration-300 whitespace-nowrap ${
                            collapsed
                                ? "opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0"
                                : ""
                        }`}
                    >
                        Theme
                    </span>
                </button>
            </nav>
        </aside>
    );
}

export default Sidebar;
