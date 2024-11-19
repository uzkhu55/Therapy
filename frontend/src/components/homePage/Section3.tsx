"use client";

import Link from "next/link";
import { Section3svg2 } from "./Section3svg2";
import { DavuuSVG1 } from "./DavuuSVG1";
import { DavuuSVG2 } from "./DavuuSVG2";
import { DavuuSVG3 } from "./DavuuSVG3";
import { GoArrowRight } from "react-icons/go";
import Niitlel1 from "../Niitlel/Niitlel1";

const Niitleluud = [
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

const Section3 = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center min-h-[1398px] bg-[#F3EFE9]">
      <div className="flex flex-col w-[1120px] mt-[72px] z-40">
        {/* Гарчиг */}
        <div className="w-[928px] h-[104px] text-[#102d3f] text-[38px] font-medium font-['Rubik'] mb-[64px]">
          Мэргэжлийн сэтгэл зүйчдийн бэлтгэсэн <br />
          мэдээллүүдээс уншаарай
        </div>

        {/* Нийтлэл */}
        <div className=" h-[360px] justify-start items-center gap-[50px] inline-flex mb-[50px] ">
          {Niitleluud.map(({ title, img, id }) => {
            return (
              <div
                key={id}
                className="flex w-[340px] h-[360px] relative rounded-3xl"
              >
                <Link href={`/niitlel/${id}`}>
                  <div className="w-[340px] h-[360px] left-0 top-0 absolute bg-white rounded-3xl shadow">
                    <div className="absolute mt-[10px] ml-[10px] rounded-2xl   text-[#325343]  bg-[#deebc0] text-sm w-[70px] flex items-center justify-center font-bold">
                      Нийтлэл
                    </div>
                    <img
                      src={img}
                      alt=""
                      className="w-[340px] h-48 left-0 top-0 absolute rounded-t-3xl "
                    />
                    <div className="bg-white w-[250px] p-5 rounded-3xl ">
                      <div className=" w-[280.11px] h-20 left-[29.94px] top-[208px] absolute text-justify text-[#102d3f] text-lg font-medium font-['Inter'] leading-[30px]">
                        {title}
                      </div>
                      <div className="text-base text-[#325343] w-[60px] h-4 left-[30px] top-[312px] absolute  font-semibold font-['Inter'] leading-relaxed flex">
                        Унших
                        <div className="origin-top-left w-[15.45px] h-2 ml-[70px] mt-[8px] absolute">
                          <Section3svg2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <Link href={"/niitlel"}>
          <div className="font-bold text-xl text-[#102d3f] mb-[00px] ml-[900px] flex">
            <div>Бүгдийг унших</div>
            <GoArrowRight className="ml-[10px] mt-[5px]" />
          </div>
        </Link>
        {/* Гарчиг 2 */}
        <div className="w-[928px] h-12 text-[#102d3f] text-[38px] font-medium font-['Rubik'] leading-[55px] mb-[56px] mt-[80px]">
          Үнэгүй, хүлээх хугацаа байхгүй, шүүмжлэлгүй
        </div>

        {/* Давуу тал */}
        <div className="w-[1120px] h-[280px] justify-start items-end gap-[50px] inline-flex mb-[238px]">
          <div className="w-[340px] h-[282px] relative">
            <div className="w-[340px] h-6 left-0 top-[106px] absolute text-[#102d3f] text-[21px] font-bold font-['Inter'] leading-7">
              Ашиглахад үнэгүй
            </div>
            <div className="w-[53px] h-[84.92px] left-0 top-0 absolute">
              <DavuuSVG1 />
            </div>
            <div className="w-[340px] h-[136px] left-0 top-[146px] absolute text-justify text-[#102d3f] text-lg font-normal font-['Inter'] leading-[30px]">
              NHS-ийн санхүүжилтэй үйлчилгээ учир та өөрт хэрэгтэй тусламжаа
              төлбөрийн асуудалгүй авах боломжтой.
            </div>
          </div>
          <div className="w-[340px] h-[274px] relative">
            <DavuuSVG2 />
            <div className="w-[340px] h-6 left-0 top-[98px] absolute text-[#102d3f] text-[21px] font-bold font-['Inter'] leading-7">
              Түргэн дэмжлэг
            </div>
            <div className="w-[340px] h-[136px] left-0 top-[138px] absolute text-justify text-[#102d3f] text-lg font-normal font-['Inter'] leading-[30px]">
              Хүлээх хугацаа, лавлагаа шаардлагагүй тул та өнөөдөр бүртгүүлээд
              дэмжлэг авах боломжтой.
            </div>
          </div>
          <div className="w-[342px] h-[276px] relative">
            <DavuuSVG3 />
            <div className="w-[340px] h-6 left-0 top-[106px] absolute text-[#102d3f] text-[21px] font-bold font-['Inter'] leading-7">
              Ганц ч үг шүүмжлэлгүй
            </div>
            <div className="w-[340px] h-[136px] left-0 top-[146px] absolute text-justify text-[#102d3f] text-lg font-normal font-['Inter'] leading-[30px]">
              Хэрэв та хэнийг ч мэдэхгүй хүнтэй ярихыг хүсэж байвал энэ платформ
              таныг дэмжинэ.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
