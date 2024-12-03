"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./homePage/Header";

// Define the types for the data
interface TheraDetail {
  authId: string; // Define authId as a string
  expectations: string; // Adjust other fields as needed
}

interface DetailData {
  someProperty: string; // Adjust the type according to the actual data structure
}

const Detailbyid = () => {
  const { user } = useUser();

  const [isLoading, setIsLoading] = useState(true);
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

        const detailData = detailResponse.data;
        const theraDetailData = theraDetailResponse.data;

        console.log("Detail Data:", detailData);
        console.log("Thera Detail Data:", theraDetailData);

        if (!detailData || !theraDetailData) {
          router.push("/detailById");
        }

        setDetailData(detailData);
        setTheraDetailData(theraDetailData);
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
    <div>
      <Header />
      {theraDetailData ? (
        <div className="absolute top-[80px]">
          <h3>Detail by id</h3>
          <div>
            <div>
              <strong>authId:</strong> {theraDetailData.authId}
            </div>
            <div>
              <strong>Expectations:</strong> {theraDetailData.expectations}
            </div>
          </div>
        </div>
      ) : (
        <div>No thera details available.</div>
      )}
      {detailData && (
        <div>
          <div>{detailData.someProperty}</div>
        </div>
      )}
    </div>
  );
};

export default Detailbyid;
