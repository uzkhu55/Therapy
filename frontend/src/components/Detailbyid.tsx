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
  user: {
    expectations: string;
    gender: string;
    year: string;
    zuvluguu: string;
    age: string;
  };

  allAppointments: [
    {
      time: string;
      date: string;
      idTwo: string;
      createdAt: string;
    }
  ];
}

interface DetailData {
  someProperty: string;
  user: {
    gender: string;
    age: string;
    relationshipStatus: string;
    prevTherapy: string;
    lookingFor: string;
    expectations: string;
  };

  authId: {
    email: string;
  };
  allAppointments: [
    {
      time: string;
      date: string;
      idOne: string;
      createdAt: string;
    }
  ];
}
interface AppointmentData {
  idOne: string;
  idTwo: string;
  data: string;
  time: string;
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

        setDetailData(detailResponse.data);
        setTheraDetailData(theraDetailResponse.data);
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
      <div className="flex max-w-[1000px] items-center h-full mx-auto">
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
                  {detailData?.user?.age || theraDetailData?.user?.age}
                </p>
                <p className="text-sm text-gray-700 flex gap-2">
                  <strong>Хүйс:</strong>{" "}
                  {detailData?.user?.gender || theraDetailData?.user?.gender}
                </p>
                {theraDetailData?.user?.year && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>Ажилсан жил:</strong> {theraDetailData.user?.year}
                  </p>
                )}
                {theraDetailData?.user?.zuvluguu && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>Мэргэшсэн чиглэл:</strong>{" "}
                    {theraDetailData.user?.zuvluguu}
                  </p>
                )}
                {theraDetailData?.user?.expectations && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>Үйлчлүүлэгчид:</strong>{" "}
                    {theraDetailData.user?.expectations}
                  </p>
                )}
                {detailData?.user?.relationshipStatus && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>Гэр бүлийн байдал:</strong>{" "}
                    {detailData.user?.relationshipStatus}
                  </p>
                )}
                {detailData?.user?.prevTherapy && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>
                      Сэтгэл зүйн зөвлөгөө өмнө нь авч байсан эсэх:
                    </strong>{" "}
                    {detailData.user?.prevTherapy}
                  </p>
                )}
                {detailData?.user?.lookingFor && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>Сэтгэл зүйн зөвлөгөө хэнд авах:</strong>{" "}
                    {detailData.user?.lookingFor}
                  </p>
                )}
                {detailData?.user?.expectations && (
                  <p className="text-sm text-gray-700 flex gap-2">
                    <strong>Сэтгэл зүйчээс хүлээх хүлээлт:</strong>{" "}
                    {detailData.user?.expectations}
                  </p>
                )}
                <p className="flex items-center text-sm text-gray-700 gap-1">
                  <Mail className="w-4 h-4 mr-2" />
                  {user?.emailAddresses?.[0]?.emailAddress ||
                    "No email available"}
                </p>
              </div>
            </div>

            <div className="flex gap-2 flex-col overflow-y-scroll">
              <div className="font-medium text-lg pl-2">Цаг захиалга</div>
              {(theraDetailData?.allAppointments || []).map((el, i) => (
                <div
                  className="max-w-xl flex flex-col gap-2 rounded-lg bg-[#fdfcf6] shadow-lg p-4"
                  key={i}
                >
                  <div className="flex gap-2 items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Цаг захиалсан үйлчлүүлэгч: {el.idTwo}
                    </h3>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-700">Өдөр:</span>
                      <span className="text-gray-600">{el.date}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-700">Цаг:</span>
                      <span className="text-gray-600">{el.time}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-700">
                        Захиалга хийгдсэн өдөр:
                      </span>
                      <span className="text-gray-600">
                        {new Date(el.createdAt).toISOString().split("T")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {(detailData?.allAppointments || []).map((el, i) => (
                <div
                  className="max-w-xl flex flex-col gap-2 rounded-lg bg-[#fdfcf6] shadow-lg p-4"
                  key={i}
                >
                  <div className="flex gap-2 items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Цаг захиалсан эмч: {el.idOne}
                    </h3>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-700">Өдөр:</span>
                      <span className="text-gray-600">{el.date}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-700">Цаг:</span>
                      <span className="text-gray-600">{el.time}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-700">
                        Захиалга хийгдсэн өдөр:
                      </span>
                      <span className="text-gray-600">
                        {new Date(el.createdAt).toISOString().split("T")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Detailbyid;
