import { cormorant } from "@/app/layout";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Google from "../svg/Google";
import Amazon from "../svg/Amazon";
import Meta from "../svg/Meta";
import Adobe from "../svg/Adobe";
import Microsoft from "../svg/Microsoft";
import LogosSection from "./LogoSection";

const companies = [
    "Google",
    "Meta",
    "Apple",
    "Amazon",
    "Microsoft",
    "Netflix",
    "Stripe",
    "Airbnb",
    "OpenAI",
    "Tesla",
  ];

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center px-6 md:px-10">
            <div className="w-full flex justify-center">
                <Image
                src="/hero.png"
                alt="hero png"
                height={400}
                width={400}
                className="text-3xl sm:text-4xl md:text-6xl" />
            </div>
            <h1
            className={`${cormorant.className} text-3xl sm:text-4xl md:text-6xl font-medium leading-tighter tracking-tight text-center`}
            >
            <span className="block">The notebook that thinks</span>
            <span className="block text-center">with you</span>
            </h1>
            <button className="mt-8 md:mt-10 px-6 py-3 bg-black text-white rounded-lg text-sm md:text-base font-medium hover:opacity-90 transition w-full sm:w-auto">
                Try for free
            </button>
            <LogosSection />
        </div>
    )
}