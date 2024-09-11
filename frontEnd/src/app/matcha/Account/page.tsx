import { Avatar, Badge, Button } from "@nextui-org/react";
import React from "react";
import Header from "./components/Header";
import Bio from "./components/Bio";
import About from "./components/About";
import Interests from "./components/Interests";
import ProfileTabs from "./components/ProfileTabs";

const Account = () => {
  return (
    <div className=" ">
      <Header />
      <div className=" w-full h-auto grid grid-cols-4 gap-8 ">
        <div className=" w-full  grid grid-rows-3 gap-5">
          <Bio/>
          <About/>
        </div>
        <div className=" w-full h-full col-span-2">
          <ProfileTabs />
        </div>
        <div className=" w-full h-full">
          <Interests/>
        </div>

      </div>
    </div>
  );
};

export default Account;
