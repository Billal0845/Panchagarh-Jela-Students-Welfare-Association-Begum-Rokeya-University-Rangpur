import React, { useState, useRef, useCallback } from "react";
import GeneralLayout from "@/Layouts/StudentLayout/GeneralLayout";
import { toPng } from "html-to-image";

function CongratulationCard() {
    const [name, setName] = useState("Muntaha Munni");
    const [post, setPost] = useState("Senior Vice President");
    const [photo, setPhoto] = useState(null);
    const cardRef = useRef(null);

    // Helper: Convert Uploaded Photo to Base64
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Generic Helper: Fetch ANY font URL and convert to Base64
    const loadFontToBase64 = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to load font: ${url}`);
            const blob = await response.blob();

            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            });
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const handleDownload = useCallback(async () => {
        if (cardRef.current === null) return;

        try {
            // Load BOTH fonts in parallel
            const [greatVibes64, leagueGothic64] = await Promise.all([
                loadFontToBase64("/fonts/GreatVibes-Regular.ttf"),
                loadFontToBase64(
                    "/fonts/LeagueGothic-Regular-VariableFont_wdth.ttf",
                ),
            ]);

            // Build the CSS for both fonts
            let fontCss = "";

            if (greatVibes64) {
                fontCss += `
                    @font-face {
                        font-family: 'Great Vibes';
                        src: url('${greatVibes64}') format('truetype');
                    }
                `;
            }

            if (leagueGothic64) {
                fontCss += `
                    @font-face {
                        font-family: 'League Gothic';
                        src: url('${leagueGothic64}') format('truetype');
                    }
                `;
            }

            // Generate Image
            const dataUrl = await toPng(cardRef.current, {
                cacheBust: true,
                pixelRatio: 3, // Higher quality
                skipFonts: true,
                includeQueryParams: true,
                fontEmbedCSS: fontCss,
            });

            // Save File
            const link = document.createElement("a");
            link.download = `congratulation-${name.replace(/\s+/g, "_")}.png`;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            console.error("Error generating image:", err);
            alert("Could not generate image. Please try again.");
        }
    }, [cardRef, name]);

    return (
        <div className="flex flex-col md:flex-row gap-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen items-start justify-center">
            {/* --- FORM SECTION --- */}
            <div className="w-full md:w-1/3 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
                    Card Details
                </h2>
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 border transition-all"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter full name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Position
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 border transition-all"
                            value={post}
                            onChange={(e) => setPost(e.target.value)}
                            placeholder="Enter position"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Upload Photo
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            className="mt-1 block w-full text-sm text-gray-600 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:transition-all cursor-pointer"
                            onChange={handleImageChange}
                        />
                        <p className="mt-2 text-xs text-gray-500">
                            Recommended: Square photo, minimum 500x500px
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={handleDownload}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold mt-6 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Download High Quality PNG
                    </button>
                </div>
            </div>

            {/* --- PREVIEW SECTION --- */}
            <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <div
                        ref={cardRef}
                        style={{
                            position: "relative",
                            width: "400px",
                            height: "700px",
                            background:
                                "linear-gradient(135deg, #8B2635 0%, #A73548 100%)",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        {/* Elegant Pattern Overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                opacity: 0.08,
                                backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                                 radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
                                backgroundSize: "50px 50px",
                            }}
                        />

                        {/* Subtle Geometric Accents */}
                        <div
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            style={{ opacity: 0.1 }}
                        >
                            <div
                                className="absolute"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    border: "2px solid white",
                                    borderRadius: "50%",
                                    top: "-100px",
                                    right: "-50px",
                                }}
                            />
                            <div
                                className="absolute"
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    border: "2px solid white",
                                    borderRadius: "50%",
                                    bottom: "-75px",
                                    left: "-30px",
                                }}
                            />
                        </div>

                        {/* Logo with Better Styling */}
                        <div
                            className="absolute top-5 right-5 rounded-xl overflow-hidden"
                            style={{
                                width: "60px",
                                height: "60px",
                                backgroundColor: "#ffffff",
                                border: "3px solid rgba(255, 255, 255, 0.3)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                zIndex: 10,
                            }}
                        >
                            <img
                                src="/logos/logo.jpg"
                                alt="Logo"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        {/* Header Section */}
                        <div
                            className="pt-20 text-center w-full px-6"
                            style={{ zIndex: 10, flexShrink: 0 }}
                        >
                            <h1
                                className="text-6xl mb-3"
                                style={{
                                    fontFamily: "'Great Vibes', cursive, serif",
                                    color: "#ffffff",
                                    textShadow: "0 2px 8px rgba(0,0,0,0.2)",
                                    letterSpacing: "1px",
                                }}
                            >
                                Congratulations
                            </h1>
                            <div
                                className="w-24 h-1 mx-auto mb-4"
                                style={{
                                    background:
                                        "linear-gradient(90deg, transparent, white, transparent)",
                                }}
                            />
                            <h2
                                className="font-bold uppercase tracking-tighter px-4"
                                style={{
                                    color: "#ffffff",
                                    textShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                    fontWeight: "700",

                                    fontSize:
                                        name.length > 20
                                            ? "1.5rem"
                                            : name.length > 15
                                              ? "1.75rem"
                                              : "1.875rem",
                                    lineHeight: "1.3",
                                }}
                            >
                                {name}
                            </h2>
                        </div>

                        {/* White Accent Strip */}
                        <div
                            className="absolute left-0 w-full"
                            style={{
                                height: "140px",
                                background:
                                    "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,1), rgba(255,255,255,0.95))",
                                top: "280px",
                                zIndex: 0,
                                boxShadow: "0 0 30px rgba(0,0,0,0.1)",
                            }}
                        />

                        {/* Photo with Enhanced Styling */}
                        <div
                            className="relative"
                            style={{
                                zIndex: 10,
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            <div
                                className="rounded-full overflow-hidden flex items-center justify-center"
                                style={{
                                    width: "240px",
                                    height: "240px",
                                    backgroundColor: "#e5e7eb",
                                    border: "8px solid #ffffff",
                                    boxShadow:
                                        "0 12px 24px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05)",
                                }}
                            >
                                {photo ? (
                                    <img
                                        src={photo}
                                        alt="Member"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                ) : (
                                    <div className="text-center p-4">
                                        <svg
                                            className="w-16 h-16 mx-auto text-gray-400 mb-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        <div
                                            className="text-sm font-medium"
                                            style={{ color: "#9ca3af" }}
                                        >
                                            Upload Photo
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bottom Section with Enhanced Typography */}
                        <div
                            className="w-full flex flex-col items-center px-6 absolute bottom-0"
                            style={{ zIndex: 10, paddingBottom: "24px" }}
                        >
                            <h3
                                className="font-bold mb-4 text-center"
                                style={{
                                    color: "#ffffff",
                                    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                    letterSpacing: "0.5px",
                                    fontSize:
                                        post.length > 25 ? "1.25rem" : "1.5rem",
                                    lineHeight: "1.3",
                                }}
                            >
                                {post}
                            </h3>

                            {/* Organization Badge */}
                            <div
                                className="py-4 px-8 rounded-xl mx-4 text-center"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))",
                                    boxShadow:
                                        "0 6px 12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                                    border: "2px solid rgba(255, 255, 255, 0.2)",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <p
                                    className="font-semibold text-base leading-relaxed tracking-wide mb-1"
                                    style={{
                                        color: "#ffffff",
                                        letterSpacing: "1.2px",
                                        fontWeight: "600",
                                    }}
                                >
                                    Students' Welfare Association of
                                </p>
                                <p
                                    className="font-bold text-4xl uppercase leading-tight mt-1"
                                    style={{
                                        color: "#ffffff",
                                        letterSpacing: "4px",
                                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                                        fontWeight: "800",
                                    }}
                                >
                                    PANCHAGARH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CongratulationCard.layout = (page) => <GeneralLayout children={page} />;
export default CongratulationCard;
