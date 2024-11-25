"use client";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
export const Niitleluud = [
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
  {
    id: 4,
    title: "Сургуульд орсон хүүхдийнхээ сэтгэл зүйд хэрхэн анхаарах вэ?",
    img: "/image4.jpg",
  },
  {
    id: 5,
    title: "Ганцаардал уу? эсвэл Сэтгэл гутрал уу?",
    img: "/image5.png",
  },
  {
    id: 6,
    title: "Хөвгүүд мэдрэмжээ илэрхийлэх эрхтэй",
    img: "/image6.jpg",
  },
  {
    id: 7,
    title: "Хайрын код",
    img: "/image7.jpeg",
  },
  {
    id: 8,
    title: "Сэтгэл зүйн зөвлөгөө VS Найзын зөвлөгөө",
    img: "/image8.jpg",
  },
  {
    id: 9,
    title: "Хүүхдэдээ хайраа мэдрүүлэх үгс",
    img: "/image9.jpg",
  },
  {
    id: 10,
    title: "Яагаад хүүхэд бусдыг хаздаг вэ?",
    img: "/image10.png",
  },
  {
    id: 11,
    title: "Хэзээ сэтгэл зүйчид хандах вэ?",
    img: "/image11.jpeg",
  },
  {
    id: 12,
    title: "Зөвлөгөө авах сэтгэл зүйчээ сонгохдоо анхаарах зүйлс",
    img: "/image12.png",
  },
];
export const AllNews = () => {
  return (
    <div className="flex flex-wrap  gap-4 items-center justify-center">
      {Niitleluud.map(({ title, img, id }) => {
        return (
          <div key={id} className="flex">
            <Link href={`/niitlel/${id}`}>
              <div className="shadow-gray-300 shadow-xl rounded-3xl">
                <img
                  src={img}
                  alt=""
                  className="h-[150px] w-[250px] rounded-t-3xl"
                />
                <div className="bg-white w-[250px] p-5 rounded-b-3xl">
                  <div className=" mb-[30px] text-sm">{title}</div>
                  <div className="text-sm text-[#325343] font-bold flex items-center gap-3">
                    Унших
                    <GoArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
