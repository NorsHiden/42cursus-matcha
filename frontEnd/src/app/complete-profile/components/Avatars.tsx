import { Button, Input } from "@nextui-org/react";
import { PlusCircle } from "lucide-react";
import React, { useEffect } from "react";
import ImageShowcase from "./utils/ImageShowcase";
import { useUserProfileStore } from "@/store/completeProfileStore";

const Avatars = () => {
  const {
    firstName,
    lastName,
    gender,
    showMe,
    phoneNumber,
    address,
    birthday,
    bio,
    images,
  } = useUserProfileStore();
  useEffect(() => {
    console.log(firstName, lastName, gender, showMe, phoneNumber, address, birthday, bio, images);
  }, []);
  return (
    <ImageShowcase />
  );
};

export default Avatars;
