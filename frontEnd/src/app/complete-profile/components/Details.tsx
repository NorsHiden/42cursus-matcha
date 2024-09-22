import { useUserProfileStore } from "@/store/completeProfileStore";
import {
  DatePicker,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Details = () => {
  const {
    setFirstName,
    setLastName,
    setGender,
    setShowMe,
    setPhoneNumber,
    setAddress,
    setBirthday,
    setBio,
    firstName,
    lastName,
    gender,
    showMe,
    phoneNumber,
    address,
    bio,
    birthday,
    firstNameError,
    lastNameError,
    genderError,
    showMeError,
  } = useUserProfileStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const [_firstName, _setFirstName] = useState("");
  const [_lastName, _setLastName] = useState("");
  const [_gender, _setGender] = useState("");
  const [_showMe, _setShowMe] = useState("");
  const [_firstNameError, _setFirstNameError] = useState("");
  const [_lastNameError, _setLastNameError] = useState("");
  const [_genderError, _setGenderError] = useState("");
  const [_showMeError, _setShowMeError] = useState("");

  // const handleNext = () => {
  //   const values = getValues();
  //   setFirstName(values.firstName);
  //   setLastName(values.lastName);
  //   setGender(values.gender);
  //   setShowMe(values.showMe);
  // }

  return (
    <div className=" flex flex-col space-y-7">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            type="text"
            isInvalid={firstName ? false : true}
            errorMessage={firstName ? "" : firstNameError}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
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
            isInvalid={lastName ? false : true}
            errorMessage={lastName ? "" : lastNameError}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
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
            isInvalid={gender ? false : true}
            errorMessage={gender ? "" : genderError}
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            variant="underlined"
            color="secondary"
            label="Gender"
            id="gender"
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
            isInvalid={showMe ? false : true}
            errorMessage={showMe ? "" : showMeError}
            onChange={(e) => setShowMe(e.target.value)}
            value={showMe}
            variant="underlined"
            color="secondary"
            label="Show me"
            id="showMe"
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
            onChange={(e) => setPhoneNumber(e.target.value as any)}
            value={phoneNumber ? (phoneNumber as any) : ""}
            label="Phone Number"
            type="number"
            color="secondary"
            id="phoneNumber"
            variant="underlined"
            className="w-full bg-transparent border-b-2 border-gray-900 focus:border-red-500 text-gray-200"
          />
        </div>
        <div>
          <DatePicker
            onChange={(date) => setBirthday(new Date(date.toString()))}
            // value={birthday as Date}
            label="Birthday"
            color="secondary"
            variant="underlined"
            id="birthday"
            classNames={{
              calendar: "bg-primary",
              calendarContent: "bg-primary",
            }}
            className="w-full bg-transparent border-b -2 border-gray-900 focus:border-red-500 text-gray-200"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            label="Bio"
            color="secondary"
            variant="underlined"
            id="bio"
            className="w-full bg-transparent border-b -2 border-gray-900 focus:border-red-500 text-gray-200"
          />
        </div>
        <div>
          <Input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            label="Address"
            color="secondary"
            variant="underlined"
            id="address"
            className="w-full bg-transparent border-b -2  border-gray-900 focus:border-red-500 text-gray-200"
          />
        </div>
      </div>
      {/* <div>
       
      </div> */}
    </div>
  );
};

export default Details;
