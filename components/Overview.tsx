import { overview } from "@/constants";
import Image from "next/image";
import React from "react";

const Overview = () => {
    return (
        <div className="flex max-container p-6 rounded-xl w-full h-full">
            <div className="flex w-full flex-col gap-6">
                {/* nutrition,hostels,sports,religion,discipline,entertainment */}
                {overview.map((overview) => {
                    return (
                        <div
                            className="flex flex-col  p-6 rounded-2xl w-full my-4"
                            key={overview.title}
                        >
                            <div className="flex w-full my-6 justify-between">
                                <Image
                                    src={overview.img1}
                                    alt={overview.title}
                                    width={200}
                                    height={200}
                                />
                                <div className="flex flex-col">
                                    <h2 className="">{overview.title}</h2>
                                    <p className="">{overview.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse justify-between w-ful">
                                <Image
                                    src={overview.img2}
                                    alt={overview.title2}
                                    width={200}
                                    height={200}
                                />
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-bold text-gray-700">
                                        {overview.title2}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {overview.description2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Overview;
