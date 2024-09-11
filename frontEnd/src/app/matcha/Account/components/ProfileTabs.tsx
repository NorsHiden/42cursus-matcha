"use client";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import Posts from "../../components/Posts";

const ProfileTabs = () => {
  const [selected, setSelected] = React.useState<React.Key>("login");
  return (
    <div className=" rounded-xl drop-shadow-xl px-7 py-5 bg-primary w-full h-full">
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
          <Card className=" bg-primary">
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="fame-rate" title="Fame Rate" >
          <div>Fame Rate</div>
        </Tab>
        <Tab key="posts" title="Posts" className="" >
          <div className=" h-[450px] no-scrollbar overflow-auto">
            <Posts/>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
