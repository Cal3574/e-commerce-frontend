"use client";
import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  file: FileList;
};
interface FileUploaderProps {}

const FileUploader: FC<FileUploaderProps> = ({}) => {
  const [fileUrl, setFileUrl] = useState("");
  const [status, setStatus] = useState("error");
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!data.file[0]) {
      setStatus("error");
      return;
    }

    setStatus("error");

    const filename = data.file[0].name;

    console.log(data.file[0]);

    const res = await fetch(`/api/aws/presigned_url?file=${filename}`);

    const { presignedUrl } = (await res.json()) as { presignedUrl: string };

    console.log(data.file[0]);

    const fileUpload = await fetch(presignedUrl, {
      method: "PUT",
      body: data.file[0],
      headers: {
        "Content-Type": `${data.file[0].type}`, // or the appropriate type for your file
      },
    });

    console.log(fileUpload);

    if (!fileUpload.ok) {
      setStatus("error");
      return;
    }

    console.log("file uploaded");
    setFileUrl(`https://e-commerce-bucket-cal.s3.amazonaws.com/${filename}`);
    setStatus("error");
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm m-auto py-10 mt-10 px-10 border rounded-lg drop-shadow-md bg-white text-gray-600 flex flex-col gap-6"
      >
        <h1 className="text-2xl">Next.js File Upload</h1>
        <p className="text-md">
          STATUS: <span className="font-bold">{status}</span>
        </p>
        <div className="">
          <input
            type="file"
            {...register("file")}
            className="w-full text-gray-600 rounded border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 border py-2 px-2"
          />
        </div>
        <div className="">
          <input
            type="submit"
            value="Upload"
            className={`cursor-pointer px-2.5 py-2 font-medium text-gray-900 bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:text-blue-600  disabled:text-gray-300`}
          />
        </div>

        {fileUrl.length ? (
          <div className="rounded-md overflow-hidden">
            <Image
              src={fileUrl}
              width={350}
              height={350}
              objectFit="cover"
              alt="Uploaded image"
            />
          </div>
        ) : null}
      </form>
    </section>
  );
};

export default FileUploader;
