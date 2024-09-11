"use client";
// import { RetailService } from "@/backendAPI/retail";
// import { useRetailStore } from "@/stores/retail";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  //   const retail = useRetailStore();

  const router = useRouter();

  useEffect(() => {
    return router.push("/matcha");
  }, []);

  return <div>loading...</div>;
};

export default page;