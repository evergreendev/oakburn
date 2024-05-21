"use client"
import Link from "next/link";
import {useEffect, useState} from "react";
import Image from "next/image";
import logo from "@/public/oakburn-logo.png"

const Nav = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll, {passive: true});
    }, []);

    useEffect(() => {

    }, [scrollPosition]);

    return <div className={`
    transition-colors
    fixed
    w-full
    flex
    font-averia
    z-50
        ${scrollPosition === 0 ? "bg-transparent" : "bg-stone-900"}
    `}>
        <div className="flex items-center justify-around m-auto gap-12 p-2">
            <Link href="/">
                <Image src={logo} className={`
            ${scrollPosition === 0 ? "w-14" : "w-10"}
            mx-auto
            duration-700
            transition-all
        `} alt="Oak Burn Barbecue"/>
            </Link>
            <Link className="hover:text-blue-300" href="/menu">Menu</Link>
            <Link className="hover:text-blue-300" href="/catering">Catering</Link>
        </div>
    </div>
}

export default Nav;