"use client";

import { useUser } from "@clerk/clerk-react";
import Homepage from "@/components/homePage/Home";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Page = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal state
  const router = useRouter();

  useEffect(() => {
    // Check if modal was already shown
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
      setIsModalOpen(true);
      localStorage.setItem("modalShown", "true"); // Save flag
    }
  }, []);

  useEffect(() => {
    const getUserDetails = async () => {
      setIsLoading(true);
      try {
        const [detailResponse, theraDetailResponse] = await Promise.all([
          axios.get(`https://if-project8.onrender.com/user/detail/${user?.id}`),
          axios.get(
            `https://if-project8.onrender.com/user/theradetail/${user?.id}`
          ),
        ]);

        const detailData = detailResponse.data;
        const theraDetailData = theraDetailResponse.data;

        if (!detailData.form && !theraDetailData.form) {
          // router.push("/userDetail");
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data", error);
        setIsLoading(false);
      }
    };
    if (user) {
      getUserDetails();
    }
  }, [user]);

  useEffect(() => {
    const addUserToDatabase = async () => {
      try {
        const { data } = await axios.post(
          "https://if-project8.onrender.com/user/signup",
          {
            username: user?.username,
            email: user?.primaryEmailAddress?.emailAddress,
            authId: user?.id,
          }
        );

        if (data != "Profile updated successfully") {
          toast.success("Амжилттай нэвтэрлээ!");
        }

        await axios.post("https://if-project8.onrender.com/user/signup", {
          username: user?.username,
          email: user?.primaryEmailAddress?.emailAddress,
          authId: user?.id,
          image: user?.imageUrl,
        });
      } catch (error) {
        console.log("Error adding user:", error);
      }
    };

    if (user) {
      addUserToDatabase();
    }
  }, [user]);

  // Close modal on "Esc" key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#325343] text-white">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex items-center w-full">
      <Homepage />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)} // Close when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96 text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-lg font-semibold mb-4">
              Website болон функц талаар танилцуулга Canva
            </h2>
            <a
              href="https://www.canva.com/design/DAGe8NpNqHc/fornoa5zOCQAbOGblEOAUQ/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Go to Canva
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
