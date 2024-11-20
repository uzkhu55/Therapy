"use client";

import { Section3Article } from "../../components/homePage/Section3Article";
import { Section3Feature } from "../../components/homePage/Section3Feature";
import { GoArrowRight } from "react-icons/go";
import { DavuuSVG1 } from "./DavuuSVG1";
import { DavuuSVG2 } from "./DavuuSVG2";
import { DavuuSVG3 } from "./DavuuSVG3";
import { Section3svg } from "./Section3svg";

interface Article {
  id: number;
  title: string;
  img: string;
}

const Niitleluud: Article[] = [
  {
    id: 1,
    title: "Улирал солигдох нь сэтгэл зүйд хэрхэн нөлөөлдөг вэ?",
    img: "/Haniad.png",
  },
  {
    id: 2,
    title: "Гэр бүл салалтын дараа сэтгэл зүйдээ хэрхэн анхаарах вэ?",
    img: "/Salalt.png",
  },
  {
    id: 3,
    title: "Цас бидний сэтгэл зүйд хэрхэн нөлөөлдөг вэ?",
    img: "/Uvul.png",
  },
];

const Section3: React.FC = () => {
  return (
    <div className="w-full relative z-40">
      <div className="w-full flex flex-col justify-start items-center bg-[#F3EFE9] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-[1120px] mt-[72px]">
          <div className="w-full text-[#102d3f] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium font-['Rubik'] mb-[64px] break-words text-start sm:text-left">
            Мэргэжлийн сэтгэл зүйчдийн бэлтгэсэн мэдээллүүдээс уншаарай
          </div>

          {/* Articles Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] mb-[50px]">
            {Niitleluud.map(({ title, img, id }) => (
              <Section3Article key={id} title={title} img={img} id={id} />
            ))}
          </div>

          <div className="font-bold text-xl text-[#102d3f] flex items-center justify-end max-w-[1120px] mb-[50px]">
            <div>Бүгдийг унших</div>
            <GoArrowRight className="ml-[10px] mt-[5px]" />
          </div>

          {/* Features Section */}
          <div className="w-full text-[#102d3f] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium font-['Rubik'] mb-[64px] break-words text-start sm:text-left">
            Үнэгүй, хүлээх хугацаа байхгүй, шүүмжлэлгүй
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] mb-[238px]">
            <Section3Feature
              title="Ашиглахад үнэгүй"
              description="NHS-ийн санхүүжилтэй үйлчилгээ учир та өөрт хэрэгтэй тусламжаа төлбөрийн асуудалгүй авах боломжтой."
              SvgComponent={<DavuuSVG1 />}
            />
            <Section3Feature
              title="Түргэн дэмжлэг"
              description="Хүлээх хугацаа, лавлагаа шаардлагагүй тул та өнөөдөр бүртгүүлээд дэмжлэг авах боломжтой."
              SvgComponent={<DavuuSVG2 />}
            />
            <Section3Feature
              title="Итгэж болох үйлчилгээ"
              description="Бид Монгол улсын цорын ганц дижитал мэргэжлийн үйлчилгээ юм. BACP, UKCP эсвэл NCS-д бүртгэлтэй мэргэжлийн зөвлөхүүдтэй чатлаарай."
              SvgComponent={<DavuuSVG3 />}
            />
          </div>
        </div>
      </div>
      <Section3svg />
    </div>
  );
};

export default Section3;
