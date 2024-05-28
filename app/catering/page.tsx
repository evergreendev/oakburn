import logo from "@/public/oakburn-logo.png"
import foodBg from "@/public/background.png";
import Header from "@/app/Header";
import ImageCard from "@/app/ImageCard";
import briscuit from "@/public/briscuit.jpg";
import image1 from "@/public/baked-beans.jpg";
import image2 from "@/public/briscuit-2.jpg";
import image3 from "@/public/fries-and-sandwich.jpg";
import image4 from "@/public/mac-and-cheese.jpg";
import image5 from "@/public/smoker.jpg";
import image6 from "@/public/mac-and-cheese-2.jpg";
import Gallery from "@/app/Gallery/Gallery";
import CateringForm from "@/app/CateringForm";

export default function Home() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden pt-32">
            <div className="z-10 w-full items-center justify-between font-averia text-lg lg:flex mb-12">
                <ImageCard
                    title="Catering Request"
                    content={<CateringForm />}
                    img={briscuit}
                />

            </div>

            <Gallery images={[image3, image2, image1, briscuit, image4, image5, image6]}/>
        </main>
    );
}
