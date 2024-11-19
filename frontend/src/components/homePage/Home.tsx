"use client";

import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "@/components/homePage/Footer";
import FooterDeed from "@/components/homePage/FooterDeed";
import Nuutslal from "@/components/homePage/Nuutslal";
import Section3 from "@/components/homePage/Section3";
import { Section1svg } from "./Section1svg";
import { Section2svg } from "./Section2svg";
import { Section3svg } from "./Section3svg";
import MentalTuv from "../mentalTuv/MentalTuv";

const Homepage = () => {
  return (
    <div className="relative h-full w-screen">
      <div className="w-screen h-[861px] bg-[#325343]"></div>
      <div className="absolute top-0 left-0 w-screen h-[861px] bg-[url('/Texture.png')] bg-cover bg-center pointer-events-none z-10"></div>
      <Header under="" bg1="" bg2="" under1="" under2="" bg="" />
      <Section1 />
      <Section1svg />
      <Section2 />
      <Section2svg />
      <Section3 />
      <Section3svg />
      <Nuutslal />
      <MentalTuv />
      <FooterDeed />
      <Footer />
    </div>
  );
};

export default Homepage;
