import { Input, Textarea } from "@nextui-org/react";
import React from "react";

const Interests = () => {
  return (
    <>
      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-1">
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
};

export default Interests;
