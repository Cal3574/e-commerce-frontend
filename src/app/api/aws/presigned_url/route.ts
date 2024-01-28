import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest } from "next/server";

const client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const file = searchParams.get("file");

  if (!file) {
    return Response.json(
      { error: "File query parameter is required" },
      { status: 400 }
    );
  }

  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: file,
  });

  const url = await getSignedUrl(client, command, { expiresIn: 100 });

  return Response.json({ presignedUrl: url });
}
