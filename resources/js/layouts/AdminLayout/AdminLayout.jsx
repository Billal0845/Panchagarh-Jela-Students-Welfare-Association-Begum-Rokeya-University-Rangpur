import React, { useEffect, useState } from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import Header from "../../components/AdminComponents/Header";
import { Toaster } from "react-hot-toast";

function AdminLayout({ children }) {
    const [collapsed, setCollapsed] = useState(true);

    // 1. Initialize state from localStorage or System Preference
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const localTheme = localStorage.getItem("theme");
            if (localTheme) return localTheme === "dark";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    // 2. WATCH FOR CHANGES: This runs every time darkMode state changes
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]); // <--- This dependency is what makes the toggle work!

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        // We keep your wrapper class, but Tailwind mainly uses the <html> class we set above
        <div className={darkMode ? "dark" : ""}>
            <div className="flex h-screen bg-gray-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                <Sidebar
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />

                <div className="flex-1 flex flex-col min-w-0 bg-gray-100 dark:bg-slate-900 transition-all duration-300">
                    <Header />

                    <main className="flex-1 overflow-y-auto p-3 sm:p-6">
                        <Toaster position="top-center" reverseOrder={false} />
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
