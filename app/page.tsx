import Discover from "@/components/Discover";
import Glance from "@/components/Glance";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
    return (
        <section className="flex flex-col">
            <Hero />
            <Glance />
            <Statistics />
            {/* <Discover /> */}
            <Testimonials />
        </section>
    );
};

export default page;
