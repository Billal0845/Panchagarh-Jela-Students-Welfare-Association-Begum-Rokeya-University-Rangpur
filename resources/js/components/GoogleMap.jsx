import React from "react";

export default function GoogleMap({ mapLink }) {
    if (!mapLink) return null;

    // Optional: Just a quick check to make sure they pasted an embed link
    if (!mapLink.includes("pb=")) {
        return (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-200 mt-4">
                <strong>Invalid Map Link:</strong> Please paste the URL from the
                Google Maps "Embed a map" tab.
            </div>
        );
    }

    return (
        <div className="w-full h-60 rounded-xl overflow-hidden shadow-inner bg-slate-100 border border-slate-200 mt-4">
            <iframe
                title="Sponsor Location"
                src={mapLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
