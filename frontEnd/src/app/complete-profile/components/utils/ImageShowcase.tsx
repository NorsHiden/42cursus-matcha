// "use client";

// import { useRef, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronLeftCircle,
//   ChevronLeftCircleIcon,
//   ChevronRight,
//   ChevronRightCircle,
//   PlusCircle,
// } from "lucide-react";
// import { Button, Input } from "@nextui-org/react";

// interface Image {
//   src: string;
//   alt: string;
// }

// const images: Image[] = [
//   {
//     src: "https://images.unsplash.com/photo-1706885093476-b1e54f3b7496?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Woman with brown headscarf",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Person in white t-shirt",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Another showcase image",
//   },
// ];

// export default function ImageShowcase() {
//   const [imageFiles, setImageFiles] = useState<File[]>([]);
//   const [imagePreviews, setImagePreviews] = useState<string[]>([]);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const changeImage = (direction: "prev" | "next") => {
//     setCurrentIndex((prevIndex) => {
//       if (direction === "prev") {
//         return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
//       } else {
//         return (prevIndex + 1) % images.length;
//       }
//     });
//   };

//   const getImageIndex = (offset: number) => {
//     return (currentIndex + offset + images.length) % images.length;
//   };

//   const renderImage = (offset: number, className: string) => (
//     <div className={className}>
//       <img
//         src={images[getImageIndex(offset)].src}
//         alt={
//           offset === 0
//             ? images[currentIndex].alt
//             : `${offset < 0 ? "Previous" : "Next"} image`
//         }
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );

//   const renderButton = (direction: "prev" | "next") => (
//     <Button
//       variant="light"
//       isIconOnly
//       color="secondary"
//       onClick={() => changeImage(direction)}
//       className={`absolute z-30 top-1/2   ${
//         direction === "prev" ? "-left-12" : "-right-12"
//       }`}
//       aria-label={`${direction === "prev" ? "Previous" : "Next"} image`}
//     >
//       {direction === "prev" ? (
//         <ChevronLeftCircle className="w-8 h-8" />
//       ) : (
//         <ChevronRightCircle className="w-8 h-8" />
//       )}
//     </Button>
//   );


//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     const newImagePreviews = files.map((file) => URL.createObjectURL(file));
//     setImageFiles([...imageFiles, ...files]);
//     setImagePreviews([...imagePreviews, ...newImagePreviews]);
//   };

//   const handleRemoveImage = (index: number) => {
//     const updatedImages = [...imageFiles];
//     const updatedPreviews = [...imagePreviews];

//     updatedImages.splice(index, 1);
//     updatedPreviews.splice(index, 1);

//     setImageFiles(updatedImages);
//     setImagePreviews(updatedPreviews);
//   };

//   return (
//     <div className=" w-full h-[350px] gap-16 grid grid-cols-2">
//       <label htmlFor="image-upload" className=" w-full h-full space-y-3 flex pr-4 flex-col items-start ">
//         <p className=" text-[#C4C4C4]">Upload your Photo Profile</p>
//         <div className=" cursor-pointer text-[#C4C4C4] h-full w-full bg-[#13101F] rounded-xl flex space-x-1 items-center place-content-center ">
//           <PlusCircle />
//           <p>Upload image</p>
//         </div>
//       </label>
//       <Input
//         ref={fileInputRef}
//         type="file"
//         id="image-upload"
//         className="hidden"
//         accept="image/*"
//         multiple
//         onChange={handleFileChange}
//       />
//       <div className=" w-full h-full flex flex-col items-start ">
//         <div className=" flex items-center place-content-start space-x-2">
//           <p className=" text-2xl font-semibold text-secondary">3/5</p>
//           <p className=" text-[#C4C4C4]">Uploaded Images</p>
//         </div>
//         <div className=" h-full w-full flex place-content-end items-center">
//           {/* <ImageShowcase /> */}
//           <div className="relative    w-full flex items-end h-full max-w-3xl mx-auto">
//             {renderImage(
//               0,
//               "relative aspect-[4/3] z-20 overflow-hidden  h-[90%] rounded-3xl border-4 shadow-secondary shadow-xl border-secondary"
//             )}
//             {renderImage(
//               -1,
//               "absolute left-[-50px] top-[55%] transform -translate-y-1/2 w-[80%] h-[75%] aspect-[4/3] overflow-hidden rounded-l-3xl opacity-50"
//             )}
//             {renderImage(
//               1,
//               "absolute right-[-50px] top-[55%] transform -translate-y-1/2 w-[80%] h-[74%] aspect-[4/3] overflow-hidden rounded-r-3xl opacity-50"
//             )}
//             {renderButton("prev")}
//             {renderButton("next")}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useRef, useState } from "react";
import { ChevronLeftCircle, ChevronRightCircle, PlusCircle } from "lucide-react";
import { Button, Input } from "@nextui-org/react";

export default function ImageShowcase() {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
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
    return (currentIndex + offset + imagePreviews.length) % imagePreviews.length;
  };

  const renderImage = (offset: number, className: string) => (
    <div className={className}>
      <img
        src={imagePreviews[getImageIndex(offset)]}
        alt={offset === 0 ? "Current image" : `${offset < 0 ? "Previous" : "Next"} image`}
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
    setImageFiles([...imageFiles, ...files]);
    setImagePreviews([...imagePreviews, ...newImagePreviews]);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...imageFiles];
    const updatedPreviews = [...imagePreviews];

    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setImageFiles(updatedImages);
    setImagePreviews(updatedPreviews);
  };

  return (
    <div className=" w-full h-[350px] gap-16 grid grid-cols-2">
      <label htmlFor="image-upload" className=" w-full h-full space-y-3 flex pr-4 flex-col items-start ">
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
        <div className=" h-full w-full flex place-content-end items-center">
          <div className="relative w-full flex items-end h-full max-w-3xl mx-auto">
            {imagePreviews.length > 0 && renderImage(
              0,
              "relative aspect-[4/3] z-20 overflow-hidden  h-[90%] rounded-3xl border-4 shadow-secondary shadow-xl border-secondary"
            )}
            {imagePreviews.length > 1 && renderImage(
              -1,
              "absolute left-[-50px] top-[55%] transform -translate-y-1/2 w-[80%] h-[75%] aspect-[4/3] overflow-hidden rounded-l-3xl opacity-50"
            )}
            {imagePreviews.length > 1 && renderImage(
              1,
              "absolute right-[-50px] top-[55%] transform -translate-y-1/2 w-[80%] h-[74%] aspect-[4/3] overflow-hidden rounded-r-3xl opacity-50"
            )}
            {renderButton("prev")}
            {renderButton("next")}
          </div>
        </div>
      </div>
    </div>
  );
}
