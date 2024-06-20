"use client";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Accordion({ title, options, filter }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const params = new URLSearchParams(searchParams);
  const variants = searchParams.get("variants");

  let selectedVariants;

  useEffect(() => {
    selectedVariants =
      variants && variants.split(",").map((item) => Number(item));
  }, [variants]);

  const handleFilterClick = (id, checked) => {
    let variants = params.get("variants")
      ? params.get("variants").split(",").map(Number)
      : [];

    if (checked) {
      variants.push(id);
    } else {
      variants = variants.filter((variantId) => variantId !== id);
    }

    if (variants.length) {
      params.set("variants", variants.join(","));
    } else {
      params.delete("variants");
    }

    router.push(`${path}?${params.toString()}`);
  };

  const [toggle, setToggle] = useState(true);
  return (
    <div className="  flex-col flex gap-3 bg-white py-3 px-4 border-b  border-slate-600 relative    ">
      <button
        onClick={() => setToggle(!toggle)}
        className=" w-full flex items-center justify-between"
      >
        <h3 className=" text-slate-500 text-start  font-semibold uppercase">
          {title}
        </h3>
        {toggle ? (
          <span>
            <IoIosArrowUp />
          </span>
        ) : (
          <span>
            <IoIosArrowDown />
          </span>
        )}
      </button>

      {filter.id === 308 ? (
        <div
          className={`grid transition-all  duration-300 ease-in-out text-slate-600 text-sm   ${
            toggle ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
          }`}
        >
          <div className=" flex flex-col items-start justify-center gap-6 overflow-hidden w-[235px] ">
            <div className="flex flex-col gap-4 w-full overflow-y-auto max-h-[150px] scrollbar-thin scrollbar-webkit pt-2">
              {options.map((filterItem) => (
                <div
                  key={filterItem.id}
                  className="flex items-center justify-start gap-2"
                >
                  <button>
                    <label className="flex items-center justify-start gap-2 cursor-pointer">
                      <input
                        onChange={(e) =>
                          handleFilterClick(filterItem.id, e.target.checked)
                        }
                        type="checkbox"
                        checked={
                          selectedVariants &&
                          selectedVariants.length > 0 &&
                          selectedVariants.includes(filterItem.id)
                        }
                        className=" appearance-none hidden"
                      />
                      <div
                        className="p-2 border w-4 h-4 border-slate-500 ring-1 rounded-full  hover:ring-offset-1"
                        style={{ backgroundColor: filterItem.hex_code }}
                      />
                      <span className=" uppercase font-semibold text-slate-600">
                        {filterItem.name}
                      </span>
                      <span className="font-semibold text-slate-600">
                        &#40;{filterItem.id}&#41;
                      </span>
                    </label>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`grid transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            toggle ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
          }`}
        >
          <div className="flex flex-col items-start justify-center gap-6 overflow-hidden w-[235px] ">
            <div className="flex flex-col gap-4 w-full overflow-y-auto max-h-[150px] scrollbar-thin scrollbar-webkit pt-2 ">
              {options.map((filterItem) => (
                <div
                  key={filterItem.id}
                  className="flex items-center justify-start gap-2 "
                >
                  <label className="flex items-center justify-start gap-2 cursor-pointer ">
                    <input
                      onChange={(e) =>
                        handleFilterClick(filterItem.id, e.target.checked)
                      }
                      type="checkbox"
                      checked={
                        selectedVariants &&
                        selectedVariants.length > 0 &&
                        selectedVariants.includes(filterItem.id)
                      }
                    />

                    <span className=" uppercase font-semibold text-slate-600">
                      {filterItem.name}
                    </span>
                    <span className="font-semibold text-slate-600">
                      &#40;{filterItem.id}&#41;
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Accordion;
