"use client";

import Learn from "@/components/ui/sections/Learn";
import React from "react";
import bgSnow from "../../public/bg-snow.svg";


const Page = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <Learn />
    </main>
  );
};

export default Page;
