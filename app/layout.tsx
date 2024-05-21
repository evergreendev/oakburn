import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Nav from "@/app/Nav";
import {averia} from "@/app/fonts";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Oak Burn BBQ",
    description: "Oak Burn Barbecue is rooted in the rich tradition of Texas barbecue, a true testament to handcrafted food. Established in 2022 with a commitment to serving fresh, quality food that keeps customers coming back for more.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body className={`${averia.variable} ${inter.className}`}>
        <Nav/>
        {children}
        </body>
        </html>
    );
}
