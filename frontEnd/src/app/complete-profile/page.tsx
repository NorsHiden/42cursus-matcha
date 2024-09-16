// import React from "react";

// const page = () => {
//   return (
//     <div
//       className={`flex items-center place-content-center h-screen overflow-auto space-x-5 mr-5 relative `}
//     >
//       <div className=" h-full w-full bg-primary rounded-3xl max-w-[1152px] max-h-[700px]">
//       </div>
//     </div>
//   );
// };

// export default page;

// import Stepper from './stepper'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"

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

const steps = ["Details", "Verification", "Payment", "Review", "Thank You"];

export default function ProfileCompletionForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepper = () => (
    <div className="flex items-center justify-between w-full mb-8">
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
                currentStep - 1 === index ? "text-secondary" : "text-gray-700"
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
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  label="First Name"
                  color="secondary"
                  id="firstName"
                  variant="underlined"
                  className="w-full bg-transparent border-b border-gray-700 focus:border-red-500 text-gray-200"
                />
              </div>
              <div>
                <Input
                  label="Last Name"
                  color="secondary"
                  variant="underlined"
                  id="lastName"
                  className="w-full bg-transparent border-b  border-gray-700 focus:border-red-500 text-gray-200"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Select
                  variant="underlined"
                  color="secondary"
                  label="Gender"
                  className=" "
                  classNames={{
                    popoverContent: "bg-primary",
                  }}
                >
                  <SelectItem key={"male"} value="Male" color="secondary">
                    Male
                  </SelectItem>
                  <SelectItem key={"female"} value="Female" color="secondary">
                    Female
                  </SelectItem>
                </Select>
              </div>
              <div>
                <Select
                  variant="underlined"
                  color="secondary"
                  label="Show me"
                  classNames={{
                    popoverContent: "bg-primary",
                  }}
                >
                  <SelectItem key={"men"} value="men" color="secondary">
                    Men
                  </SelectItem>
                  <SelectItem key={"women"} value="women" color="secondary">
                    Women
                  </SelectItem>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  label="Phone Number"
                  type="number"
                  color="secondary"
                  id="firstName"
                  variant="underlined"
                  className="w-full bg-transparent border-b border-gray-700 focus:border-red-500 text-gray-200"
                />
              </div>
              <div>
                <Input
                  label="Address"
                  color="secondary"
                  variant="underlined"
                  id="lastName"
                  className="w-full bg-transparent border-b  border-gray-700 focus:border-red-500 text-gray-200"
                />
              </div>
            </div>
            <div>
              <Textarea
                slot="1"
                label="Boi"
                color="secondary"
                variant="underlined"
                id="lastName"
                className="w-full bg-transparent border-b  border-gray-700 focus:border-red-500 text-gray-200"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                className="w-full bg-transparent border-b border-gray-700 focus:border-red-500 text-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium mb-1"
              >
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                className="w-full bg-transparent border-b border-gray-700 focus:border-red-500 text-gray-200"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium mb-1"
              >
                Card Number
              </label>
              <Input
                id="cardNumber"
                className="w-full bg-transparent border-b border-gray-700 focus:border-red-500 text-gray-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium mb-1"
                >
                  Expiry Date
                </label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  className="w-full bg-transparent border-b border-gray-700 focus:border-red-500 text-gray-200"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                  CVV
                </label>
                <Input
                  id="cvv"
                  className="w-full bg-transparent border-b border-gray-700 focus:border-red-500 text-gray-200"
                />
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-1"
              >
                Address
              </label>
              <Input
                id="address"
                className="w-full bg-transparent border-b border-gray-700 focus:border-red-500 text-gray-200"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium mb-1">
                Bio
              </label>
              <Textarea
                id="bio"
                className="w-full bg-transparent border border-gray-700 focus:border-red-500 text-gray-200"
              />
            </div>
          </>
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

  return (
    // <div className="w-full max-w-3xl mx-auto p-6 bg-gray-900 text-gray-200 rounded-lg">
    <div
      className={`flex flex-col items-center place-content-center h-screen overflow-auto space-x-5 mr-5 relative `}
    >
      <div className=" h-full w-full flex flex-col justify-between py-8 px-36 bg-primary rounded-3xl max-w-[1152px] max-h-[700px]">
        {renderStepper()}

        <form className=" space-y-6 px-16">{renderStepContent()}</form>
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
          {currentStep < steps.length ? (
            <Button
              onClick={nextStep}
              variant="solid"
              color="secondary"
              // className="bg-red-500 text-white hover:bg-red-600 ml-auto"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={() => alert("Form submitted!")}
              variant="solid"
              color="success"
              className=" text-white"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
