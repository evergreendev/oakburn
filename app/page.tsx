import logo from "@/public/oakburn-logo.png"
import foodBg from "@/public/background.png";
import Header from "@/app/Header";
import ImageCard from "@/app/ImageCard";
import image1 from "@/public/chicken.jpg";
import image2 from "@/public/briscuit-2.jpg";
import image3 from "@/public/fries-and-sandwich.jpg";
import image4 from "@/public/sandwich-2.jpg";
import image5 from "@/public/smoker.jpg";
import image6 from "@/public/mac-and-cheese-2.jpg";
import Gallery from "@/app/Gallery/Gallery";
import brisket from "@/public/brisket-2.jpg";

export default function Home() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
            <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
                <Header src={logo} background={foodBg}/>
            </div>
            <ImageCard
                title="Our Story"
                content="Oak Burn Barbecue is rooted in the rich tradition of Texas barbecue, a true testament to handcrafted food. Established in 2022 with a commitment to serving fresh, quality food that keeps customers coming back for more. We prioritize care, time, and quality in every item we serve. Our story is one of dedication to the art of barbecue, where our slow smoked meats, our homemade sauces and sides are crafted with passion and expertise to deliver a traditional Texas style barbecue to the Black Hills.
"
                img={brisket}
                buttons={[
                    {text: "Delivery", href: "https://www.doordash.com/store/oak-burn-bbq-rapid-city-28425368/"},
                    {text: "Carry Out", href: "https://order.toasttab.com/online/rushmore-cuisine-821-fairmont-boulevard"},
                    {text: "Catering", href: "/catering"},
                ]}
            />
            <Gallery images={[image3, image2, image1, brisket, image4, image5, image6]}/>
        </main>
    );
}
