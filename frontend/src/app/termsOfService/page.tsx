"use client";
import React from "react";
import Footer from "@/components/homePage/Footer";
import SecondaryHeader from "@/components/homePage/SecondaryHeader";

const TermsOfService = () => {
  return (
    <div className="flex items-center justify-center">
      <SecondaryHeader />
      <div className="w-full flex flex-col items-center justify-start px-4 md:px-6 lg:px-8">
        <div className="max-w-[1120px] flex flex-col gap-4 mt-[50px] mb-[100px]">
          <div className="text-[#102d3f] text-2xl font-bold font-['Inter']">
            Нууцлалын бодлого болон аюулгүй байдал
          </div>
          <div>Шинэчлэгдсэн огноо: 2024 оны 1 дүгээр сарын 23</div>
          <div className="w-full text-justify text-[#102d3f] text-lg font-normal font-['Inter]">
            Иннэрхийл нь хэрэглэгчийн аюулгүй байдал болон нууцлалыг чухалчилан
            авч үздэг бөгөөд энэхүү баримтад таны хувийн мэдээлэл, аюулгүй
            байдал хэрхэн хамгаалагдаж буй талаар тусгасан болно.
          </div>
          <div className="text-[#102d3f] text-2xl font-bold font-['Inter']">
            Дата хамгаалалт
          </div>
          <div className="w-full text-justify text-[#102d3f] text-lg font-normal font-['Inter]">
            Хэрэглэгчийн мэдээллийг хамгаалах тухай хуулийн дагуу бид таны датаг
            хамгаалдаг. Хэрвээ та бидэнтэй холбогдохыг хүсвэл СБД, 1-р хороо,
            Чингисийн өргөн чөлөө, Гурван гол оффис центр 3 давхар, (+976)
            7270-0800, social@pinecone.mn хаягаар холбогдох боломжтой.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
