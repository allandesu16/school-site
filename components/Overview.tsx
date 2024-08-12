import { overview } from "@/constants";
import Image from "next/image";
import React from "react";

const Overview = () => {
    return (
        <div className="flex max-container p-6 rounded-xl w-full h-full">
            <div className="flex w-full flex-col gap-6">
                {/* nutrition,hostels,sports,religion,discipline,entertainment */}
                {/* slideshow */}
                <div className="flex w-full h-[60%] object-contain "></div>
            </div>
        </div>
    );
};

export default Overview;
