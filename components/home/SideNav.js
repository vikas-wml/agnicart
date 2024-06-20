import { CiSearch } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { PiBagLight } from "react-icons/pi";
import { useState } from "react";

export default function SideNav() {
  const [searchNavOpen, setSearchNavOpen] = useState(false);
  const [accountNavOpen, setAccountNavOpen] = useState(false);

  const toggleSearchNav = () => {
    setSearchNavOpen(!searchNavOpen);
  };
  const toggleAccountNav = () => {
    setAccountNavOpen(!accountNavOpen);
  };

  return (
    <div className="flex items-center justify-center gap-8 ">
      <div>
        <CiSearch
          onMouseEnter={toggleSearchNav}
          onMouseLeave={toggleSearchNav}
          size="1.5rem"
          className="hover:border-b-2 border-black delay-100 duration-100 cursor-pointer"
        />
        <div
          onMouseEnter={toggleSearchNav}
          onMouseLeave={toggleSearchNav}
          className={`ease-linear fixed top-24 translate-y-2  bottom-0 right-0 px-10  z-[999] duration-200 delay-200 bg-white flex flex-col gap-8 ${
            searchNavOpen ? `translate-x-0` : `translate-x-[100%]`
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
              <a className="text-sm cursor-pointer">
                Women&apos;s Matching Sets
              </a>
              <a className="text-sm cursor-pointer">
                Men&apos;s Short Sleeve Shirts
              </a>
              <a className="text-sm cursor-pointer">
                Women&apos;s Summer Dresses
              </a>
              <a className="text-sm cursor-pointer">
                Men&apos;s Perfect Pima Cotton Tees
              </a>
              <a className="text-sm cursor-pointer">
                Women&apos;s Cropped Jeans
              </a>
              <a className="text-sm cursor-pointer">Men&apos;s Shorts</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RxPerson
          onMouseEnter={toggleAccountNav}
          onMouseLeave={toggleAccountNav}
          size="1.5rem"
          className="hover:border-b-2 border-black delay-100 duration-100 cursor-pointer"
        />
        <div
          onMouseEnter={toggleAccountNav}
          onMouseLeave={toggleAccountNav}
          className={`ease-linear fixed top-24 translate-y-2  bottom-0 right-0   z-[1000] duration-200 delay-200 bg-white flex flex-col gap-8 ${
            accountNavOpen ? `translate-x-0` : `translate-x-[100%]`
          } `}
        >
          <div className="  mx-auto p-10 bg-black flex flex-col items-center justify-center gap-6 w-[430px] ">
            <h1 className="text-white text-4xl">
              <strong>EXPRESS</strong> INSIDER
            </h1>
            <p className="text-white text-sm">A world of rewards and access.</p>
            <div className="flex items-center justify-center gap-4">
              <button className=" border bg-white text-black text-sm px-3 py-2 w-[150px]">
                JOIN FOR FREE
              </button>
              <button className=" border bg-black text-white text-sm px-3 py-2 w-[150px]">
                SIGN IN
              </button>
            </div>
            <a className="text-white text-sm underline">Learn More</a>
          </div>
          <div className="flex flex-col gap-4 p-10">
            <h1 className=" font-bold">Help & More</h1>
            <div className="flex flex-col gap-2">
              <a className="text-slate-800 text-sm">Start a Return</a>
              <a className="text-slate-800 text-sm">
                Returns and Exchanges Policy
              </a>
              <a className="text-slate-800 text-sm">Find a Store</a>
              <a className="text-slate-800 text-sm">Gift Cards</a>
              <a className="text-slate-800 text-sm">Contact us</a>
            </div>
          </div>
        </div>
      </div>

      <PiBagLight
        size="1.6rem"
        className="hover:border-b-2 border-black delay-100 duration-100 cursor-pointer"
      />
    </div>
  );
}
