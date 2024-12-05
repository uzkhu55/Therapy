"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./homePage/Header";
import { Mail } from "lucide-react";
import Footer from "./homePage/Footer";

interface TheraDetail {
  authId: string;
  expectations: string;
  gender: string;
  age: string;
}

interface DetailData {
  someProperty: string;
  gender: string;
  age: string;
  relationshipStatus: string;
  prevTherapy: string;
  lookingFor: string;
  expectations: string;
  authId: {
    email: string;
  };
}

const Detailbyid = () => {
  const { user } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [detailData, setDetailData] = useState<DetailData | null>(null);
  const [theraDetailData, setTheraDetailData] = useState<TheraDetail | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const getUserDetails = async () => {
      setIsLoading(true);

      try {
        if (!user?.id) {
          router.push("/login");
          return;
        }

        const [detailResponse, theraDetailResponse] = await Promise.all([
          axios.get(`https://if-project8.onrender.com/user/detail/${user?.id}`),
          axios.get(
            `https://if-project8.onrender.com/user/theradetail/${user?.id}`
          ),
        ]);

        setDetailData(detailResponse.data || null);
        setTheraDetailData(theraDetailResponse.data || null);
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user?.id) {
      getUserDetails();
    }
  }, [user?.id, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-lvh bg-[#f1ede8]">
      <Header />
      <div className="flex max-w-[1190px] items-center h-full mx-auto">
        {(detailData || theraDetailData) && (
          <div className="flex justify-between w-full">
            <div className="max-w-xl flex flex-col gap-3 rounded-lg bg-[#fdfcf6] shadow-lg p-4">
              <div className="flex flex-col items-center space-x-4">
                <img
                  src={user?.imageUrl}
                  alt="Profile"
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    {user?.firstName} {user?.lastName}
                  </h2>
                  <p className="text-sm text-gray-500">{user?.username}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 m-6 flex flex-col gap-2">
                <p className="text-sm text-gray-700 flex gap-2">
                  <strong>Нас:</strong>{" "}
                  {detailData?.age || theraDetailData?.age}
                </p>
                <p className="text-sm text-gray-700 flex gap-2">
                  <strong>Хүйс:</strong>{" "}
                  {detailData?.gender || theraDetailData?.gender}
                </p>
                {theraDetailData?.expectations && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>Mэргэшсэн чиглэл:</strong>
                    {theraDetailData.expectations}
                  </p>
                )}
                {detailData?.relationshipStatus && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>Гэр бүлийн байдал:</strong>
                    {detailData.relationshipStatus}
                  </p>
                )}
                {detailData?.prevTherapy && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>
                      Сэтгэл зүйн зөвлөгөө өмнө нь авч байсан эсэх:
                    </strong>{" "}
                    {detailData.prevTherapy}
                  </p>
                )}
                {detailData?.lookingFor && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>Сэтгэл зүйн зөвлөгөө хэнд авах:</strong>
                    {detailData.lookingFor}
                  </p>
                )}
                <p className="text-sm text-gray-700 flex gap-2">
                  <strong>Сэтгэл зүйчээс хүлээх хүлээлт:</strong>{" "}
                  {detailData?.expectations || theraDetailData?.expectations}
                </p>
                <p className="flex items-center text-sm text-gray-700 gap-1">
                  <Mail className="w-4 h-4 mr-2" />
                  {user?.emailAddresses[0].emailAddress || "No email available"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Detailbyid;
