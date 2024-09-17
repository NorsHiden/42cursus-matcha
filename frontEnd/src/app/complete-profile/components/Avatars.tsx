import { Button, Input } from "@nextui-org/react";
import { PlusCircle } from "lucide-react";
import React from "react";
import ImageShowcase from "./utils/ImageShowcase";



const Avatars = () => {
  return (
    <div className=" w-full h-[350px] gap-12 grid grid-cols-2">
      <div className=" w-full h-full space-y-3 flex pr-4 flex-col items-start ">
        <p className=" text-[#C4C4C4]">Upload your Photo Profile</p>
        <Button className=" text-[#C4C4C4] h-full w-full bg-[#13101F] rounded-xl flex space-x-1 items-center place-content-center ">
          <PlusCircle/>
          <p>Upload image</p>
        </Button>
      </div>
      <div className=" w-full h-full flex flex-col items-start ">
        {/* <div className=" flex items-center space-x-2">
          <p className=" text-2xl font-semibold text-secondary">3/5</p>
          <p className=" text-[#C4C4C4]">Uploaded Images</p>
        </div>
        <div className=" h-full w-full flex place-content-end items-center"> */}
          <ImageShowcase />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Avatars;
