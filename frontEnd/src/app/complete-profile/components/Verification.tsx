import { Button, Input } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import React from "react";

const Verification = () => {
  return (
    <>
      <div className=" w-full h-full flex flex-col items-center place-content-center ">
        <img width={90} height={90} src="/emailIcon.svg" alt="" />
        <p className=" text-4xl font-semibold mt-9">Check your Email </p>
        <p className=" font-medium text-xl mt-6">
          We sent a password reset link to
        </p>
        <p className=" mt-9 font-bold text-lg">Fouad@gmail.com</p>
        <p className=" mt-12  text-xl">
          Didn’t receive the email?{" "}
          <Button className=" font-medium text-secondary w-auto px-1" color="secondary" isIconOnly variant="light">
            Click to resend
          </Button>
        </p>
        <Button variant="light" className=" text-gray-500 hover:text-white bg-transparent flex items-center space-x-3 mt-9">
          <ArrowLeft className=" " />
          <p className=" ">Back to log in</p>
        </Button>
      </div>
    </>
  );
};

export default Verification;
