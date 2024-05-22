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
            <address><Link className="hover:text-blue-300"
                           href="https://www.google.com/maps/dir/44.0800678,-103.2231332/821+Fairmont+Blvd,+Rapid+City,+SD+57701/@44.0699232,-103.2489432,14z/data=!3m1!4b1!4m18!1m8!3m7!1s0x877d43170d49759f:0x1ce8abfc3781e8c3!2s821+Fairmont+Blvd,+Rapid+City,+SD+57701!3b1!8m2!3d44.0581714!4d-103.2331913!16s%2Fg%2F11c89362fq!4m8!1m1!4e1!1m5!1m1!1s0x877d43170d49759f:0x1ce8abfc3781e8c3!2m2!1d-103.2331913!2d44.0581714?entry=ttu">821
                Fairmont Blvd Rapid City SD</Link></address>
        </div>
    </div>
}

export default Nav;