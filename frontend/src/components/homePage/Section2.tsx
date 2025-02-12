import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Section2svg } from "./Section2svg";

const Section2 = () => {
  return (
    <div className="flex flex-col bg-white px-4 md:px-6 lg:px-8 relative">
      <div className="max-w-[1120px] mx-auto mb-[220px] mt-[30px] z-40">
        <div className="w-full text-[#102d3f] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium font-['Rubik'] mb-[64px] break-words text-start sm:text-left">
          Таны хэрэгцээнд нийцсэн олон төрлийн{" "}
          <br className="hidden md:block" />
          тусламжийн сонголтууд
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px]">
          {/* Professional support */}
          <div className="">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="w-full text-[#102d3f] text-[22px] font-bold font-['Inter']">
                Мэргэжлийн дэмжлэг
              </div>
              <div className="w-full text-[#102d3f] text-lg mb-6">
                Манай мэргэжлийн баг таны том жижиг ямар ч асуудалд дэмжлэг
                үзүүлэхэд бэлэн байна. Ямар нэгэн лавлагаа шаардлагагүй, зүгээр
                л чатлах хүсэлтээ илгээгээрэй.
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="w-full text-[#102d3f] text-[22px] font-bold font-['Inter']">
                Нийгмийн дэмжлэг
              </div>
              <div className="w-full text-[#102d3f] text-lg mb-6">
                Манай хамтын форум аюулгүй байдлыг харгалзан үзэж хянадаг бөгөөд
                хүмүүс хоорондоо асуудлаа хуваалцаж, хэлэлцэх боломжийг олгодог.
              </div>
            </div>
          </div>

          {/* Personal development tools */}
          <div className="">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="w-full text-[#102d3f] text-[22px] font-bold font-['Inter']">
                Хувийн хөгжлийн хэрэгсэл
              </div>
              <div className="w-full text-[#102d3f] text-lg font-normal font-['Inter'] mb-6">
                Манай өөртөө туслах хэрэгслийн багц нь танд тэмдэглэл хөтлөх,
                сэтгэл хөдлөлөө хянах, зорилго тавих боломжийг олгодог.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section2svg />
    </div>
  );
};

export default Section2;
