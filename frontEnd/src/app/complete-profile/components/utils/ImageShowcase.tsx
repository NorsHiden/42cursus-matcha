"use client";

import { useRef, useState } from "react";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  PlusCircle,
} from "lucide-react";
import { Button, Input } from "@nextui-org/react";
import { useUserProfileStore } from "@/store/completeProfileStore";

export default function ImageShowcase() {
  const { images, setImages, imagePreviews, setImagePreviews, imageError } = useUserProfileStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const changeImage = (direction: "prev" | "next") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? imagePreviews.length - 1 : prevIndex - 1;
      } else {
        return (prevIndex + 1) % imagePreviews.length;
      }
    });
  };

  const getImageIndex = (offset: number) => {
    return (
      (currentIndex + offset + imagePreviews.length) % imagePreviews.length
    );
  };

  const renderImage = (offset: number, className: string) => (
    <div className={className}>
      <img
        src={imagePreviews[getImageIndex(offset)]}
        alt={
          offset === 0
            ? "Current image"
            : `${offset < 0 ? "Previous" : "Next"} image`
        }
        className="w-full h-full object-cover"
      />
    </div>
  );

  const renderButton = (direction: "prev" | "next") => (
    <Button
      variant="light"
      isIconOnly
      color="secondary"
      onClick={() => changeImage(direction)}
      className={`absolute z-30 top-1/2   ${
        direction === "prev" ? "-left-12" : "-right-12"
      }`}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} image`}
    >
      {direction === "prev" ? (
        <ChevronLeftCircle className="w-8 h-8" />
      ) : (
        <ChevronRightCircle className="w-8 h-8" />
      )}
    </Button>
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImagePreviews = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...files]);
    setImagePreviews([...imagePreviews, ...newImagePreviews]);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...images];
    const updatedPreviews = [...imagePreviews];

    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setImages(updatedImages);
    setImagePreviews(updatedPreviews);
  };

  return (
    <div className=" w-full h-[350px] gap-16 grid grid-cols-2">
      <label
        htmlFor="image-upload"
        className=" w-full h-full space-y-3 flex pr-4 flex-col items-start "
      >
        <p className=" text-[#C4C4C4]">Upload your Photo Profile</p>
        <div className=" cursor-pointer text-[#C4C4C4] h-full w-full bg-[#13101F] rounded-xl flex space-x-1 items-center place-content-center ">
          <PlusCircle />
          <p>Upload image</p>
        </div>
      </label>
      <Input
        ref={fileInputRef}
        type="file"
        id="image-upload"
        className="hidden"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <div className=" w-full h-full flex flex-col items-start ">
        <div className=" flex items-center place-content-start space-x-2">
          <p className=" text-2xl font-semibold text-secondary">
            {imagePreviews.length}/5
          </p>
          <p className=" text-[#C4C4C4]">Uploaded Images</p>
        </div>
        {imageError && (
          <p className=" text-red-500 text-sm">{imageError}</p>
        )}
        <div className=" h-full w-full flex place-content-end items-center">
          {imagePreviews.length > 0 ? (
            <div className="relative w-full flex items-end h-full max-w-3xl mx-auto">
              {imagePreviews.length > 0 &&
                renderImage(
                  0,
                  "relative aspect-[4/3] z-20 overflow-hidden  h-[90%] rounded-3xl border-4 shadow-secondary shadow-xl border-secondary"
                )}
              {imagePreviews.length > 1 &&
                renderImage(
                  -1,
                  "absolute left-[-50px] top-[55%] transform -translate-y-1/2 w-[80%] h-[75%] aspect-[4/3] overflow-hidden rounded-l-3xl opacity-50"
                )}
              {imagePreviews.length > 1 &&
                renderImage(
                  1,
                  "absolute right-[-50px] top-[55%] transform -translate-y-1/2 w-[80%] h-[74%] aspect-[4/3] overflow-hidden rounded-r-3xl opacity-50"
                )}
              {renderButton("prev")}
              {renderButton("next")}
            </div>
          ) : (
            <div className=" h-full w-full flex place-content-center items-center">
              <p className=" text-[#C4C4C4]">No images uploaded</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
