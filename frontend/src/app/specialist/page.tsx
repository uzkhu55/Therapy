import React from "react";
import SecondaryHeader from "@/components/homePage/SecondaryHeader";
import Footer from "@/components/homePage/Footer";

const Specialist = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SecondaryHeader />
      <div className="flex-grow items-center justify-center flex">
        Specialist
      </div>
      <Footer />
    </div>
  );
};

export default Specialist;
