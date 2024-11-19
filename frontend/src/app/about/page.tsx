import { About } from "@/components/homePage/About";
import Footer from "@/components/homePage/Footer";
import Header from "@/components/homePage/Header";

const Page = () => {
  return (
    <div className="relative h-full w-screen">
      <div className="w-screen h-[100px] bg-[#325343]"></div>
      <div className="absolute top-0 left-0 w-screen h-[100px] bg-[url('/Texture.png')] bg-cover bg-center pointer-events-none z-10"></div>
      <Header />
      <About />
      <Footer />
    </div>
  );
};
export default Page;
