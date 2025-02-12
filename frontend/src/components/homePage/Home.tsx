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
      <div className="w-full  flex bg-[#F3EFE9] justify-center flex-col-reverse items-center gap-8 md:gap-[200px]  md:flex md:flex-row  md:px-[200px]  pt-[100px] relative z-40">
        <div className="px-4 w-[300px] md:w-[500px] text-2xl">
          Та өөрийн хэрэглэгчийн нэр болон нууц үгээр нэвтэрч, эсвэл шинэ
          бүртгэл үүсгэн оролцоно уу. Харилцаа холбоогоо илүү ойртуулъя! <br />
          Та чатлахад бэлэн үү? Одоо эхэлцгээе! 🚀
          <br />© Таны найдвартай чат апп
        </div>
        <img
          src="/ChatUi.png"
          className="w-[420px] md:w-[400px] md:h-[250px] h-[300px]"
          alt=""
        />
      </div>
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default Homepage;
