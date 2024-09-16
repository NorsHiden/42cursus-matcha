"use client";
import { Button, Divider, Input } from "@nextui-org/react";
import { Eye, EyeOff, GoalIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const SignUpForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();
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
    router.push("/complete-profile");
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)} className=" w-full">
      <div className=" w-full  p-24 ">
        <h1 className=" text-3xl font-semibold">Create Account</h1>
        <div className=" mt-6 flex items-center space-x-7">
          <Button
            variant="solid"
            size="lg"
            color="primary"
            className=" border-b-3 border-secondary w-full"
          >
            <img width={24} height={24} src="/googleIcon.svg" alt="" />
            <p className=" text-[#A1A1A1] font-semibold">
              Continue with Google
            </p>
          </Button>
          <Button
            variant="solid"
            size="lg"
            color="primary"
            className=" border-b-3 border-secondary w-full"
          >
            <img width={24} height={24} src="/discordIcon.svg" alt="" />
            <p className=" text-[#A1A1A1] font-semibold">
              Continue with Discord
            </p>
          </Button>
        </div>
        <div className=" text-[#A1A1A1] font-medium mt-10 w-full text-center">
          {" "}
          <span>-</span> OR <span>-</span>
        </div>
        <div className=" mt-10 w-full space-y-10">
          <Input
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            })}
            isInvalid={errors.username ? true : false}
            errorMessage={errors.username?.message?.toString()}
            variant="underlined"
            color="secondary"
            type="text"
            placeholder="Username"
          />
          <Input
            {...register("email", { required: "Email is required" })}
            isInvalid={errors.email ? true : false}
            errorMessage={errors.email?.message?.toString()}
            variant="underlined"
            color="secondary"
            type="email"
            placeholder="Email"
          />
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            isInvalid={errors.password ? true : false}
            errorMessage={errors.password?.message?.toString()}
            variant="underlined"
            color="secondary"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <Eye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            placeholder="Password"
          />
        </div>
        <Button
          disabled={isSubmitting}
          variant="solid"
          size="lg"
          type="submit"
          color="secondary"
          className=" mt-12 font-semibold w-full"
        >
          Create Account
        </Button>
        <div className=" text-[#A1A1A1] text-sm  mt-10 w-full">
          Already have an account?{" "}
          <Link href={"/log-in"} className=" text-secondary">
            Log in
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
