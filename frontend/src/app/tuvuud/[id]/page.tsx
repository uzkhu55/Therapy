import Footer from "@/components/homePage/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MentalTuv1 from "@/components/mentalTuv/MentalTuv1";
import Header from "@/components/homePage/Header";

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
  {
    id: "4",
    title: "Ариусахуйн Ертөнц сэтгэл заслын төв",
    img: "/arius.jpg",
    subtitle: `“Сэтаэшгуй ухаан” ХХК нь 2002 онд байгуулагдан сэтгэл зуйн сургалт, судалгаа, оношилгооны чиглэлээр ажиллаж эхэлсэн бөгөөд 2008 оноос “Ариусахуйн ертенц” сэтгэл заслын төвөө нээн үйл ажиллагааныхаа хүрээг өргөжүүлэн ажиллаж байна.
Ариусахуйн Ертөнц төвийн хамт олон хувь хүн, гэр бул, албан байгууллага, олон нийтэд сэтгэл зүйн боловсрол олгох, үйлчилгээ үзүүлэх, сэтгэцийн эрүүл мэндийг хамгаалах зорилгоор үйл ажиллагаагаа явуулдаг.`,
    negTitle: `Утас: `,
    negText: `(+976) 70129594`,
    hoyrTitle: `Фэйсбүүк: `,
    hoyrText: `Ариусахуйн Ертөнц сэтгэл заслын төв`,
    guravTitle: ``,
    guravText: ``,
  },
  {
    id: "5",
    title: "Сэтгэл Судлалын Үндэсний Төв",
    img: "/npc.jpg",
    subtitle: `Сэтгэл Судлалын Үндэсний Төв ТББ нь 2010 оноос хойш сэтгэл судлалын шинжлэх ухааныг хөгжүүлэх сурталчилан дэлгэрүүлэх, амьдралын өдөр тутмын хэрэглээнд нэвтрүүлэх зэрэг зорилгынхоо хүрээнд үйл ажиллагаагаа тогтвортой эрхэлж байгаа мэргэжлийн ууган байгууллагуудын нэг юм. Манай төв онол-практикийг хослуулан хувь хүн, хүүхэд, гэр бүл, байгууллагад сэтгэл зүйн үйлчилгээг хүргэн ажиллаж байна.`,
    negTitle: `Вэбсайт:`,
    negText: `www.psychology.mn`,
    hoyrTitle: `Утас: `,
    hoyrText: `(+976) 77324233`,
    guravTitle: `Фэйсбүүк:`,
    guravText: `NationalPsychologyCenter`,
  },
  {
    id: "6",
    title: "Гэр Бүлийн Сургууль",
    img: "/fam.jpg",
    subtitle: `Орчин үеийн тархи судлал, үйлдлийн өөрчлөлт, сэтгэцийн эрүүл мэндийн талаарх хамгийн сүүлийн үеийн судалгааны дүгнэлт, онолын тайлбаруудад суурилсан итгэлтэй мэдээллийг авах болно. Монгол хосуудад тулгардаг бодит жишээнүүд, бодит шийдлүүдийг санал болгоно. 10 жилийн зөвлөгөөний туршлагад суурилсан зөвлөмжүүдийг хүргэх болно.`,
    negTitle: `Вэбсайт:`,
    negText: `www.familycollege.mn`,
    hoyrTitle: `Утас: `,
    hoyrText: `(+976) 80407280`,
    guravTitle: `Фэйсбүүк:`,
    guravText: `Гэр Бүлийн Сургууль`,
  },
  {
    id: "7",
    title: "Монголын урлагийн сэтгэл заслын мэргэжлийн холбоо",
    img: "/art.jpg",
    subtitle: `Монголын Урлагийн Сэтгэл Заслын Мэргэжлийн Холбоо нь Австрали улсад Арт терапист буюу урлагийн сэтгэл засалч мэргэжлээр төгссөн анхны Монгол оюутнуудын санаачлагаар 2017 оны 2-р сарын 20-ны өдөр байгуулагдсан. Бид олон улсын түвшинд хүлээн зөвшөөрөгдсөн арт терапист буюу урлагийн сэтгэл засалч хэмээх мэргэжлийг системтэйгээр өөрийн оронд хөгжүүлэхэд олон улсын мэргэжлийн байгууллагуудтай харилцаа, холбоо тогтоож хамтран ажиллаж байна.`,
    negTitle: `Вэбсайт: `,
    negText: ` www.arttherapy.mn`,
    hoyrTitle: `Утас:`,
    hoyrText: `(+976) 99122858`,
    guravTitle: `Фэйсбүүк:`,
    guravText: `Mongolian Professional Art Therapy Association`,
  },
  {
    id: "8",
    title: "Монголын сэтгэл зүй сэтгэц хэмжил зүйн үндэсний хүрээлэн",
    img: "/setgets.jpg",
    subtitle: `Сэтгэл зүй, Сэтгэц Хэмжил Зүйн Үндэсний Хүрээлэн нь сэтгэлзүйн тестийн Психометрик ХХК-ийн нийгмийн хариуцлагын хүрээнд, судалгаа мэдээллийн баазад нь түшиглэн байгуулагдсан. Хүрээлэн нь Монгол хүний нас, сэтгэлзүйн онцлогт тохирсон сэтгэлзүйн тестүүдийг стандартчилж, психометрик анализ хийн Монгол Улсад нутагшуулж, бүх салбарын хэрэглээнд нэвтрүүлж буй мэргэжлийн байгууллага юм. Бид 2018 оноос хойш Суралцахуйн Бэрхшээлийг олон нийтэд таниулах, суралцахуйн бэрхшээлтэй хүүхдүүдийг оношлох, хүүхэд болон гэр бүл, багш нар, нийгмийн ажилтнуудад зөвлөмж, зөвлөгөө үзүүлэх ажлуудыг хийж Монгол Улсад урьд нь яригдаж байгаагүй, авч хэлэлцэгддэггүй байсан сэтгэл зүйн нарийн үзэгдлүүдийг тодорхойлж, оношилж, сэтгэц засал хийж, олон нийтийн анхааралд хүргэн ажиллаж байна.`,
    negTitle: `Вэбсайт:`,
    negText: `www.setgelsudlal.mn`,
    hoyrTitle: `Утас:`,
    hoyrText: `(+976) 70007188`,
    guravTitle: `Фэйсбүүк: `,
    guravText: `Монголын Сэтгэлзүй Сэтгэц Хэмжилзүйн Үндэсний Хүрээлэн`,
  },
  {
    id: "9",
    title: "Focus on the Family Mongolia – Гэр Бүл Анхаарлын Төвд",
    img: "/fot.jpg",
    subtitle: `Гэр Бүл Хөгжлийн Дэмжлэг – Сэтгэл зүйн оношлогоо зөвлөгөө, сургалт семинар, төсөл хөтөлбөр, ном бүтээл, мультмедиа чиглэлээр үйл ажиллагаа явуулдаг.`,
    negTitle: `Вэбсайт:`,
    negText: `www.focusmongolia.com`,
    hoyrTitle: `Утас:`,
    hoyrText: `(+976) 88834343`,
    guravTitle: `Фэйсбүүк:`,
    guravText: ` fotfmongolia`,
  },
  {
    id: "10",
    title: "Positive dadal",
    img: "/pos.jpg",
    subtitle: `Сэтгэл зүйн эрүүл мэндийн хөтөч`,
    negTitle: `Вэбсайт:`,
    negText: `www.habido.mn`,
    hoyrTitle: `Утас:`,
    hoyrText: ` (+976) 75071100`,
    guravTitle: `Фэйсбүүк:`,
    guravText: `Positive Dadal`,
  },
  {
    id: "11",
    title: "Хөөрхөн зүрх ТББ",
    img: "/heart.jpg",
    subtitle: `“Хөөрхөн Зүрх” ТББ нь Хүүхдийн эсрэг бэлгийн хүчирхийллийг таслан зогсоохын төлөө 2012 оноос эхлэн ажиллаж буй төрийн бус, шашин болон нам, ашгийн бус байгууллага юм. Бидний алсын хараа эрүүл аюулгүй нийгмийн төлөө бодлогод нөлөөлөх, олон нийтийг хүний эрх, жендэрийн тэгш эрх, жендэрт суурилсан хүчирхийллийн талаар иргэд, олон нийтийн ойлголт мэдлэгийг нэмэгдүүлж, хандлагад нөлөө үзүүлэх, болзошгүй эрсдэлээс урьдчилан сэргийлэх, ухуулан сурталчлах ажиллагааг эерэг аргаар нийгмийн хандлагыг өөрчлөх зорилго дор нэгдсэн салбар бүрийн залуусын нэгдэл юм.`,
    negTitle: `Бид дараах 4 үндсэн хөтөлбөртэй ажиллаж байна.`,
    negText: `НӨЛӨӨЛӨЛ– Жендэрт суурилсан хүчирхийллээс урьдчилан сэргийлэх болон хохоригч, даван туулагчдыг хамгаалах, хүний эрхэд суурилсан хууль эрхзүйн тогтолцоог бий болгоход бодлогын нөлөөлөл хийдэг.
ҮЙЛЧИЛГЭЭ-   Бэлгийн хүчирхийллийн даван туулагч хүүхдүүдэд сэтгэл засал, нөхөн сэргээх нийгэм-сэтгэлзүйн үйлчилгээ үзүүлдэг.
УРЬДЧИЛАН СЭРГИЙЛЭХ – Хүүхэд, өсвөр насны охид, хөвгүүдийг жендэрт суурилсан хүчирхийллээс үүдэлтэй аливаа болзошгүй бэрхшээлээс урьдчилан сэргийлэхэд ухуулан сурталчилдаг.
ЧАДАВХ БЭХЖҮҮЛЭХ – Хохирогч, даван туулагчдын эрхийг хамгаалан ажилладаг салбар бүрийн мэргэжилтнүүдийн мэргэжлийн ур чадвар, мэдлэг туршлагыг нэмэгдүүлэж,  чадавхыг бэхжүүлдэг. `,
    hoyrTitle: `Утас: `,
    hoyrText: ` (+976) 70159688`,
    guravTitle: `Фэйсбүүк:`,
    guravText: ` btifulhearts`,
  },
  {
    id: "12",
    title: "Гэр бүлийн судалгаа боловсролыг үндэсний хүрээлэн",
    img: "/gerbul.jpg",
    subtitle: `Эрхэм зорилго: Нийгмийн анхдагч нэгж, хүний хөгжлийн суурь орчин болох гэр бүлийн асуудлаар шинжлэх ухааны судалгаа хийж бодлого, зөвлөмж боловсруулах, гэр бүлийн хөгжил-боловсрол, тогтвортой байдлыг дэмжих сургалт-зөвлөгөөг явуулах замаар монголын нийгмийн хөгжилд бодит хувь нэмэр оруулах.`,
    negTitle: `СУДАЛГАА`,
    negText: `Нийгмийн бүхий л салбарт хэрэгждэг төрийн бодлого, мөн бусад нийгмийн бүлэг, нэгж, байгууллагуудын үйл ажиллагаа нь социологийн тодорхой судалгаан дээр үндэслэн явагддаг. Нийгмийн бодит нөхцөл байдлыг тодорхой судалгаанд тулгуурлан үнэн зөвөөр ойлгох нь цаашдын чиглэл, үйл ажиллагааг төлөвлөх, асуудлыг шийдвэрлэх гол гарц бөгөөд үүнд л судалгааны үүрэг ач холбогдол оршиж буй юм. Манай улсын эдийн засгийн өсөлт бууралт, үр ашиг нь хүн амын бүлгүүдийн амьжиргаанд хэрхэн нөлөөлж байгаа, боловсролын чанар, хүртээмж хийгээд хүүхдийн хөгжил, хамгаалал, гэр бүлийн хөгжлөөс эхтэй хүний хөгжлийн асуудал, нийгэм болон бүлгүүдийн харилцан үйлчлэл, нийгмийн социаль өөрчлөлт зэрэг олон асуудлууд социологийн тодорхой судалгааг шаардаж байна. Иймд бид нийгмийн асуудлуудыг хүн амын бүлгүүдтэй холбон судлахаас гадна тухайлан гэр бүлийн үүрэг, хариуцлага, ёс зүйн хэм хэмжээ, тогтвортой байдал, салалт, хүчирхийлэл, гэр бүл дэхь хүний эрх, хүүхдийн асуудал, гэр бүлийн хөгжил, чадавхи зэрэг асуудлаар тодорхой судалгааг хийж бодит байдлыг тодруулах юм.`,
    hoyrTitle: `Вэбсайт:`,
    hoyrText: `www.gerbul.mn`,
    guravTitle: `Утас:`,
    guravText: ` (+976) 99105317`,
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const findMentalTuvById = BuhTuv.find((el) => el.id === id);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
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
      <div className="h-[1px] w-[800px] bg-[#213B4A] mt-[50px]"></div>
      <div className="text-xl mb-[20px] ">
        Өнөөдөр бүртгүүлээд сэтгэл зүйгээ дэмжих олон янзын сэдвүүдээс
        сонирхоорой.
      </div>

      <Footer />
    </div>
  );
}
