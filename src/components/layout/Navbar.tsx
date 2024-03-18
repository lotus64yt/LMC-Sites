"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"
import { buttons } from "./navigation";

const NavbarButton = ({
    text,
    url
}: {
    text: string;
    url: string
}) => (
    <Link href={url} className="block py-2 pl-3 pr-4 text-gray-100 hover:text-gray-300 transition duration-150 rounded md:p-0" aria-current="page">
        {text}
    </Link>
);

export default function Navbar() {
    const [buttonNav, setButton] = useState(1)//Math.floor(Math.random() * 2))

    const buttonRedirect = () => {
        if (buttonNav === 1) window.open('https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e6bf0e4b0f6ef3:0xeae8619b4c51b627?source=g.page.m._');
        else window.location.href = "tel:0134764891"
    }
    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-slate-900 border-b border-b-slate-700 border-gray-200 h-[var(--navbar-height)]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-full">
                    <a href="/" className="flex items-center">
                        <Image
                            src="/favicon.ico" 
                            width={32} 
                            height={32} 
                            className="h-8 mr-3 rounded-full"
                            alt="La baraka logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">La baraka</span>
                    </a>
                    {/*<div className="flex md:order-2">
                        <button
                            data-drawer-target="sidebar"
                            data-drawer-toggle="sidebar"
                            aria-controls="sidebar"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>*/}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 border-gray-700">
                            {buttons.map(b => {
                                return (
                                    <li key={b.url}>
                                        <NavbarButton text={b.text} url={b.url} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {<div className="flex md:order-2">
                        <button onClick={buttonRedirect} className="btn btn-primary">
                            {buttonNav === 1 ? "Google Maps" : "Telephone"}
                        </button>
                    </div>}
                </div>
            </nav>
        </>
    );
}