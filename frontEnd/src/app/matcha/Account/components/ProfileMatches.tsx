import { Card, CardBody } from "@nextui-org/react";
import React from "react";

const ProfileMatches = () => {
  return (
    <Card className=" bg-primary">
      <CardBody>
        <div className=" w-full  gap-x-10 gap-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className=" flex flex-col items-center place-content-center py-5 px-2 rounded-xl bg-[#130F1F] w-full ">
            <div className=" w-full rounded-xl h-28 ">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          {/* <div className=" bg-[#130F1F] w-full h-20"></div>
          <div className=" bg-[#130F1F] w-full h-20"></div>
          <div className=" bg-[#130F1F] w-full h-20"></div>
          <div className=" bg-[#130F1F] w-full h-20"></div> */}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileMatches;
