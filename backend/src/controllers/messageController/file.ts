import multer, { StorageEngine } from "multer";
import path from "path";
import { Request, Response } from "express";
import express from "express";

// Setup multer to handle multiple file uploads
const storage: StorageEngine = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, destination: string) => void
  ) => {
    const destinationPath = "uploads/"; // Directory to save uploaded files
    callback(null, destinationPath); // Call callback with no error and the destination path
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ) => {
    const filename = Date.now() + path.extname(file.originalname); // Ensure unique filenames
    callback(null, filename); // Call callback with no error and the unique filename
  },
});

// Initialize multer with the storage options
const upload = multer({ storage });

// Serve static files from the "uploads" directory
const app = express();
app.use("/uploads", express.static("uploads"));

// Controller function to handle file upload
const uploadFile = (req: Request, res: Response): void => {
  if (!req.file) {
    console.error("No file uploaded.");
    res.status(400).send("No file uploaded.");
    return;
  }

  const fileUrl = `https://if-project8.onrender.com/uploads/${req.file.filename}`;

  res.json({ url: fileUrl });
};

// Endpoint for file upload (handle multiple files)
app.post("/upload", upload.array("file"), uploadFile);

export { upload, uploadFile };
