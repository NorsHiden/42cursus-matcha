"use client";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";

import React, { useState } from "react";
import { Check } from "lucide-react";
import Details from "./components/Details";
import Verification from "./components/Verification";
import Avatars from "./components/Avatars";
import Interests from "./components/Interests";
import { useUserProfileStore } from "@/store/completeProfileStore";

const steps = ["Verification", "Details", "Avatars", "Interests", "Thanks"];

export default function ProfileCompletionForm() {
  // const [currentStep, setCurrentStep] = useState(1);
  const {
    currentStep,
    setCurrentStep,
    firstName,
    lastName,
    gender,
    showMe,
    phoneNumber,
    address,
    birthday,
    bio,
    images,
    interests,
    nextStep,
  } = useUserProfileStore();
  const _nextStep = () => {
    nextStep(steps.length);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepper = () => (
    <div className="flex items-center justify-between w-full ">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white
                ${
                  index < currentStep
                    ? "bg-secondary"
                    : index === currentStep - 1
                    ? "bg-secondary"
                    : "bg-gray-700"
                }`}
            >
              {index < currentStep - 1 ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={`mt-2 text-xs text-center ${
                currentStep - 1 === index ? "text-secondary" : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-0.5 w-full ${
                index < currentStep - 1 ? "bg-secondary" : "bg-gray-700"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Verification />
        );
      case 2:
        return <Details />;
      case 3:
        return (
          <Avatars />
        );
      case 4:
        return (
          <Interests />
        );
      case 5:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Your profile has been successfully completed.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    console.log("submit");
    console.log(
      "firstName = ", firstName,
      "lastName = ", lastName,
      "gender = ", gender,
      "showMe = ", showMe,
      "phoneNumber = ", phoneNumber,
      "address = ", address,
      "birthday = ", birthday,
      "bio = ", bio,
      "images = ", images,
      "interests = ", interests
    );
  }

  return (
    // <div className="w-full max-w-3xl mx-auto p-6 bg-gray-900 text-gray-200 rounded-lg">
    <div
      className={`flex flex-col items-center place-content-center h-screen overflow-auto space-x-5 mr-5 relative `}
    >
      <div className=" h-full w-full flex flex-col justify-between py-8 px-36 bg-primary rounded-3xl max-w-[1152px] max-h-[700px]">
        <form className=" h-full flex flex-col justify-between space-y-6 px-14">
          {renderStepper()}
          
          {renderStepContent()}

          <div className="flex w-full space-x-3 place-content-end mt-8">
            {currentStep > 1 && (
              <Button
                onClick={prevStep}
                variant="bordered"
                color="secondary"
                className=""
              >
                Back
              </Button>
            )}
            {currentStep == 1 && (
              <Button
                // onClick={prevStep}
                variant="bordered"
                color="secondary"
                className=""
              >
                Cancel
              </Button>
            )}
            {currentStep < steps.length ? (
              <Button
                onClick={_nextStep}
                variant="solid"
                color="secondary"
                // className="bg-red-500 text-white hover:bg-red-600 ml-auto"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                variant="solid"
                color="success"
                className=" text-white"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
