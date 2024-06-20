"use client";

import Link from "next/link";
import Menu from "./Menu";
import SideNav from "./SideNav";
import SearchNav from "../reusable/navigation/SearchNav";
import { PiBagLight } from "react-icons/pi";
import MenuSlide from "../reusable/navigation/MenuSlide";
import { useEffect, useState } from "react";
import AccountNav from "../reusable/navigation/Accountnav";

export default function Header({ menu }) {
  const [top, setTop] = useState(false);

  const scrollHandler = () => {
    window.scrollY > 80 ? setTop(true) : setTop(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className="w-full mx-auto  top-full ">
      <div className={`${top ? `hidden ` : `block`}`}>
        <div className=" hidden w-full md:flex items-center justify-between px-6 py-3 bg-[#41c2fc]">
          <div className=" flex items-center justify-center gap-2">
            <span className="text-sm text-white font-bold">
              40-80% Off Everything
            </span>
            <Link href="/" className=" text-sm text-white border-b">
              Exclusins & Details
            </Link>
            <Link href="/" className=" text-sm text-white font-bold border-b ">
              WOMEN
            </Link>
            <Link href="/" className=" text-sm text-white font-bold  border-b">
              MEN
            </Link>
          </div>
          <Link href="/" className=" text-sm text-white border-b ">
            Enable Accessibility
          </Link>
        </div>

        <div className="  w-full bg-white border-b ">
          <div className="flex items-center justify-between px-6  ">
            <div className=" hidden  md:flex items-center justify-center gap-2">
              <span className=" text-sm text-slate-900 w-[200px]  ">
                Free Shipping on Orders $75+
              </span>
              <Link
                href="/"
                className=" text-sm text-slate-600 hover:text-slate-900 border-b border-slate-600 hover:border-slate-900 "
              >
                Details
              </Link>
            </div>
            <div className=" md:hidden flex items-center justify-center gap-3">
              <MenuSlide menu={menu} />

              <SearchNav />
            </div>
            <Link href="/">
              <img src="/logo.png" alt="" width="150" />
            </Link>
            <div className="hidden md:block">
              <SideNav />
            </div>
            <div className=" md:hidden flex items-center justify-center gap-3 ">
              <AccountNav />
              <PiBagLight
                size="1.6rem"
                className="hover:border-b-2 border-black delay-100 duration-100 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <Menu items={menu.theme_settings.mainmenu.items} />
      </div>
      <div
        className={`${
          top ? `block fixed top-0 right-0 left-0` : `hidden `
        } bg-white z-[888] shadow-md pb-2`}
      >
        <div className="flex items-center justify-between px-4 ">
          <Link href="/">
            <img src="/logo.png" alt="" width="150" />
          </Link>
          <Menu items={menu.theme_settings.mainmenu.items} />
          <SideNav />
        </div>
      </div>
    </div>
  );
}
