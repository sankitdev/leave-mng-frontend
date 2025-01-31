import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (event) => {
      const fileStr = event.target?.result;
      try {
        const uploadResponse = await cloudinary.uploader.upload(
          fileStr as string,
          {
            folder: "profile_images",
          }
        );
        resolve(uploadResponse.secure_url);
      } catch (error) {
        reject(error);
      }
    };
  });
};
