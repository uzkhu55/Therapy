"use client";

import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Footer from "../homePage/Footer";
import { Button } from "@/components/ui/button";

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
];

const MentalTuv = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full pb-[100px] mt-[100px]">
        <div className="flex flex-wrap w-[1120px] gap-[50px] items-center justify-center">
          {MentalTuvuud.map(({ title, img, id }) => {
            return (
              <div key={id} className="flex">
                <Link href={`/tuvuud/${id}`}>
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
export default MentalTuv;
