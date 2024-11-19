export const About = () => {
  return (
    <div className="">
      <div className="flex flex-col  items-center  bg-[#325343] bg-[url('/Texture.png')] bg-cover bg-center pb-[200px] pt-[100px]">
        <div className="font-bold text-[60px] text-white">Бидний тухай</div>
        <div className="text-sm  text-white w-[870px]">
          Бид Монгол улсад тулгараад буй сэтгэл зүй, хууль эрх зүй, хүний эрх,
          ажлын байр, бэлгийн боловсрол, гоо сайхны эрүүл мэндийн туслалцаа
          үйлчилгээний хүртээмжгүй байдлыг шийдвэрлэхээр blindcare олон нийтийн
          платформыг хөгжүүлж байна.
        </div>
      </div>
      <div className="flex flex-col  items-center">
        <div className="font-bold text-[50px] mt-[50px] text-[#102d3f]">
          Тогтвортой хөгжлийн чиглэл
        </div>
        <div className="text-sm  w-[1000px] text-[#102d3f]">
          НҮБ-ын Тогтвортой хөгжлийн бодлого 2030 хөтөлбөрт тусгагдсан зорилтууд
          болох эрүүл мэндийг үйлчилгээг жигд хүртээмжтэй хүргэж, ялгаварлан
          гадуурхлыг зогсоож, тэгш бус байдлыг бууруулах 3, 5, 9, 10, 17
          чиглэлээр шийдэл боловсруулаад байна.
        </div>
      </div>
      <img src="/nvb.png" alt="" className="mb-[100px] " />
    </div>
  );
};
