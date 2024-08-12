import { testimonials } from "@/constants";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
    return (
        <section className="flex flex-col items-center m-4 bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg gap-6">
            <h1 className="text-xl font-bold">Testimonials</h1>
            <div className=" xl:grid lg:grid grid-cols-2 flex flex-col gap-6 justify-between items-center">
                <Image
                    src={"/person.jpeg"}
                    alt="person"
                    width={500}
                    height={500}
                    className="h-96 w-96 rounded-xl bg-blue-300"
                />
                <div className="flex gap-2  flex-col lg:w-[60%] items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Head Masters Message
                    </h2>
                    <p className="text-sm w-[60%]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nihil vero eius fuga error, ab adipisci
                        praesentium. Culpa iure nihil pariatur. Harum debitis
                        similique adipisci explicabo repudiandae veniam ducimus
                        quae est totam cupiditate! Debitis impedit ratione autem
                        harum pariatur obcaecati placeat provident consequatur
                        mollitia tempore nulla distinctio praesentium sit,
                        temporibus ut, doloremque voluptatibus voluptatum.
                        Itaque quo culpa fugiat non iusto.
                    </p>
                </div>
            </div>
            <div className="flex dark:bg-neutral-800  w-full rounded-lg overflow-hidden p-4 h-80 gap-4">
                {testimonials.map(({ title, description, img, index }: any) => {
                    return (
                        <div className="flex flex-col gap-4" key={index}>
                            <Image
                                src={img}
                                alt={title}
                                width={200}
                                height={200}
                                className="rounded-xl bg-blue-300"
                            />
                            <div className="flex flex-col">
                                <h2 className="font-semibold">{title}</h2>
                                <p className="">&quot; {description} &quot;</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Testimonials;
