"use client";
import React, { use, useEffect } from "react";
import Sidebar from "./components/Sidebar";
// import Header from "./components/header";
// import Sidebar from "./components/sidebar";
// import { AuthProvider } from "@/context/AuthContext";
// import useWindowDimensions from "@/hooks/useWindowDimensions";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  // var windowWidth;
  // useEffect(() => {
  //   windowWidth = window.innerWidth;
  //   // windowWidth = useWindowDimensions().width;
  //   console.log(windowWidth);
  // } , [windowWidth]);
  return (
    // <AuthProvider>
    <div className={`flex h-screen overflow-auto space-x-5 mr-5 relative `}>
      <Sidebar />
      <div className="flex w-full h-full place-content-center ">
        {/* <Header /> */}
        <div className=" max-w-[1500px] h-full flex flex-col w-full">
          {children}
        </div>
      </div>
    </div>
    // </AuthProvider>
  );
};

export default AppLayout;