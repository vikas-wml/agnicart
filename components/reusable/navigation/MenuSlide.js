import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import RecursiveFunction from "./RecursiveFunction";

export default function MenuSlide({ menu }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" overflow-y-auto">
      <button onClick={toggleMenu}>
        {menuOpen ? (
          <IoMdClose size="1.4rem" />
        ) : (
          <AiOutlineMenu size="1.4rem" />
        )}
      </button>
      <div
        className={`ease-linear fixed top-20 translate-y-1  bottom-0 left-0   z-[999] duration-200 delay-200 bg-white flex flex-col  ${
          menuOpen ? `-translate-x-0` : `-translate-x-[100%]`
        } `}
      >
        <div className="  flex gap-2 bg-gray-200 w-[435px]  px-6 py-4 ">
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
        <RecursiveFunction items={menu.theme_settings.mainmenu.items} />
        <div className=" flex flex-col items-start justify-center gap-4 text-sm bg-gray-200 w-[435px] px-6 py-4">
          <Link href="/">Start a Return</Link>
          <Link href="/">Returns and Exchanges Policy</Link>
          <Link href="/">Find a Store</Link>
          <Link href="/">Order Tracking</Link>
          <Link href="/">Express Credit Card</Link>
          <Link href="/">Gift Cards</Link>
          <Link href="/">Help</Link>
          <Link href="/">Feedback</Link>
          <Link href="/">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
