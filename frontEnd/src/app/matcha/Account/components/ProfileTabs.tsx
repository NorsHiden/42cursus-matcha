"use client";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import Posts from "../../components/Posts";
import ProfileMatches from "./ProfileMatches";

const ProfileTabs = () => {
  const [selected, setSelected] = React.useState<React.Key>("login");
  return (
    <div className=" rounded-xl drop-shadow-xl px-7 py-5 bg-primaryy w-full h-full">
      <Tabs
        size="lg"
        className=""
        color="secondary"
        variant="underlined"
        aria-label="Tabs variants"
        classNames={{
          // tabList:
          //   "text-white",
          cursor: "w-full h-1 rounded-full",
        }}
      >
        <Tab key="matches" title="Matches">
          <div className=" h-[550px] no-scrollbar overflow-auto  space-y-6">
            <ProfileMatches />
          </div>
        </Tab>
        <Tab key="fame-rate" title="Fame Rate">
          <div>Fame Rate</div>
        </Tab>
        <Tab key="posts" title="Posts" className="">
          <div className=" h-[550px] no-scrollbar overflow-auto  space-y-6">
            <Posts />
            <Posts />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
