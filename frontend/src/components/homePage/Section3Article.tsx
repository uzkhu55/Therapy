import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface ArticleProps {
  title: string;
  img: string;
  id: number;
}

export const Section3Article: React.FC<ArticleProps> = ({ title, img, id }) => {
  return (
    <div className="w-full min-h-[360px] bg-white rounded-3xl shadow-lg overflow-hidden">
      <Link href={`/niitlel/${id}`}>
        <div className="relative">
          <div className="absolute mt-[16px] ml-[16px] rounded-2xl text-[#102d3f] py-1 px-3 bg-white text-sm flex items-center justify-center font-bold shadow-sm">
            Нийтлэл
          </div>

          <img
            src={img}
            alt={title}
            className="w-full h-[200px] object-cover rounded-t-3xl"
          />

          <div className="p-4 flex flex-col justify-between items-start">
            <div className="text-xl font-semibold text-[#102d3f] mb-2">
              {title}
            </div>
            <div className="flex items-center justify-center text-base text-[#325343] font-semibold font-['Inter']">
              <span>Унших</span>
              <GoArrowRight className="ml-[10px] mt-[5px]" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
