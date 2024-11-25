import axios from "axios";

const getPresignedURL = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/cloudflare");
    return data as { uploadUrl: string; accessUrls: string };
  } catch (error) {
    console.log("Error fetching presigned URL:", error);
    return { uploadUrl: "", accessUrls: "" };
  }
};

export const uploadImage = async ({ image }: { image: File | undefined }) => {
  if (image) {
    const { uploadUrl, accessUrls } = await getPresignedURL();
    if (uploadUrl) {
      await axios.put(uploadUrl, image, {
        headers: { "Content-Type": image.type },
      });
      return accessUrls;
    }
  }
  return "";
};
