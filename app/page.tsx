import Image from "next/image";
import logoFood from "@/public/logo-with-briscuit.jpg"
import foodBg from "@/public/background.png";
import Header from "@/app/Header";

export default function Home() {


  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
              <Header src={logoFood} background={foodBg}/>
          </div>
          <div className="min-h-screen">spacer</div>
      </main>
  );
}
