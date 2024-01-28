"use client";
import { FC, useState } from "react";
import "react-image-upload/dist/index.css";
import ImageUploading from "react-images-uploading";
import { IoMdImages } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageUploaderProps {}

const ImageUploader: FC<ImageUploaderProps> = ({}) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    setImages(imageList);
  };
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <>
          <div
            className={cn(
              "upload__image-wrapper bg-gray-100 rounded-md p-4 w-full text-center flex gap-4 justify-center items-center",
              {
                "opacity-25 bg-gray-400": isDragging,
              }
            )}
          >
            <button
              onClick={onImageUpload}
              className={cn("w-full h-full flex items-center justify-center ")}
              {...dragProps}
            >
              <IoMdImages size={40} />
            </button>
          </div>
          <div className="flex gap-2">
            {imageList.map((image, index) => (
              <div key={index} className="image-item ">
                <Image
                  src={image["data_url"]}
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="image-item__btn-wrapper">
                  {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                  <button
                    onClick={() => onImageRemove(index)}
                    className="mt-4 w-full mx-auto flex items-center justify-center"
                  >
                    <ImCross color="red" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
