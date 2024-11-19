import MentalTuv from "../mentalTuv/MentalTuv";

export const ContactPage = () => {
  return (
    <div className="w-full items-center justify-center  ">
      <div className="flex flex-col  items-center  bg-[#325343] bg-[url('/Texture.png')] bg-cover bg-center pb-[200px] pt-[100px]">
        <div className="font-bold text-[60px] text-white">Холбоо барих</div>
        <div className="text-sm  text-white">
          Бид тантай хамтран ажиллахдаа таатай байх болно.
        </div>
      </div>
      <div className="flex gap-10 items-center justify-center mt-[100px] ">
        <div className="rounded-xl w-[300px] h-[130px] bg-[#325343] text-white pl-[30px] pt-[10px] pr-[10px]">
          <div className="font-bold text-[20px]">Хаяг</div>
          <div className="text-sm">
            СБД, 1-р хороо, Чингисийн өргөн чөлөө, Гурван гол оффис центр 3
            давхар
          </div>
        </div>
        <div className="rounded-xl w-[300px] h-[130px] bg-[#325343] text-white pl-[30px] pt-[10px]">
          <div className="font-bold text-[20px]">Утас</div>
          <div className="text-sm">(+976) 72 700 800</div>
        </div>
        <div className="rounded-xl w-[300px] h-[130px] bg-[#325343] text-white pl-[30px] pt-[10px]">
          <div className="font-bold text-[20px]">И-мэйл</div>
          <div className="text-sm">social@pinecone.mn</div>
        </div>
      </div>
      <img src="/mental.jpg" alt="" className="ml-[800px]" />
    </div>
  );
};
