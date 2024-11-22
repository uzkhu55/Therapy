"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const MentalTuvuud = [
  {
    id: 1,
    title: "Mindfit төв",
    img: "/mindfit.jpg",
  },
  {
    id: 2,
    title: "PPC Сэтгэц оношилгоо, сэтгэл зүйн төв",
    img: "/ppc.png",
  },
  {
    id: 3,
    title: "Гэрэлт Ирээдүй Сэтгэл Судлалын Хүрээлэн",
    img: "/bright.jpg",
  },
  {
    id: 4,
    title: "Ариусахуйн Ертөнц сэтгэл заслын төв",
    img: "/arius.jpg",
  },
  {
    id: 5,
    title: "Сэтгэл Судлалын Үндэсний Төв",
    img: "/npc.jpg",
  },
  {
    id: 6,
    title: "Гэр Бүлийн Сургууль",
    img: "/fam.jpg",
  },
  {
    id: 7,
    title: "Монголын урлагийн сэтгэл заслын мэргэжлийн холбоо",
    img: "/art.jpg",
  },
  {
    id: 8,
    title: "Монголын сэтгэл зүй сэтгэц хэмжил зүйн үндэсний хүрээлэн",
    img: "/setgets.jpg",
  },
  {
    id: 9,
    title: "Focus on the Family Mongolia – Гэр Бүл Анхаарлын Төвд",
    img: "/fot.jpg",
  },
  {
    id: 10,
    title: "Positive dadal",
    img: "/pos.jpg",
  },
  {
    id: 11,
    title: "Хөөрхөн зүрх ТББ",
    img: "/heart.jpg",
  },
  {
    id: 12,
    title: "Гэр бүлийн судалгаа боловсролыг үндэсний хүрээлэн",
    img: "/gerbul.jpg",
  },
];

const MentalTuv = () => {
  return (
    <div className="w-full bg-[#F3EFE9] items-center justify-center flex px-4 md:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center w-full max-w-[1120px] pb-[100px]">
        <div className="font-bold text-[40px] text-[#102d3f] mt-[50px] mb-[50px]">
          Сэтгэл зүйн төвүүд ✨
        </div>

        <div className="max-w-[1120px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] items-center justify-center mb-[100px]">
          {MentalTuvuud.map(({ title, img, id }, index) => {
            return (
              <div key={index} className="w-full">
                <Link href={`/tuvuud/${id}`}>
                  <div className="shadow-gray-300 shadow-lg w-full rounded-3xl">
                    <div className="bg-white w-full p-5 rounded-3xl flex justify-between items-center gap-5 text-[#102d3f]">
                      <div className="text-sm font-bold flex items-center justify-start w-full">
                        {title}
                      </div>
                      <div className="h-[100px] min-w-[100px] max-w-[100px] w-[100px] flex items-center justify-center rounded-2xl bg-[#F6F6F6] p-1">
                        <img
                          src={img}
                          alt={title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
<<<<<<< HEAD

        <div className="max-w-[1120px] w-full flex flex-col items-start justify-center">
          <div className="text-2xl font-medium text-[#102d3f] font-['Rubik'] text-left mb-[20px]">
            Өнөөдөр бүртгүүлээд сэтгэл зүйгээ дэмжих олон янзын сэдвүүдээс
            сонирхоорой.
          </div>

          <Link href={"/sign-up"}>
            <Button className="bg-[#FECE57] text-[#325343] items-center rounded-full max-w-[230px] w-full text-center text-base font-bold font-['Inter'] hover:bg-[#F9B927] transition-colors duration-300 ease-in-out">
              ХЯЛБАР БҮРТГЭЛ
            </Button>
          </Link>
        </div>
=======
>>>>>>> 8dbbd77 (fe-question)
      </div>
    </div>
  );
};

export default MentalTuv;
