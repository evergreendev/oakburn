import ImageCard from "@/app/ImageCard";
import brisket from "@/public/brisket-2.jpg";
import image1 from "@/public/chicken.jpg";
import image2 from "@/public/briscuit-2.jpg";
import image3 from "@/public/fries-and-sandwich.jpg";
import image4 from "@/public/sandwich-2.jpg";
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
                    img={brisket}
                />

            </div>

            <Gallery images={[image3, image2, image1, brisket, image4, image5, image6]}/>
        </main>
    );
}
