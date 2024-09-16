"use client";
import SignUpForm from "@/components/SignUpForm";
import { Button, Divider, Input } from "@nextui-org/react";
import { Eye, EyeOff, GoalIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onsubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <div
      className={`flex items-center place-content-center h-screen overflow-auto space-x-5 mr-5 relative `}
    >
      <div className=" h-full w-full bg-white max-w-[1152px] max-h-[700px]">
        <div className=" grid md:grid-cols-3 from-65% bg-gradient-to-bl from-secondary to-white h-auto w-full">
          <div className=" w-full h-full flex flex-col justify-between">
            <div className=" px-6 py-5 ">
              <h1 className=" font-bold h-24 text-3xl ">LOGO</h1>
              <p className=" mt-12 text-4xl">
                Bl Blabla bl{" "}
                <span className=" font-bold">Blablacbl Blablaa Bla</span>
              </p>
              <p className=" mt-6 ">
                Blabla bldla bnlalbla bla balbalblbalb b blalba lbalb abllblbal
                bl abl alb la blbalb.
              </p>
            </div>
            <img src="/Abstraction.png" className=" w-full self-end" alt="" />
          </div>
          <div className=" rounded-l-[30px] bg-primary w-full h-full col-span-2 flex ">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
