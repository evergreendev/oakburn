"use client"
import Image, {StaticImageData} from "next/image";
import {useState} from "react";


const LightBox = ({image, handleClose}: { image: StaticImageData | null, handleClose: () => void }) => {
    if (!image) return;

    return <>
        <div className="fixed inset-0 bg-slate-800 z-40 opacity-50" onClick={handleClose}/>
        <div className="fixed z-50 top-1/2 -translate-y-1/2 p-8 bg-slate-200 bg-opacity-70">
            <button className="bg-slate-800 p-2 font-bold rounded-t hover:bg-slate-700" onClick={handleClose}>Close</button>
            <Image src={image.src} alt="" width={image.width} height={image.height}/>
        </div>
    </>
}

const Gallery = ({images}: { images: StaticImageData[] }) => {

    const [lightBoxImage, setLightBoxImage] = useState<StaticImageData | null>(null);

    const handleClick = (image: StaticImageData) => {
        setLightBoxImage(image)
    }

    return <>
        <LightBox image={lightBoxImage} handleClose={() => {
            setLightBoxImage(null)
        }}/>
        <div className="grid grid-cols-5 w-full">
            {images.map((image, i) => {
                if (i % 7 === 0 || i === 0) {
                    return <div key={image.src} className="col-span-2 row-span-2 overflow-hidden">
                        <Image onClick={() => {
                            handleClick(image)
                        }} src={image.src} alt="" width={image.width} height={image.height}
                               className="transition-all brightness-75 duration-1000 bg-primary-500 aspect-square object-cover w-full cursor-pointer hover:scale-110 hover:brightness-100"/>
                    </div>
                }

                return <div key={image.src} className="overflow-hidden">
                    <Image onClick={() => {
                        handleClick(image)
                    }} key={image.src} src={image.src} alt="" width={image.width} height={image.height}
                           className="transition-all brightness-75 duration-1000 bg-orange-200 aspect-square object-cover cursor-pointer hover:scale-110 hover:brightness-100"/>
                </div>

            })}
        </div>
    </>
}

export default Gallery;