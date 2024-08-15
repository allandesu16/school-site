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
                <div className="flex bg-red-500 w-full h-full gap-4">
                    {/* first grid */}
                    <div className="flex w-full bg-purple-500 gap-4 p-2">
                        <div className="flex bg-orange-500 w-full">
                            grid subgrid
                        </div>
                        <div className="flex gap-2 flex-col bg-orange-500 w-full">
                            <div className="flex bg-green-500 h-full w-full">
                                yup
                            </div>
                            <div className="flex bg-green-500 h-full w-full">
                                yup
                            </div>
                        </div>
                    </div>
                    {/* second grid */}
                    <div className="grid w-full gap-4">
                        <div className="flex gap-2 bg-blue-500 p-2">
                            <div className="flex bg-orange-500 p-2 w-full">
                                grid subgrid 2
                            </div>
                            <div className="flex bg-orange-500 p-2 w-full">
                                grid subgrid 2
                            </div>
                        </div>
                        <div className="flex bg-blue-500 gap-2 p-2">
                            <div className="flex bg-orange-500 p-2 w-full">
                                grid subgrid 2
                            </div>

                            <div className="flex bg-orange-500 p-2 w-full">
                                grid subgrid 2
                            </div>
                            <div className="flex bg-orange-500 p-2 w-full">
                                grid subgrid 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
