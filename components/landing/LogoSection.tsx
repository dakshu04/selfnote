"use client";

import Marquee from "react-fast-marquee";
import Google from "../svg/Google";
import Amazon from "../svg/Amazon";
import Meta from "../svg/Meta";
import Adobe from "../svg/Adobe";
import Microsoft from "../svg/Microsoft";


export default function LogosSection() {
  return (
    <section className="relative w-full py-20 ">
      <div className="max-w-5xl mx-auto">
        <Marquee
          speed={20}
          pauseOnHover={true}
          gradient={true}
          
          gradientWidth={500}
        >
          <div className="flex items-center gap-8">
            <Google />
            <Amazon />
            <Meta />
            <Adobe />
            <Microsoft />
            <Google />
            <Amazon />
            <Meta />
            <Adobe />
            <Microsoft />
            <Google />
            <Amazon />
            <Meta />
            <Adobe />
            <Microsoft />
          </div>
        </Marquee>
      </div>
    </section>
  );
}