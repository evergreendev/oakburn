"use client"
import {useEffect, useRef} from "react";
import Image, {StaticImageData} from "next/image";
import anime from "animejs";

const Header = ({src, background}:{src: string|StaticImageData, background: string|StaticImageData})=> {
    const animationRef = useRef<any>(null);

    useEffect(() => {
        animationRef.current = anime.timeline({
            loop: false,
            easing: 'easeInOutSine'});

        animationRef.current.add({
            targets: '.main-img',
            easing: 'easeInOutSine',
            translateX: 500,
            opacity: 1,
        })

        animationRef.current.add({
            targets: '.background-img',
            easing: 'easeInOutSine',
            opacity: .75,
        })

    }, [])

    return <div className="p-8 pt-32 sm:pt-24 sm:min-h-screen w-full flex justify-around items-center relative">
        <div className="translate-x-[-500px] z-10">
            <Image src={src} alt="" className="main-img shadow-sm z-10 opacity-0"/>
        </div>
        <div className="overflow-hidden absolute inset-0">
            <Image src={background} alt="" className="background-img absolute inset-0 object-cover w-full h-full opacity-10"/>
        </div>
    </div>
}

export default Header;