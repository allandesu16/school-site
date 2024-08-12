import { statisticData } from "@/constants";
import React from "react";

const Statistics = () => {
    return (
        <div className="flex items-center">
            {statisticData.map(({ title, value }: any) => {
                return (
                    <div
                        className="flex flex-col justify-between p-4 w-full items-center"
                        key={title}
                    >
                        <h2 className="font-semibold">{title}</h2>
                        <p className="">{value}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Statistics;
