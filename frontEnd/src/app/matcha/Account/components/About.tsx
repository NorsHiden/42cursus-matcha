import { Cake, Heart, MapPin, Phone, User2, UserIcon } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className=" row-span-2 w-full bg-primary drop-shadow-xl rounded-xl px-5 py-3 space-y-5">
      <h1 className=" text-secondary text-xl font-semibold">About</h1>
      <div className=" w-full flex flex-col space-y-10">
        <div className=" flex items-center space-x-3">
          <UserIcon fill="white" />
          <p className=" tracking-wider text-lg">Male</p>
        </div>
        <div className=" flex items-center space-x-3">
          <Heart fill="white" />
          <p className=" tracking-wider text-lg">
            Matching With: <span className=" font-black">Female</span>
          </p>
        </div>
        <div className=" flex items-center space-x-3">
          <MapPin width={28} height={28} fill="white" stroke="#1A1529" />
          <p className=" tracking-wider text-lg">
            2239 Hog Camp Road <br />
            Schaumburg
          </p>
        </div>
        <div className=" flex items-center space-x-3">
          <Cake fill="white" />
          <p className=" tracking-wider text-lg">Born June 26, 1980</p>
        </div>
        <div className=" flex items-center space-x-3">
          <Phone fill="white" />
          <p className=" tracking-wider text-lg">+33757005467</p>
        </div>
      </div>
    </div>
  );
};

export default About;
