"use client";

import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "@/components/homePage/Footer";
import Section4 from "@/components/homePage/Section4";
import Section3 from "@/components/homePage/Section3";
import { Section5 } from "./Section5";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {}, []);

  return (
    <div className="relative h-full bg-white w-screen ">
      <Header />
      <div className="w-screen h-[903px] md:h-[683px] lg:h-[862px] bg-[#325343] z-[-1]">
        <div className="absolute top-0 left-0 w-screen h-[903px] md:h-[683px] lg:h-[862px] bg-[url('/Texture.png')] bg-cover bg-center pointer-events-none z-0"></div>
      </div>
      <Section1 />

      <Section2 />
      <div className="w-full  flex bg-[#F3EFE9] flex-col-reverse items-center gap-8  md:flex md:flex-row  md:px-[500px]  pt-[100px] relative z-40">
        <div className="px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          praesentium deleniti cum debitis recusandae dolorem esse labore facere
          a molestiae quis voluptatibus itaque sed tempore ab officia, ullam
          optio blanditiis. Pariatur consectetur id aperiam accusamus nulla
        </div>
        <img
          src="/timeorder.jpg"
          className="w-[420px] md:w-[400px] md:h-[250px] h-[300px]"
          alt=""
        />
      </div>
      <Section3 />
      <div className="w-full px-4 flex flex-col-reverse items-center gap-8  md:flex md:flex-row  md:px-[500px]  pt-[100px] relative z-40">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          praesentium deleniti cum debitis recusandae dolorem esse labore facere
          a molestiae quis voluptatibus itaque sed tempore ab officia, ullam
          optio blanditiis. Pariatur consectetur id aperiam accusamus nulla
        </div>
        <img
          src="/turchatui.png"
          className="w-[250px] md:w-[400px] md:h-[250px] h-[200px]"
          alt=""
        />
      </div>
      <Section4 />
      <div className="w-full px-4 flex flex-col items-center gap-8  md:flex md:flex-row  md:px-[500px] bg-[#F3EFE9] pt-[100px] relative z-40">
        <img
          src="/turchatui.png"
          className="w-[250px] md:w-[400px] md:h-[250px] h-[200px]"
          alt=""
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          praesentium deleniti cum debitis recusandae dolorem esse labore facere
          a molestiae quis voluptatibus itaque sed tempore ab officia, ullam
          optio blanditiis. Pariatur consectetur id aperiam accusamus nulla
        </div>
      </div>
      <Section5 />
      <Footer />
    </div>
  );
};

export default Homepage;
