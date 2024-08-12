import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToogle";
import { Facebook, Instagram, Menu, Twitter, Youtube } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="flex p-4">
            <div className="flex items-center w-full justify-between">
                <Link href="/" className="text-lg font-bold flex">
                    <h1>Gahogo Adventist Academy</h1>
                </Link>
                <div className="lg:flex xl:flex mx-4  hidden">
                    {navLinks.map(({ name, href }: any) => {
                        return (
                            <Link
                                href={href}
                                key={name}
                                className="text-sm text-gray-500 mx-4 hover:text-slate-800"
                            >
                                {name}
                            </Link>
                        );
                    })}
                </div>
                <div className="lg:flex xl:flex gap-6 items-center hidden">
                    <Link href="/">
                        <Instagram size={16} />
                    </Link>
                    <Link href="/">
                        <Facebook size={16} />
                    </Link>
                    <Link href="/">
                        <Youtube size={16} />
                    </Link>
                    <Link href="/">
                        <Twitter size={16} />
                    </Link>
                    <ModeToggle />
                </div>

                <div className="flex lg:hidden xl:hidden">
                    <Menu size={16} />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
