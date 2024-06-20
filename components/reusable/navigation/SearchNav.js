import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchNav() {
  const [searchNavOpen, setSearchNavOpen] = useState(false);

  const toggleSearchNav = () => {
    setSearchNavOpen(!searchNavOpen);
  };

  return (
    <div>
      <CiSearch
        onClick={toggleSearchNav}
        size="1.6rem"
        className="hover:border-b-2 border-black delay-100 duration-100 cursor-pointer"
      />
      <div
        className={`ease-linear fixed top-20 translate-y-1  bottom-0 left-0 px-10  z-[999] duration-200 delay-200 bg-white flex flex-col gap-8 ${
          searchNavOpen ? `-translate-x-0` : `-translate-x-[100%]`
        } `}
      >
        <div className="border-b py-8 border-black flex items-center justify-center gap-2 w-[350px]">
          <CiSearch size="1.5rem" />
          <input
            type="search"
            placeholder="search"
            className="w-full outline-none"
          />
        </div>
        <div className="flex flex-col items-start gap-6">
          <h1 className=" font-bold">TRENDING SEARCH</h1>
          <div className="flex flex-col items-start justify-center gap-4">
            <a className="text-sm cursor-pointer">Women&apos;s Matching Sets</a>
            <a className="text-sm cursor-pointer">
              Men&apos;s Short Sleeve Shirts
            </a>
            <a className="text-sm cursor-pointer">
              Women&apos;s Summer Dresses
            </a>
            <a className="text-sm cursor-pointer">
              Men&apos;s Perfect Pima Cotton Tees
            </a>
            <a className="text-sm cursor-pointer">Women&apos;s Cropped Jeans</a>
            <a className="text-sm cursor-pointer">Men&apos;s Shorts</a>
          </div>
        </div>
      </div>
    </div>
  );
}
