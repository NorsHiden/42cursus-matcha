"use client";
import React from "react";
import { Avatar, Badge, Button } from "@nextui-org/react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import HomeIcon from "./icons/HomeIcon";
import ChatIcon from "./icons/ChatIcon";
import AccountIcon from "./icons/AccountIcon";
import BellIcon from "./icons/BellIcon";
import ExploreIcon from "./icons/ExploreIcon";
// import { StockIcon } from "./icons/stock";
// import { DashboardIcon } from "./icons/dashboard";
// import { InvoicesIcon } from "./icons/invoicesIcon";
// import { CustomerIcon } from "./icons/CustomerIcon";
// import { SupplierIcon } from "./icons/SupplierIcon";

const Sidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathName === path;

  return (
    <div className=" hidden md:flex flex-col h-full w-72 min-w-64 drop-shadow-xl  bg-primary sticky">
      <div className="flex  items-center justify-center font-bold h-24 text-3xl ">
        LOGO
      </div>
      <div className="flex flex-col px-4 py-8 gap-4">
        <div
          onClick={(e) => {
            router.push("/matcha/Account");
          }}
          className=" flex flex-col cursor-pointer items-center w-full h-auto "
        >
          <Badge
            content=""
            color="success"
            className=" h-6 w-6 border-3  border-white"
            shape="circle"
            placement="bottom-right"
          >
            <Avatar className=" relative w-24 h-24 rounded-full bg-violet-400"></Avatar>
          </Badge>
          <h1 className=" mt-2 font-medium text-xl">Tim Cahill</h1>
          <p className=" text-sm">Terrance .CA United State</p>
          <div className=" py-4 px-2 w-full flex justify-between">
            <div className=" font-medium text-sm place-content-center items-center flex flex-col">
              <p className=" text-lg ">368</p>
              <p className=" text-sm">Post</p>
            </div>
            <div className=" font-medium text-sm place-content-center items-center flex flex-col">
              <p className=" text-lg ">368</p>
              <p>Post</p>
            </div>
            <div className=" font-medium text-sm place-content-center items-center flex flex-col">
              <p className=" text-lg ">368</p>
              <p className=" text-sm">Post</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Link href="/matcha/Home">
            <div
              className={`flex text-xl font-medium items-center gap-4 p-4 rounded-lg w-full ${
                isActive("/matcha/Home") ? "text-secondary" : "text-white"
              }`}
            >
              <HomeIcon
                className=""
                stroke={isActive("/matcha/Home") ? "#E1244F" : "white"}
              />
              Home
            </div>
          </Link>
          <Link href="/matcha/Chat">
            <div
              className={`flex items-center gap-4 p-4 rounded-lg w-full ${
                isActive("/matcha/Chat") ? "text-secondary" : "text-white"
              }`}
            >
              <ChatIcon
                className=""
                stroke={isActive("/matcha/Chat") ? "#E1244F" : "white"}
              />
              Chat
            </div>
          </Link>
          <Link href="/matcha/Account">
            <div
              className={`flex items-center gap-4 p-4 rounded-lg w-full ${
                isActive("/matcha/Account") ? "text-secondary" : "text-white"
              }`}
            >
              <AccountIcon
                className=""
                stroke={isActive("/matcha/Account") ? "#E1244F" : "white"}
              />
              Account
            </div>
          </Link>
          <Link href="/matcha/Notification">
            <div
              className={`flex items-center gap-4 p-4 rounded-lg w-full ${
                isActive("/matcha/Notification")
                  ? "text-secondary"
                  : "text-white"
              }`}
            >
              <BellIcon
                className=""
                stroke={isActive("/matcha/Notification") ? "#E1244F" : "white"}
              />
              Notification
            </div>
          </Link>
          <Link href="/matcha/Explore">
            <div
              className={`flex items-center gap-4 p-4 rounded-lg w-full ${
                isActive("/matcha/Explore") ? "text-secondary" : "text-white"
              }`}
            >
              <ExploreIcon
                className=""
                fill={isActive("/matcha/Explore") ? "#E1244F" : "white"}
              />
              Explore
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
