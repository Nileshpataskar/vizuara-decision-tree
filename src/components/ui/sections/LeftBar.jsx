import { GlobeIconSvg, PodcastIconSvg } from "@/lib/svgs";
import Link from "next/link";
import React, { useState } from "react";

const LeftBarMoreMenuSvg = (props) => {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" {...props}>
      <circle
        cx="23"
        cy="23"
        r="19"
        fill="#CE82FF"
        stroke="#CE82FF"
        strokeWidth="2"
      />
      <circle cx="15" cy="23" r="2" fill="white" />
      <circle cx="23" cy="23" r="2" fill="white" />
      <circle cx="31" cy="23" r="2" fill="white" />
    </svg>
  );
};

export const LeftBar = ({ selectedTab }) => {
  return (
    <>
      <nav className="fixed bottom-0 left-0 top-0 hidden flex-col gap-5 border-r-2 border-[#e5e5e5] bg-white p-3 md:flex lg:w-64 lg:p-5">
        <Link
          href="/learn"
          className="mb-2 ml-2 mt-2 hidden text-3xl font-bold text-[#58cc02] lg:block"
        >
            Decision Tree
        </Link>
        <ul className="flex flex-col items-stretch gap-3">
          <div
            className="relative flex grow cursor-default items-center gap-3 rounded-xl px-2 py-1 font-bold uppercase text-gray-400 hover:bg-gray-100"
            role="button"
            tabIndex={0}
          >
            <LeftBarMoreMenuSvg />{" "}
            <span className="hidden text-sm lg:inline">More</span>
          </div>
        </ul>
      </nav>
    </>
  );
};
