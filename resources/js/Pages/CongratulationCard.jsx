import React from "react";
import GeneralLayout from "../layouts/StudentLayout/GeneralLayout";

function CongratulationCard() {
    return <div>CongratulationCard</div>;
}

CongratulationCard.layout = (page) => <GeneralLayout children={page} />;
export default CongratulationCard;
