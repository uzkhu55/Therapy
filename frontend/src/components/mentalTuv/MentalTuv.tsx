"use client";

import Link from "next/link";

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
    <div>
      <div className="flex flex-col justify-center items-center w-full pb-[100px]  bg-white">
        <div className="font-bold text-[40px]  text-[#102d3f] mb-[50px]">
          Сэтгэл зүйн төвүүд ✨
        </div>
        <div className="flex flex-wrap w-[1120px] gap-[50px] items-center justify-center">
          {MentalTuvuud.map(({ title, img, id }) => {
            return (
              <div key={id} className="flex w-[300px] ">
                <Link href={`/tuvuud/${id}`}>
                  <div className="shadow-gray-300 shadow-xl rounded-3xl  ">
                    <div className="bg-white w-[300px] h-[] p-5 rounded-b-3xl flex justify-between text-[#102d3f] ">
                      <div className=" mb-[30px] text-sm font-bold">
                        {title}
                      </div>
                      <img
                        src={img}
                        alt=""
                        className="h-[100px] w-[100px] rounded-t-3xl object-cover"
                      />
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
      </div>
    </div>
  );
};
export default MentalTuv;
