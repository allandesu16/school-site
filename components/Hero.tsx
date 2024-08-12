import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <section className="flex">
            <div className="xl:grid lg:grid grid-cols-2 flex flex-col justify-between  gap-6 p-4">
                <div className="flex flex-col gap-6 dark:bg-neutral-900 p-6 rounded-lg bg-neutral-100 justify-between">
                    <div className="flex gap-4 flex-col">
                        <h2 className="text-lg font-bold ">
                            Welcome to Gahogo Adventist Academy
                        </h2>
                        <h3 className="text-base flex font-bold">
                            Strengthened for shining
                        </h3>
                        <p className="text-sm">
                            At GAA, a Christ-centered education ignites a love
                            for learning and service. We nurture curious minds
                            with a strong academic foundation, while fostering
                            compassion and respect for all. Explore, grow, and
                            discover your potential in a supportive community
                            that celebrates faith, knowledge, and a commitment
                            to making a difference.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <Button>About Us</Button>
                        <Button>Contact Us</Button>
                    </div>
                </div>
                <div className="flex gap-6 flex-col">
                    <div className="flex flex-col rounded-lg gap-8 p-6 bg-neutral-100 dark:bg-neutral-900">
                        <p className="text-sm">
                            <strong>
                                Where curiosity blossoms and potential takes
                                flight.
                            </strong>
                            Our school cultivates a love for learning that
                            empowers students to grow academically, socially,
                            and personally.
                        </p>
                        <Button className="flex w-24">Read More</Button>
                    </div>
                    <div className="flex flex-col gap-6 p-6 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                        <p className="text-sm">
                            <strong>
                                School life at GAA isnt just about textbooks!
                            </strong>
                            At GAA, your day starts strong with healthy
                            breakfasts. Conquer academics and unleash your inner
                            athlete with after-school sports. Balanced lunches
                            keep you fueled, and interactive workshops show how
                            food choices power your success – mind, body, and
                            spirit!
                        </p>
                        <Button className="w-24">Read More</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
