import React from "react";

const NoticeBoard = ({ text }) => {
    return (
        <div className="relative w-full overflow-hidden bg-teal-700 border-b border-teal-500 h-10 flex items-center">
            {/* 
        We use an inline style for the keyframes to keep this component self-contained 
        without needing to touch your tailwind.config.js 
      */}
            <style>
                {`
          @keyframes marquee-one-way {
            0% {
              left: 100%;
              transform: translateX(0%);
            }
            100% {
              left: 0%;
              transform: translateX(-100%);
            }
          }
          .animate-marquee-one-way {
            animation: marquee-one-way 30s linear infinite;
          }
          /* Pause on hover for better readability */
          .animate-marquee-one-way:hover {
            animation-play-state: paused;
          }
        `}
            </style>

            <div className="absolute whitespace-nowrap text-teal-50 font-medium tracking-wide animate-marquee-one-way cursor-pointer">
                📢 Notice: {text}
            </div>
        </div>
    );
};

export default NoticeBoard;
