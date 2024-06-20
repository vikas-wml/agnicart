import { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { GoCreditCard } from "react-icons/go";
import { AiOutlineDollar } from "react-icons/ai";

export default function AccountNav() {
  const [accountNavOpen, setAccountNavOpen] = useState(false);

  const toggleAccountNav = () => {
    setAccountNavOpen(!accountNavOpen);
  };

  return (
    <div>
      <RxPerson
        onClick={toggleAccountNav}
        size="1.5rem"
        className="hover:border-b-2 border-black delay-100 duration-100 cursor-pointer"
      />
      <div
        className={`ease-linear fixed top-20 translate-y-1  bottom-0 right-0   z-[1000] duration-200 delay-200 bg-white flex flex-col ${
          accountNavOpen ? `translate-x-0` : `translate-x-[100%]`
        } `}
      >
        <div className="  mx-auto p-10 bg-black flex flex-col items-center justify-center gap-6 w-[435px] ">
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
        <div>
          <button className="flex items-center justify-center gap-3 border-b px-10 py-4">
            <GoCreditCard size="1.5rem" />
            <div className="flex flex-col items-start justify-center ">
              <span className=" text-base font-bold">EXPRESS CREDIT CARD</span>
              <span className="text-xs">
                Get an extra 20% off* your next purchase.
              </span>
            </div>
          </button>
          <button className="flex items-center justify-center gap-3 border-b px-10 py-4">
            <AiOutlineDollar size="1.8rem" />
            <div className="flex flex-col items-start justify-center ">
              <span className=" text-base font-bold">PAY YOUR BILL</span>
              <span className="text-xs">
                View your account or make a payment.
              </span>
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-4 p-10 bg-gray-100">
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
  );
}
