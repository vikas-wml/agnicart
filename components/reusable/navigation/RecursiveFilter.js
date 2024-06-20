"use client";

import { useState } from "react";
import Accordion from "../filters/Accordian";
import { LiaFilterSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function RecursiveFilter({ filters }) {
  const [filterNavOpen, setFilterNavOpen] = useState(false);

  const openFilterNav = () => {
    setFilterNavOpen(true);
  };
  const closeFilterNav = () => {
    setFilterNavOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={openFilterNav}
          className="border px-6 py-2 border-black rounded-sm flex items-center justify-center"
        >
          <span className=" uppercase">Filters</span>
          <LiaFilterSolid size="1.5rem" />
        </button>
        <div
          className={`ease-linear fixed top-20 translate-y-18   bottom-0 left-0   z-[999] duration-200 delay-200 bg-white flex flex-col gap-8 overflow-y-auto scrollbar-thin scrollbar-webkit  ${
            filterNavOpen ? `-translate-x-0` : `-translate-x-[100%]`
          } `}
        >
          <div className=" flex flex-col items-start justify-center gap-4 px-6 py-4 lg:col-span-1 ">
            <button onClick={closeFilterNav}>
              <IoMdClose size="1.4rem" />
            </button>
            <div className="  flex items-center justify-between border border-black border-solid px-1 py-2 ">
              <input
                type="text"
                placeholder="Search"
                className=" text-start border-0 border-transparent outline-none "
              />
              <button className=" border-0 border-transparent  ">
                <CiSearch size="1.5rem" color="#000" />
              </button>
            </div>

            {filters &&
              filters.length > 0 &&
              filters.map((filter) => (
                <Accordion
                  key={filter.id}
                  title={filter.name}
                  options={filter.options}
                  filter={filter}
                />
              ))}
            {/* <div className=" flex flex-col items-start gap-3 justify-center ">
              <span>Enter a price range</span>
              <div className="flex items-center justify-center gap-2 w-full ">
                <div className="flex items-start justify-between gap-1 border px-2 py-3 w-full">
                  <span>&#8377;</span>
                  <input
                    type="number"
                    className="border-0 border-transparent outline-none rounded-md text-center px-2 w-20  "
                  />
                </div>
                <span>to</span>
                <div className="flex items-start justify-between gap-1 border px-2 py-3 w-full">
                  <span>&#8377;</span>
                  <input
                    type="number"
                    className="border-0 border-transparent outline-none rounded-md text-center px-2 w-20 "
                  />
                </div>
              </div>
              <button className=" text-white font-semibold border bg-black px-8 py-2 rounded-sm w-[250px]  text-center ">
                REFINE SEARCH
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
