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
          Та өөрийн хэрэглэгчийн нэр болон нууц үгээр нэвтэрч, эсвэл шинэ
          бүртгэл үүсгэн оролцоно уу. Харилцаа холбоогоо илүү ойртуулъя! <br />{" "}
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
      <div className="w-full px-4 flex flex-col-reverse items-center gap-8  md:flex md:flex-row  md:px-[500px]  pt-[100px] relative z-40">
        <div>
          Холбогдох, Хуваалцах, Бүтээх! Та өөрийн хэрэглэгчийн нэр болон нууц
          үгээр нэвтэрч, эсвэл шинэ бүртгэл үүсгэн, олон нийттэй илүү ойртоорой.
          Одоо өөрийн үзэл бодол, санаа бодол, зураг, бичлэгүүдээ хуваалцахад
          бэлэн үү? 📢 Хамтдаа хуваалцъя: Өөрийн сэтгэл хөдөлгөм постуудыг
          хуваалцан, найзуудтайгаа болон дагагчидтайгаа холбогдоорой. 📸
          Мэдрэмжээ илэрхийлье: Өөрийн өдөр тутмын амьдралаа зургаар илэрхийлэн,
          дурсамж бүтээх орон зайг бий болгоорой. 🌟 Шинэ зүйлс бүтээцгээе: Илүү
          ихийг суралцаж, өөрийн хандлага, бүтээлээрээ нийгэмдээ эерэг өөрчлөлт
          авчирна уу. Та шинэ санаагаа дэлхийтэй хуваалцахад бэлэн үү? Тэгвэл яг
          одоо эхэлцгээе! 🚀 © Таны найдвартай нийгмийн сүлжээ.
        </div>
        <img
          src="/apoointmentui.png"
          className="w-[250px] md:w-[400px] md:h-[250px] h-[200px]"
          alt=""
        />
      </div>
      <Section4 />
      <div className="w-full px-4 flex flex-col items-center gap-8  md:flex md:flex-row  md:px-[500px] bg-[#F3EFE9] pt-[100px] relative z-40">
        <img
          src="/postui.png"
          className="w-[250px] md:w-[400px] md:h-[250px] h-[200px]"
          alt=""
        />
        <div>
          Таны сэтгэл зүйчтэй уулзах цагийг товлоорой Өөрийн сэтгэл санааг эрүүл
          байлгах хамгийн чухал алхам бол мэргэжлийн тусламж авах явдал юм. Бид
          таны хэрэгцээнд нийцсэн, хувийн нууцыг эрхэмлэсэн үйлчилгээг санал
          болгож байна. 🗓️ Цаг товлох амархан: Өөрт тохиромжтой өдрөө, цагийн
          хуваарийг сонгож сэтгэл зүйчтэй уулзах цагийг товлоорой. 🤝 Мэргэшсэн
          зөвлөгөө: Танд туслах өндөр туршлагатай, итгэлтэй сэтгэл зүйчидтэй
          холбогдоно уу. 📋 Онлайн эсвэл биечлэн уулзалт: Тохиромжтой хэлбэрийг
          сонгон, таны цаг завд нийцсэн орчинд уулзах боломжтой. 📩 Сануулга,
          баталгаажуулалт: Товлосон уулзалтаа баталгаажуулж, мартахгүйн тулд
          сануулгыг и-мэйл эсвэл мессежээр хүлээн аваарай. ✨ Танд зориулсан тав
          тухтай үйлчилгээ: Хувийн нууцлалыг хангаж, таны хэрэгцээнд нийцсэн
          зөвлөгөө авах нөхцөлийг бүрдүүлнэ. Өөртөө анхаарал хандуулж, аз
          жаргалтай, эрүүл амьдралд хөтлөх алхмаа өнөөдрөөс эхлүүлээрэй. Одоо
          цаг товлоорой! 🚀 © Таны сэтгэл санааны эрүүл мэндийг дэмжих платформ.
        </div>
      </div>
      <Section5 />
      <Footer />
    </div>
  );
};

export default Homepage;
