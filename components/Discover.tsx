import { discoveryData } from "@/constants";
import Image from "next/image";
import React from "react";

const Discover = () => {
    return (
        <section className="flex h-full">
            <div className=" flex flex-row gap-4 m-4">
                {discoveryData.map(
                    ({ title, description, img, index }: any) => {
                        return (
                            <div className="flex row-auto gap-4" key={index}>
                                <Image
                                    src={img}
                                    alt={title}
                                    width={200}
                                    height={200}
                                    className="rounded-xl"
                                />
                                <div className="flex flex-col">
                                    <h2 className="">{title}</h2>
                                    <p className="">{description}</p>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default Discover;
