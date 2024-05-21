import Image, {StaticImageData} from "next/image";
import Link from "next/link";

type Button = {
    text: string;
    href: string;
}

const ImageCard = ({img, title, content, button, reverse = false}: {
    img: StaticImageData,
    title: string,
    content: string,
    button?: Button,
    reverse?: boolean
}) => {
    return <div className="bg-contain gap-8 bg-orange-200 text-bg-gray-500 bg-dist w-full">
        <div className="max-w-screen-lg flex mx-auto bg-orange-200 bg-opacity-50" >
            <Image src={img} alt=""/>
            <div className="p-8">
                <h2 className="font-averia text-6xl mb-3 font-bold text-primary-700">{title}</h2>
                <p>{content}</p>
                {
                    button ?
                        <div className="flex mt-8">
                            <Link className="bg-primary-500 hover:brightness-110 text-white px-6 py-2 rounded-full font-averia text-2xl" href={button.href}>
                                <span>{button.text}</span>
                            </Link>
                        </div>
                         : ""
                }
            </div>
        </div>
    </div>
}

export default ImageCard;