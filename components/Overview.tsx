import { overview } from "@/constants";
import Image from "next/image";
import React from "react";

const Overview = () => {
    return (
        <div className="flex rounded-xl w-full h-full p-6">
            <div className="flex w-full flex-col gap-6">
                {/* nutrition,hostels,sports,religion,discipline,entertainment */}
                {/* slideshow */}
                <div className="flex w-full gap-6 h-[60vh] bg-slate-500">
                    <div className="flex h-[90%] w-[45vw]  mt-0 bg-green-700">
                        hello
                    </div>
                    <div className="flex h-[90%] w-[45vw]  mt-0 bg-green-700">
                        hello
                    </div>
                </div>
                {/* grid of overview */}
                <div className="flex flex-col bg-red-500 w-full">hello</div>
            </div>
        </div>
    );
};

export default Overview;
