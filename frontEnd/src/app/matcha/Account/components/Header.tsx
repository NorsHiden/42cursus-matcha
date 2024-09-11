import { Avatar, Badge, Button } from "@nextui-org/react";
import React from "react";

const Header = () => {
  return (
    <div className="  my-12 w-full h-[360px] drop-shadow-xl rounded-xl bg-primary ">
      <div className=' w-full h-[70%] rounded-t-xl rounded-b-lg bg-[url("https://images.unsplash.com/photo-1725815980441-468dc5ca0d72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]  ' />
      <div className="  relative flex justify-between px-10 items-center w-full h-[30%] pb-10 ">
        <div className=" flex space-x-3 pb-10 items-end">
          <div className=" ">
            <Badge
              content=""
              color="default"
              className=" h-6 w-6 border-3  border-white"
              shape="circle"
              placement="bottom-right"
            >
              <Avatar className=" relative w-36 h-36  rounded-full bg-violet-400"></Avatar>
            </Badge>
          </div>
          <div>
            <h1 className=" mt-2 font-bold text-3xl">Charles Deo</h1>
            <p className=" text-sm">UI/UX Designer</p>
          </div>
        </div>

        <div className=" flex items-center pt-10 space-x-5">
          <Button
            variant="solid"
            color="secondary"
            className=" font-semibold px-10 py-3"
          >
            Match
          </Button>
          <Button
            variant="bordered"
            color="secondary"
            className=" font-semibold px-10 py-3"
          >
            Say Hi!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
