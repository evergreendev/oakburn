"use client"

import Image, {StaticImageData} from "next/image";
import Link from "next/link";
// @ts-ignore
import ScrollMagic from "scrollmagic-with-ssr";
import {useEffect, useRef} from "react";
import anime from "animejs";

type Button = {
    text: string;
    href: string;
}

const ImageCard = ({img, title, content, buttons, reverse = false}: {
    img: StaticImageData,
    title: string,
    content: string|React.ReactNode,
    buttons?: Button[],
    reverse?: boolean
}) => {
    const id = title.replaceAll(" ", "-");

    const animationRef = useRef<any>(null);

    const controllerRef = useRef<any>(null);


    useEffect(() => {
        controllerRef.current = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: `#${id}`,
        }).on("enter", (event: any) => {
            animationRef.current.play();
        }).addTo(controllerRef.current);

        animationRef.current = anime.timeline({
            loop: false,
            autoplay: false,
            easing: 'easeInOutSine',
            complete: anim => {
                anime.remove(`#${id}-img`);
                anime.remove(`#${id}-text`);
            }
        });
        anime({
            targets: `#${id}-img`,
            easing: 'easeInOutSine',
            translateY: 200,
            duration: 1,
            opacity: 0,
        })

        animationRef.current.add({
            targets: `#${id}-img`,
            easing: 'easeInOutSine',
            translateY: 200,
            duration: 1,
            opacity: 0,
        });
        animationRef.current.add({
            targets: `#${id}-text`,
            easing: 'easeInOutSine',
            duration: 0,
            translateX: 200,
            opacity: 0,
        });

        animationRef.current.add({
            targets: `#${id}-img`,
            easing: 'easeInOutSine',
            translateY: 0,
            opacity: 1,
        });

        animationRef.current.add({
            targets: `#${id}-text`,
            easing: 'easeInOutSine',
            translateX: 0,
            opacity: 1,
        });

    }, [id])

    return <div id={id} className="bg-contain gap-8 bg-orange-200 text-bg-gray-500 bg-dist w-full">
        <div className="max-w-screen-lg flex mx-auto bg-orange-200 bg-opacity-50 flex-wrap md:flex-nowrap">
            <Image id={`${id}-img`} src={img} alt="" className="object-cover md:w-5/12"/>
            <div className="p-8" id={`${id}-text`}>
                <h2 className="font-averia text-6xl mb-3 font-bold text-primary-700">{title}</h2>
                <p className="text-xl pb-8">{content}</p>
                {
                    buttons ?
                        <div  className="flex mt-4 gap-2 flex-wrap items-center justify-center">
                            {buttons.map(button => {
                                return <Link key={button.text}
                                    className="bg-primary-500 hover:brightness-110 text-white px-6 py-2 rounded-full font-averia text-2xl"
                                    href={button.href}>
                                    <span>{button.text}</span>
                                </Link>
                            })}
                        </div>
                        : ""
                }
            </div>
        </div>
    </div>
}

export default ImageCard;