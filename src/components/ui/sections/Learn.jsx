"use client"

import { Fragment, useEffect, useState } from "react";
import { LeftBar } from "./LeftBar";
import BottomBar from "./BottomBar";
import RightBar from "./RightBar";
import DecisionTree from "./DecisionTree";

const Learn = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const updateScrollY = () => setScrollY(globalThis.scrollY ?? scrollY);
    updateScrollY();
    document.addEventListener("scroll", updateScrollY);
    return () => document.removeEventListener("scroll", updateScrollY);
  }, [scrollY]);

  return (
    <>
      <LeftBar selectedTab="Learn" />

      <div className="flex justify-center gap-3 pt-4  h-full w-full ">
        <div className="flex max-w-2xl grow flex-col">
          <DecisionTree />
        </div>
      </div>

      <div className="pt-[90px]"></div>

      <BottomBar selectedTab="Learn" />
    </>
  );
};

export default Learn;
