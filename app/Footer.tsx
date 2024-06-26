import Link from "next/link";
import Image from "next/image";
import logo from "@/public/oakburn-logo.png"

const Footer = () => {
    return <div className="w-full bg-stone-300">
        <div className="max-w-screen-xl py-8 px-6 sm:px-32 w-full mx-auto flex items-center gap-16 text-bg-gray-500 flex-wrap">
            <Link href="/" className="mx-auto">
                <Image src={logo} alt="" className="w-48 p-2"/>
            </Link>
            <div className="flex gap-16 flex-wrap">
                <div>
                    <h2 className="text-4xl font-averia font-bold mb-6">Location</h2>
                    <address className="text-xl mb-3"><Link
                        href="https://www.google.com/maps/dir/44.0800678,-103.2231332/821+Fairmont+Blvd,+Rapid+City,+SD+57701/@44.0699232,-103.2489432,14z/data=!3m1!4b1!4m18!1m8!3m7!1s0x877d43170d49759f:0x1ce8abfc3781e8c3!2s821+Fairmont+Blvd,+Rapid+City,+SD+57701!3b1!8m2!3d44.0581714!4d-103.2331913!16s%2Fg%2F11c89362fq!4m8!1m1!4e1!1m5!1m1!1s0x877d43170d49759f:0x1ce8abfc3781e8c3!2m2!1d-103.2331913!2d44.0581714?entry=ttu">821
                        Fairmont Blvd Rapid City SD</Link></address>
                    <p className="text-xl mb-3">
                        <Link href="tel:605-390-8821">605-390-8821</Link>
                    </p>
                    <p className="text-xl">
                        <Link href="mailto:oakburnrc@gmail.com">oakburnrc@gmail.com</Link>
                    </p>
                </div>
                <div>
                    <h2 className="text-4xl font-averia font-bold mb-6">Hours</h2>
                    <p className="text-2xl mb-3">Monday-Sunday</p>
                    <p className="text-2xl font-bold">11AM to SOLD OUT</p>
                </div>
            </div>

        </div>
    </div>
}

export default Footer;