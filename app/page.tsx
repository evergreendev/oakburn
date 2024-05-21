import logoFood from "@/public/logo-with-briscuit.jpg"
import foodBg from "@/public/background.png";
import Header from "@/app/Header";
import ImageCard from "@/app/ImageCard";
import briscuit from "@/public/briscuit.jpg"

export default function Home() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
                <Header src={logoFood} background={foodBg}/>
            </div>
            <ImageCard
                title="Our Story"
                content="Oak Burn Barbecue is rooted in the rich tradition of Texas barbecue, a true testament to handcrafted food. Established in 2022 with a commitment to serving fresh, quality food that keeps customers coming back for more. We prioritize care, time, and quality in every item we serve. Our story is one of dedication to the art of barbecue, where our slow smoked meats, our homemade sauces and sides are crafted with passion and expertise to deliver a traditional Texas style barbecue to the Black Hills.
"
                img={briscuit}
                button={{text:"Our Menu", href:"/menu"}}
            />
        </main>
    );
}
