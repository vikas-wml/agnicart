"use client";
import { IoStar } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { TbBuildingStore } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import ThumbsGallery from "./ThumbsGallery";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProductInfo({ data, images }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const params = new URLSearchParams(searchParams);

  const colors =
    (data &&
      data.variants.find((variant) => variant.name === "Color")?.options) ||
    [];

  const sizes =
    (data &&
      data.variants.find((variant) => variant.name === "Sizes")?.options) ||
    [];
  const fit =
    (data &&
      data.variants.find((variant) => variant.name === "FIT")?.options) ||
    [];

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeFit, setActiveFit] = useState(fit[0]);
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const ref = useRef(null);

  const handleRefClick = (anchorRef) => {
    isDisclosureOpen &&
      window.scrollTo({
        top: anchorRef.current.offsetTop,
        behavior: "smooth",
      });
  };

  const buildUrl = (options) => {
    const variantParams = Object.keys(options).map((variantName) => {
      const option = data.variants
        .find((variant) => variant.name === variantName)
        .options.find((opt) => opt.id === options[variantName]);
      return `${variantName}=${option.name}`;
    });

    return `${path}?${variantParams
      .map((param) => `variant=${param}`)
      .join("&")}`;
  };

  const handleOptionClick = (variantName, optionId) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [variantName]: optionId,
    }));
    const newUrl = buildUrl({ ...selectedOptions, [variantName]: optionId });
    router.push(newUrl);
  };

  return (
    <div className="w-full h-full mx-auto grid grid-cols-1 md:grid-cols-5 items-start justify-center gap-x-10 p-4">
      <div className=" col-span-1 md:col-span-3 w-full h-full">
        <ThumbsGallery data={data} images={images} />
      </div>
      <div className=" w-full mx-auto flex flex-col gap-8 items-start justify-center col-span-1 md:col-span-2 ">
        <div className=" flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold">Agni Originals</h1>
            <div className="flex items-center justify-center gap-2">
              <IoStar size="1.2rem" color="#ffc107" />
              <span className="text-xl">5</span>
            </div>
          </div>
          <p className=" text-slate-500">{data.title}</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2">
            <span>&#8377;{data.price}</span>
            <span className=" text-slate-500">MRP</span>
            <strike className=" text-slate-500">
              &#8377;{data.reference_price}
            </strike>
            <span className="text-lg text-orange-500 font-semibold">
              70% OFF
            </span>
          </div>
          <span className=" text-slate-500">Includes all taxes</span>
        </div>

        <>
          {data.variants.map((variant) => (
            <div key={variant.id} className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <h1>
                  {variant.name === "Color"
                    ? data.selected_variant_options.Color
                    : variant.name}
                </h1>
                <a className=" underline cursor-pointer">
                  {variant.name === "Sizes" ? "Size Chart" : ""}
                </a>
              </div>
              {variant.name === "Color" ? (
                <div className="flex flex-col gap-2 w-full">
                  <ul className=" flex  overflow-x-auto gap-4 scrollbar-thin scrollbar-webkit">
                    {colors &&
                      colors.map((item) => (
                        <li key={item.id} className=" px-2 py-3    ">
                          <button
                            onClick={() => {
                              handleOptionClick(variant.name, item.id);
                              setActiveColor(item);
                            }}
                            className="w-[50px] h-[50px]"
                          >
                            <img
                              src={item.image}
                              className={`rounded-md  w-11 h-11 ${
                                activeColor.id === item.id
                                  ? `border-2 border-red-500`
                                  : `border border-black`
                              } `}
                            />
                          </button>
                        </li>
                      ))}
                  </ul>

                  <div>
                    <span className=" text-slate-700">
                      Find your perfect match!{" "}
                    </span>
                    <a
                      href="/"
                      className=" cursor-pointer underline font-semibold"
                    >
                      Ask your Expert Advisor
                    </a>
                  </div>
                </div>
              ) : variant.name === "FIT" ? (
                <div>
                  <div className=" flex gap-6 px-2 py-2 overflow-x-auto scrollbar-thin scrollbar-webkit">
                    {fit &&
                      fit.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            handleOptionClick(variant.name, item.id);
                            setActiveFit(item);
                          }}
                          className={` px-4 py-3 rounded-lg ${
                            activeFit.id === item.id
                              ? `border border-red-500`
                              : `border border-black `
                          } `}
                        >
                          {item.name}
                        </button>
                      ))}
                  </div>
                </div>
              ) : variant.name === "Sizes" ? (
                <div className="flex flex-col gap-2 w-full">
                  <div className=" flex gap-6 px-2 py-2 overflow-x-auto scrollbar-thin scrollbar-webkit">
                    {sizes &&
                      sizes.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            handleOptionClick(variant.name, item.id);
                            setActiveSize(item);
                          }}
                          className={` px-4 py-3 rounded-lg ${
                            activeSize.id === item.id
                              ? `border border-red-500`
                              : `border border-black `
                          } `}
                        >
                          {item.name}
                        </button>
                      ))}
                  </div>
                  <p className=" text-slate-700">
                    Return or exchange not applicable for this item
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </>

        <div className=" flex items-center justify-center gap-4">
          <a className="border p-2 rounded-full bg-slate-100 cursor-pointer">
            <GoShareAndroid size="1.5rem" />
          </a>
          <a className="border p-2 rounded-full bg-slate-100 cursor-pointer">
            <CiHeart size="1.5rem" />
          </a>
          <button className="border px-8 py-3 bg-black text-white font-semibold">
            ADD TO BAG
          </button>
        </div>
        <div className=" flex flex-col gap-2 border px-6 py-4 border-slate-300 w-full">
          <div className="flex items-center justify-start gap-2">
            <BiSolidOffer />
            <span>1 Offer</span>
          </div>
          <span className="text-lg text-orange-500 font-semibold">70% OFF</span>
          <span>Buy Any One Or More Product And Get Flat 70% Off</span>
        </div>
        <div className="border px-6 py-4 border-slate-300 w-full">
          <Disclosure
            as="div"
            className="flex flex-col gap-4"
            defaultOpen={true}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-xl font-semibold text-black ">
                Product Details
              </span>
              <ChevronDown className="size-5 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="w-full flex flex-col gap-2">
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Pack Of</h1>
                <p className="text-slate-500 text-start">1</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Fabric Composition</h1>
                <p className="text-slate-500">100% Cotton</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Package Contents</h1>
                <p className="text-slate-500"> 1 - Top</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Specific Pattern</h1>
                <p className="text-slate-500">Solid</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Stretchable</h1>
                <p className="text-slate-500">Yes</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Product Type</h1>
                <p className="text-slate-500"> Top</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Country of Origin</h1>
                <p className="text-slate-500">India</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Fabric</h1>
                <p className="text-slate-500"> Cotton</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Knit/Woven</h1>
                <p className="text-slate-500"> Woven</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Sleeves</h1>
                <p className="text-slate-500">Half Sleeves</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Occasion</h1>
                <p className="text-slate-500"> Casual Wear</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Pattern</h1>
                <p className="text-slate-500"> Solid</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Neckline</h1>
                <p className="text-slate-500"> Round Neck</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Fit</h1>
                <p className="text-slate-500">Regular Fit</p>
              </div>
              <div className="flex items-start gap-10">
                <h1 className="w-[40%]">Gender</h1>
                <p className="text-slate-500">Women</p>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
        <div ref={ref} className="border px-6 py-4 border-slate-300 w-full">
          <Disclosure as="div" defaultOpen={false}>
            <DisclosureButton
              onClick={() => {
                handleRefClick(ref);
                setIsDisclosureOpen(!isDisclosureOpen);
              }}
              className="group flex w-full items-center justify-between"
            >
              <span className="text-xl font-semibold text-black ">
                About Brand
              </span>
              <ChevronDown className="size-5 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-slate-500 ">
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
            </DisclosurePanel>
          </Disclosure>
        </div>
        <div className=" flex items-center justify-around border px-6 py-4 border-slate-300 w-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <FiAward size="2rem" />
            <span>Athentic</span>
            <span>Product</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <TbBuildingStore size="2rem" />
            <span>Express Store </span>
            <span>Pickup</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <RiSecurePaymentFill size="2rem" />
            <span>Secure</span>
            <span>Payment</span>
            <span>Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
