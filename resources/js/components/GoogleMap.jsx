import React from "react";

export default function GoogleMap({ mapLink }) {
    if (!mapLink) return null;

    // Logic to ensure we use an embeddable URL
    // If user provides a share link, we try to convert it,
    // but it's best if they provide the 'src' from the Google Maps embed code
    const getEmbedUrl = (link) => {
        if (link.includes("pb=")) return link; // Already an embed src
        return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(link)}`;
        // Note: For a zero-cost solution, users should paste the "src" attribute from Google's "Embed a map" tab.
    };

    return (
        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-inner bg-slate-100 border border-slate-200">
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
