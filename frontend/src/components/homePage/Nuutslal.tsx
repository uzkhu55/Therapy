"use client";

import { NuutslalSVG1 } from "./NuutslalSVG1";
import { NuutslalSVG2 } from "./NuutslalSVG2";
import { NuutslalSVG3 } from "./NuutslalSVG3";

const Nuutslal = () => {
  return (
    <div className="w-full h-[747px] flex justify-center mx-auto bg-white">
      <div className="w-full max-w-[1120px] h-[588px] mt-[31px]  flex items-start justify-between">
        <div className="w-full max-w-[544px] text-[#102d3f] text-4xl font-medium font-['Rubik'] leading-[50px] mb-8">
          Таны нууцлал болон аюулгүй байдал бол бидний нэн тэргүүний зорилт юм.
        </div>

        <div className="w-full max-w-[480px] space-y-12">
          {/* Section 1 */}
          <div className="space-y-2">
            <NuutslalSVG1 />
            <h3 className="text-[#102d3f] text-[21px] font-bold font-['Inter'] leading-7">
              Онцгой нэр
            </h3>
            <p className="text-justify text-[#102d3f] text-[15px] font-normal font-['Inter'] leading-relaxed">
              Qwell-д бүртгүүлснээр та онцгой хэрэглэгчийн нэр үүсгэдэг тул
              таныг хэн гэдгийг хэн ч мэдэхгүй. Бид таны нэрийг асуухгүй.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <NuutslalSVG2 />
            <h3 className="text-[#102d3f] text-[21px] font-bold font-['Inter'] leading-7">
              Хувийн мэдээлэл
            </h3>
            <p className="text-justify text-[#102d3f] text-[15px] font-normal font-['Inter'] leading-relaxed">
              Бид танд үйлчилгээ үзүүлэхийн тулд зарим хувийн мэдээллийг
              цуглуулах шаардлагатай. Мөн мэдээлэл нь бидний үйл ажиллагааг
              хэмжих, үйлчилгээгээ сайжруулахад тусалдаг.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <NuutslalSVG3 />
            <h3 className="text-[#102d3f] text-[21px] font-bold font-['Inter'] leading-7">
              Хамгаалалт
            </h3>
            <p className="text-justify text-[#102d3f] text-[15px] font-normal font-['Inter'] leading-relaxed">
              Бид таны аюулгүй байдлыг нэн тэргүүнд тавьж ажилладаг бөгөөд
              зөвхөн таны аюулгүй байдалд санаа зовох тодорхой нөхцөлд л
              холбогдох үйлчилгээтэй таны мэдээллийг хуваалцах болно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nuutslal;
