import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import React from "react";

const Details = () => {
  return (
    <div className=" flex flex-col space-y-7">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            required
            label="First Name"
            color="secondary"
            id="firstName"
            variant="underlined"
            className="w-full bg-transparent border-b-2 border-gray-900 focus:border-red-500 text-gray-200"
          />
        </div>
        <div>
          <Input
            required
            label="Last Name"
            color="secondary"
            variant="underlined"
            id="lastName"
            className="w-full bg-transparent border-b -2 border-gray-900 focus:border-red-500 text-gray-200"
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
            required
            label="Phone Number"
            type="number"
            color="secondary"
            id="firstName"
            variant="underlined"
            className="w-full bg-transparent border-b-2 border-gray-900 focus:border-red-500 text-gray-200"
          />
        </div>
        <div>
          <Input
            label="Address"
            color="secondary"
            variant="underlined"
            id="lastName"
            className="w-full bg-transparent border-b -2 border-gray-900 focus:border-red-500 text-gray-200"
          />
        </div>
      </div>
      <div>
        <Input
          label="Boi"
          color="secondary"
          variant="underlined"
          id="lastName"
          className="w-full bg-transparent border-b -2 border-gray-900 focus:border-red-500 text-gray-200"
        />
      </div>
    </div>
  );
};

export default Details;
