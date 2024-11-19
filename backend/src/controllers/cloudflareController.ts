import { Response, Request } from "express";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 } from "uuid";
import dotenv from "dotenv";
dotenv.config();

const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const S3 = new S3Client({
  endpoint:
    "https://53654f41715f2aa8d1f428d515c4c066.r2.cloudflarestorage.com/project8",
  credentials: {
    accessKeyId: accessKeyId || "",
    secretAccessKey: secretAccessKey || "",
  },
  region: "auto",
});

export const getPresignedUrl = async (req: Request, res: Response) => {
  const id = v4();
  const url = await getSignedUrl(
    S3,
    new PutObjectCommand({ Bucket: "project8", Key: id }),
    { expiresIn: 60 * 60 }
  );

  res.status(200).send({
    uploadUrl: url,
    accessUrls:
      "https://pub-c02123f313fc49baa2e4b669ab0d8f47.r2.dev/project8%2F" + id,
  });
};
