import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config(); // This loads the variables from .env into process.env

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'resumes',
      resource_type: 'auto'
    });
    return result.secure_url;
  } catch (error) {
    console.error('🔥 Cloudinary Upload Error:', {
      name: error.name,
      message: error.message,
      response: error.response?.data,
      config: error.config,
      stack: error.stack
    });
    throw error;
  }
};
