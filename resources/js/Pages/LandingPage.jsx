import React, { useEffect, useState } from "react";
import GeneralLayout from "../layouts/StudentLayout/GeneralLayout";

import NoticeBoard from "./../components/NoticeBoard"; // Adjust path as necessary
import PresidentSecretary from "../components/PresidentSecretary";
import RecentEvents from "../components/RecentEvents";
import ShilpoKormo from "../components/ShilpoKormo";
import Sponsors from "../components/Sponsors";
import Alumni from "../components/Alumni";
import Teachers from "../components/Teachers";
export default function LandingPage({ notice, sponsors }) {
    // 2. Hero Section Logic
    const [heroVisible, setHeroVisible] = useState(false);
    useEffect(() => {
        setHeroVisible(true);
    }, []);

    // Notice text
    const noticeText = notice.description;

    return (
        <GeneralLayout>
            {/* 1. SEPARATE NOTICE COMPONENT */}
            <NoticeBoard text={noticeText} />

            {/* <PresidentSecretary /> */}

            <RecentEvents />

            <ShilpoKormo />

            {sponsors && sponsors.length > 0 && (
                <Sponsors sponsors={sponsors} />
            )}

            <Alumni />

            <Teachers />

            {/* 7 & 8. TEACHERS & TUTORS GRID */}
        </GeneralLayout>
    );
}
