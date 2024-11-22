import React from "react";
import { NuutslalSVG1 } from "./NuutslalSVG1";
import { NuutslalSVG2 } from "./NuutslalSVG2";
import { NuutslalSVG3 } from "./NuutslalSVG3";
import { Section2svg } from "./Section2svg";

const AnonymousSection: React.FC = () => {
  return (
    <div className="w-full h-full bg-white relative pb-[200px] pt-6 px-4 md:px-6 lg:px-8">
      <div className="w-full flex justify-center mt-6">
        {/* Mobile Layout */}
        <div className="max-w-[1120px] flex flex-col lg:hidden justify-center items-center w-full gap-[40px]">
          <div className="start max-w-[1024px]">
            <div className="w-full text-[#102d3f] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium font-['Rubik'] break-words text-start sm:text-left">
              Таны нууцлал болон аюулгүй байдал бол бидний нэн тэргүүний зорилт
              юм.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-[1024px]">
            {/* Unique Username */}
            <div className="flex flex-col items-start text-justify gap-4">
              <div>
                <NuutslalSVG1 />
              </div>
              <div className="text-[#102d3f] text-[21px] font-bold font-['Inter']">
                Онцгой нэр
              </div>
              <div className="w-full text-justify text-[#102d3f] text-lg font-normal font-['Inter']">
                Qwell-д бүртгүүлснээр та онцгой хэрэглэгчийн нэр үүсгэдэг тул
                таныг хэн гэдгийг хэн ч мэдэхгүй. Бид таны нэрийг асуухгүй.
              </div>
            </div>

            {/* Personal Data */}
            <div className="flex flex-col items-start text-justify gap-4">
              <div>
                <NuutslalSVG2 />
              </div>
              <div className="text-[#102d3f] text-[21px] font-bold font-['Inter']">
                Хувийн мэдээлэл
              </div>
              <div className="w-full text-justify text-[#102d3f] text-lg font-normal font-['Inter']">
                Бид танд үйлчилгээ үзүүлэхийн тулд зарим хувийн мэдээллийг
                цуглуулах шаардлагатай. Мөн мэдээлэл нь бидний үйл ажиллагааг
                хэмжих, үйлчилгээгээ сайжруулахад тусалдаг.
              </div>
            </div>

            {/* Safety First */}
            <div className="flex flex-col items-start text-justify gap-4">
              <div>
                <NuutslalSVG3 />
              </div>
              <div className="text-[#102d3f] text-[21px] font-bold font-['Inter']">
                Хамгаалалт
              </div>
              <div className="w-full text-justify text-[#102d3f] text-lg font-normal font-['Inter']">
                Бид таны аюулгүй байдлыг нэн тэргүүнд тавьж ажилладаг бөгөөд
                зөвхөн таны аюулгүй байдалд санаа зовох тодорхой нөхцөлд л
                холбогдох үйлчилгээтэй таны мэдээллийг хуваалцах болно.
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="max-w-[1120px] hidden lg:flex justify-between items-start w-full gap-[40px]">
          {/* Left Column */}
          <div className="start max-w-[544px]">
            <div className="w-full text-[#102d3f] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium font-['Rubik'] break-words text-center sm:text-left">
              Таны нууцлал болон аюулгүй байдал бол бидний нэн тэргүүний зорилт
              юм.
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-8 max-w-[480px]">
            {/* Unique Username */}
            <div className="flex flex-col items-start text-justify gap-4">
              <div>
                <NuutslalSVG1 />
              </div>
              <div className="text-[#102d3f] text-[21px] font-bold font-['Inter']">
                Онцгой нэр
              </div>
              <div className="w-full h-[136px] text-justify text-[#102d3f] text-lg font-normal font-['Inter']">
                Qwell-д бүртгүүлснээр та онцгой хэрэглэгчийн нэр үүсгэдэг тул
                таныг хэн гэдгийг хэн ч мэдэхгүй. Бид таны нэрийг асуухгүй.
              </div>
            </div>

            {/* Personal Data */}
            <div className="flex flex-col items-start text-justify gap-4">
              <div>
                <NuutslalSVG2 />
              </div>
              <div className="text-[#102d3f] text-[21px] font-bold font-['Inter']">
                Хувийн мэдээлэл
              </div>
              <div className="w-full h-[136px] text-justify text-[#102d3f] text-lg font-normal font-['Inter']">
                Бид танд үйлчилгээ үзүүлэхийн тулд зарим хувийн мэдээллийг
                цуглуулах шаардлагатай. Мөн мэдээлэл нь бидний үйл ажиллагааг
                хэмжих, үйлчилгээгээ сайжруулахад тусалдаг.
              </div>
            </div>

            {/* Safety First */}
            <div className="flex flex-col items-start text-justify gap-4">
              <div>
                <NuutslalSVG3 />
              </div>
              <div className="text-[#102d3f] text-[21px] font-bold font-['Inter']">
                Хамгаалалт
              </div>
              <div className="w-full h-[136px] text-justify text-[#102d3f] text-lg font-normal font-['Inter']">
                Бид таны аюулгүй байдлыг нэн тэргүүнд тавьж ажилладаг бөгөөд
                зөвхөн таны аюулгүй байдалд санаа зовох тодорхой нөхцөлд л
                холбогдох үйлчилгээтэй таны мэдээллийг хуваалцах болно.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section2svg />
    </div>
  );
};

export default AnonymousSection;
