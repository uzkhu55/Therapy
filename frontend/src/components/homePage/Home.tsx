"use client";

import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "@/components/homePage/Footer";
import FooterDeed from "@/components/homePage/FooterDeed";
import Section4 from "@/components/homePage/Section4";
import Section3 from "@/components/homePage/Section3";
import MentalTuv from "../mentalTuv/MentalTuv";
import { Section5 } from "./Section5";

const Homepage = () => {
  return (
    <div className="relative h-full bg-white w-screen ">
      <div className="w-screen h-[903px] md:h-[683px] lg:h-[862px] bg-[#325343] z-[-1]">
        <div className="absolute top-0 left-0 w-screen h-[903px] md:h-[683px] lg:h-[862px] bg-[url('/Texture.png')] bg-cover bg-center pointer-events-none z-0"></div>
      </div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default Homepage;
