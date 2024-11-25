"use client";

import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Footer from "../homePage/Footer";
import { Button } from "@/components/ui/button";

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

const Niitlel = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full pb-[100px]">
        <div className="w-[860px] mt-[50px]">
          Нийтлэлүүдийг InnerHeal-ийн олон нийтийн гишүүд болон мэргэжлийн
          багийнхан бичсэн. Бусдаас суралцаж, ойлгож, эсвэл өөрийн туршлагаа
          хуваалцах замаар сэтгэцийн эрүүл мэндийн аялалд дэмжлэг үзүүлээрэй.
        </div>
        <div className="text-2xl mt-[30px] font-bold w-[1120px] mb-[50px] pl-[120px]">
          Бүх нийтлэл
        </div>
        <div className="flex flex-wrap w-[1120px] gap-[50px] items-center justify-center">
          {Niitleluud.map(({ title, img, id }) => {
            return (
              <div key={id} className="flex">
                <Link href={`/niitlel/${id}`}>
                  <div className="shadow-gray-300 shadow-xl rounded-3xl">
                    <div className="absolute mt-[10px] ml-[10px] rounded-2xl   text-[#325343]  bg-[#deebc0] text-sm w-[70px] flex items-center justify-center font-bold">
                      Нийтлэл
                    </div>
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
        <div className="h-[1px] w-[800px] bg-[#213B4A] mt-[120px]"></div>
        <div className="text-xl mb-[20px]">
          Өнөөдөр бүртгүүлээд сэтгэл зүйгээ дэмжих олон янзын сэдвүүдээс
          сонирхоорой.
        </div>
        <Link href={"/sign-up"}>
          <Button
            className="bg-[#FECE57] text-[#325343] items-center rounded-full
    w-[230px] text-center text-base font-bold font-['Inter'] leading-9 
    hover:bg-[#F9B927] transition-colors duration-300 ease-in-out mb-[40px]"
          >
            ХЯЛБАР БҮРТГЭЛ
          </Button>
        </Link>

        <Footer />
      </div>
    </div>
  );
};
export default Niitlel;
