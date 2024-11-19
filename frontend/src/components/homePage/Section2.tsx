import Link from "next/link";
import { Button } from "../ui/button";

const Section2 = () => {
  return (
    <div className="flex justify-center h-[731px] bg-white">
      <div className="flex flex-col gap-10 max-w-[1120px] justify-between mb-[272px] z-40">
        <div className="w-full max-w-[832px] text-[#102d3f] text-[38px] font-medium font-['Rubik'] leading-[55px]">
          Таны хэрэгцээнд нийцсэн олон төрлийн тусламжийн сонголтууд
        </div>

        <div className="flex flex-wrap gap-[50px] justify-center">
          {/* Card 1 */}
          <div className="w-[340px] h-[280px] flex flex-col justify-between items-start">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="w-full h-8 text-[#102d3f] text-[22px] font-bold font-['Inter'] leading-[30.02px]">
                Мэргэжлийн дэмжлэг
              </div>
              <div className="w-full h-36 text-justify text-[#102d3f] text-lg font-normal font-['Inter'] leading-[30px]">
                Манай мэргэжлийн баг таны том жижиг ямар ч асуудалд дэмжлэг
                үзүүлэхэд бэлэн байна. Ямар нэгэн лавлагаа шаардлагагүй, зүгээр
                л чатлах хүсэлтээ илгээгээрэй.
              </div>
            </div>
            <Link href="" className="text-center">
              <Button className="w-[160px] rounded-full bg-[#6A915C] text-center text-base font-semibold hover:bg-[#5A7A46] transition-colors">
                Дэлгэрэнгүй
              </Button>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="w-[340px] h-[280px] flex flex-col justify-between items-start">
            <div className="w-full h-8 text-[#102d3f] text-[22px] font-bold font-['Inter'] leading-[30.02px]">
              Нийгмийн дэмжлэг
            </div>
            <div className="w-full h-36 text-justify text-[#102d3f] text-lg font-normal font-['Inter'] leading-[30px]">
              Манай хамтын форум аюулгүй байдлыг харгалзан үзэж хянадаг бөгөөд
              хүмүүс хоорондоо асуудлаа хуваалцаж, хэлэлцэх боломжийг олгодог.
            </div>
            <Link href="" className="text-center">
              <Button className="w-[160px] rounded-full bg-[#6A915C] text-center text-base font-semibold hover:bg-[#5A7A46] transition-colors">
                Дэлгэрэнгүй
              </Button>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="w-[340px] h-[280px] flex flex-col justify-between items-start">
            <div className="w-full h-8 text-[#102d3f] text-[22px] font-bold font-['Inter'] leading-[30.02px]">
              Хувийн хөгжлийн хэрэгсэл
            </div>
            <div className="w-full h-36 text-justify text-[#102d3f] text-lg font-normal font-['Inter'] leading-[30px]">
              Манай өөртөө туслах хэрэгслийн багц нь танд тэмдэглэл хөтлөх,
              сэтгэл хөдлөлөө хянах, зорилго тавих боломжийг олгодог.
            </div>
            <Link href="" className="text-center">
              <Button className="w-[160px] rounded-full bg-[#6A915C] text-center text-base font-semibold hover:bg-[#5A7A46] transition-colors">
                Дэлгэрэнгүй
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
