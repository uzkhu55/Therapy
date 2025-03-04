"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex mt-6 mb-7 flex-wrap gap-4 items-center justify-center lg:flex-row md:flex-col relative">
      {/* Sidebar for tablets and larger */}
      <div
        className={`lg:w-[300px] p-4 bg-[#f8f8f8] shadow-xl rounded-xl ${
          sidebarOpen ? "block" : "hidden"
        } lg:block`} // Show/hide sidebar on small screens based on sidebarOpen
      >
        <h2 className="text-xl font-bold text-[#325343] mb-4">
          Танд хэрэгтэй мэдээ
        </h2>
        <ul className="space-y-4">
          {Niitleluud.map(({ title, img, id }) => (
            <li key={id} className="flex">
              <Link href={`/niitlel/${id}`}>
                <div className="shadow-gray-300 shadow-xl rounded-3xl">
                  <img
                    src={img}
                    alt={title}
                    className="h-[100px] w-[200px] rounded-t-3xl"
                  />
                  <div className="bg-white w-[200px] p-3 rounded-b-3xl">
                    <div className="mb-2 text-sm">{title}</div>
                    <div className="text-sm text-[#325343] font-bold flex items-center gap-3">
                      Унших
                      <GoArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Toggle Icon for mobile/tablet */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-3 text-[#325343] bg-white shadow-xl rounded-full absolute top-4 right-4"
      >
        {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </div>
  );
};
