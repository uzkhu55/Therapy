import Footer from "@/components/homePage/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MentalTuv1 from "@/components/mentalTuv/MentalTuv1";

const BuhTuv = [
  {
    id: "1",
    title: "Mindfit төв",
    img: "/mindfit.jpg",
    subtitle: `Mindfit төв нь сэтгэл зүйн ба сэтгэцийн эрүүл мэндийн тусламж үйлчилгээ цогцоор үзүүлдэг сургалт, зөвлөгөө, судалгааны төв юм.

Энэхүү төв нь 2011 оны 02 сарын 07 байгуулагдаж, сэтгэцийн эрүүл мэндийн талаар боловсрол олгох сургалт, зөвлөгөө өгөх чиглэлээр үйл ажиллагаа явуулж эхлэсэн.

Mindfit төвд сэтгэл зүйч, мэргэшсэн сэтгэцийн эмч, сэтгэл засалч эмч зэрэг нарийн мэргэжлийн эмч мэргэжилтнүүд тусламж үйлчилгээ үзүүлж байна.`,
    negTitle: ``,
    negText: ``,
    hoyrTitle: `Утас:`,
    hoyrText: ` (+976) 77752020`,
    guravTitle: `Фэйсбүүк: `,
    guravText: `Mindfit`,
  },
  {
    id: "2",
    title: "PPC Сэтгэц оношилгоо, сэтгэл зүйн төв",
    img: "/ppc.png",
    subtitle: `Мэргэжлийн сэтгэцийн оношилгоо болон сэтгэл зүйн зөвлөгөө, сургалт чиглэлээр үйл ажиллагаагаа явуулахаар цоо шинэхэн төв Улаанбаатар хотод нээгдлээ. Мөн Сэтгэц оношилгоо, сэтгэл зүйн төв нь мэргэжлийн сэтгэл судлаач, сэтгэл зүйчдийг бэлтгэх чиглэлээр үйл ажиллагаа явуулахыг дуулгахад таатай байна.`,
    negTitle: `Вэбсайт:`,
    negText: `www.ppc.mn`,
    hoyrTitle: `Утас:`,
    hoyrText: ` (+976) 70002002`,
    guravTitle: `Фэйсбүүк:`,
    guravText: `PPCMongolian`,
  },
  {
    id: "3",
    title: "Гэрэлт Ирээдүй Сэтгэл Судлалын Хүрээлэн",
    img: "/bright.jpg",
    subtitle: `Гэрэлт Ирээдүй сэтгэл судлалын хүрээлэн нь өсвөр насны хүүхдийн сэтгэл зүйн оношилгоо, зөвлөгөө, сургалтын цогц үйлчилгээ явуулдаг байгууллага юм. Манай байгууллага нь залуу судлаачдыг багаас нь бэлтгэх зорилготой “сэтгэл судлалаар суралцах хүсэлтэй хүүхдүүдийн нэгдэл” болсон Tuv Teenagers club-н дотоод/гадаад руу чиглэсэн идэвхтэй үйл ажиллагаа явуулж байна. Манай байгууллагын оффис хотод бас салбарлах гэж байгаа. Хаяг нь: Тэнгистйн баруун талд M Plaza 8 давхарт 806 тоот /2,4,6 дахь өдрүүдэд/ Төв аймгийн хаяг дээр 1,3,5 дахь өдрүүдэд ганцаарчилсан болон бүлгийн зөвлөгөө тогтмол явагдаж байна.`,
    negTitle: `Утас:`,
    negText: `(+976) 99757374`,
    hoyrTitle: `Фэйсбүүк:`,
    hoyrText: `BrightFuturePsychologyCenter`,
    guravTitle: ``,
    guravText: ``,
  },
  //   {
  //     id: "4",
  //     title: "",
  //     img: "/Haniad.png",
  //     subtitle: ``,
  //     negTitle: ``,
  //     negText: ``,
  //     hoyrTitle: ``,
  //     hoyrText: ``,
  //     guravTitle: ``,
  //     guravText: ``,
  //   },
];

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const findMentalTuvById = BuhTuv.find((el) => el.id === id);

  return (
    <>
      <MentalTuv1
        title={findMentalTuvById?.title}
        img={findMentalTuvById?.img}
        subtitle={findMentalTuvById?.subtitle}
        negTitle={findMentalTuvById?.negTitle}
        negText={findMentalTuvById?.negText}
        hoyrTitle={findMentalTuvById?.hoyrTitle}
        hoyrText={findMentalTuvById?.hoyrText}
        guravTitle={findMentalTuvById?.guravTitle}
        guravText={findMentalTuvById?.guravText}
      />
      <div className="h-[1px] w-[800px] bg-[#213B4A]"></div>
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
    </>
  );
}
