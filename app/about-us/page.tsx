import React from "react";
import Staff from "../staff/page";
import Gallery from "@/components/Gallery";
import Overview from "@/components/Overview";

const AboutUs = () => {
    //history, beliefs, and stuff
    return (
        <section className="flex flex-col">
            <Overview />
            <Staff />
            <Gallery />
        </section>
    );
};

export default AboutUs;
