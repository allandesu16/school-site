import React from "react";
import GlanceCards from "./GlanceCards";

const Aglance = () => {
    return (
        <section className=" flex flex-col p-6 dark:bg-neutral-900 m-4 rounded-lg gap-4 bg-neutral-100">
            <h1 className="text-2xl font-bold text-center ">
                Take a Glance at our schoool
            </h1>
            <div className="lg:grid xl:grid grid-cols-2 gap-10 flex flex-col ">
                <p className="text-sm">
                    Step into Gahogo Adventist Academy and be greeted by the
                    buzz of engaged classrooms, the laughter echoing through
                    vibrant halls, and the energy of students on the sports
                    field or exploring their creativity in the art studio. The
                    aroma of delicious, healthy meals fills the air in the
                    cafeteria, fueling growing minds and bodies, while a warm
                    welcome awaits you from a supportive community that makes
                    everyone feel like they belong. Its more than a school, its
                    a vibrant experience waiting to be discovered!
                </p>
                <div className="flex">
                    <GlanceCards />
                </div>
            </div>
        </section>
    );
};

export default Aglance;
