import { contactUs, quickLinks } from "@/constants";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="bold-16 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="w-full p-6">
            <div className="flex items-center justify-between">
                <FooterColumn title="Quick Links">
                    {quickLinks.map(({ href, title }: any) => {
                        return (
                            <Link href={href} key={title} className="text-sm">
                                <label className="cursor-pointer">
                                    {title}
                                </label>
                            </Link>
                        );
                    })}
                </FooterColumn>

                <FooterColumn title="Follow Us">
                    <Link href="/" className="flex text-sm gap-4">
                        <Instagram size={16} /> Instagram
                    </Link>
                    <Link href="/" className="flex text-sm gap-4">
                        <Facebook size={16} /> Facebook
                    </Link>
                    <Link href="/" className="flex text-sm gap-4">
                        <Youtube size={16} /> Youtube
                    </Link>
                    <Link href="/" className="flex text-sm gap-4">
                        <Twitter size={16} /> Twitter/X
                    </Link>
                </FooterColumn>
                <FooterColumn title="Contact Us">
                    <p className="text-sm">{contactUs.location}</p>
                    <p className="text-sm">{contactUs.address}</p>
                    <p className="text-sm">{contactUs.number}</p>
                    <p className="text-sm">{contactUs.email}</p>
                    <p className="text-sm">{contactUs.location}</p>
                </FooterColumn>
            </div>
        </footer>
    );
};

export default Footer;
