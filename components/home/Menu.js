import { Popover, Transition, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { useState, Fragment, useMemo } from "react";

export default function Menu({ items }) {
  const [popoverStates, setPopoverStates] = useState({});

  function togglePopover(navlink, show = true) {
    setPopoverStates((prevState) => ({
      ...prevState,
      [navlink]: show,
    }));
  }

  const { childItemsWithChildren, childItemsWithoutChildren } = useMemo(() => {
    const childItemsWithChildren = [];
    const childItemsWithoutChildren = [];
    items &&
      items.forEach((data) => {
        data.child_items.forEach((subItems) => {
          if (subItems.child_items.length > 0) {
            childItemsWithChildren.push(subItems);
          } else {
            childItemsWithoutChildren.push(subItems);
          }
        });
      });

    return { childItemsWithChildren, childItemsWithoutChildren };
  }, [items.child_items]);

  return (
    <Popover className=" hidden  relative md:flex bg-white justify-center items-center group ">
      <div className="flex text-sm font-semibold gap-40 justify-center items-center  ">
        {items &&
          items.map((item) => (
            <Fragment key={item.id}>
              <Link
                href={item.link}
                className="text-black text-sm uppercase font-bold cursor-pointer py-4 hover:underline underline-offset-[18px] decoration-2 delay-300 duration-300  md:block "
                onMouseEnter={() => togglePopover(item.title, true)}
                onMouseLeave={() => togglePopover(item.title, false)}
              >
                {item.title}
              </Link>

              <Transition
                as={Fragment}
                show={popoverStates[item.title]}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute left-1/2 transform -translate-x-1/2 top-full  w-[200%] opacity-100 z-[999]">
                  <div className="h-px bg-gray-400 w-full "></div>
                  <div
                    className="overflow-hidden bg-white w-full shadow-lg ring-1 ring-black/5 flex group-hover:block"
                    onMouseEnter={() => togglePopover(item.title, true)}
                    onMouseLeave={() => togglePopover(item.title, false)}
                  >
                    <div className="w-[80%] mx-auto flex items-start justify-center  ">
                      <div className="flex flex-col  ">
                        {/* {childItemsWithoutChildren.map((data) => (
                          <div key={data.id} className="p-10 space-y-3">
                            <div className="text-black py-3 text-base font-bold capitalize">
                              <Link href={data.link}>{data.title}</Link>
                            </div>
                          </div>
                        ))} */}
                        {item.child_items.map((data) => (
                          <div key={data.id} className="p-10 space-y-3">
                            <div className="text-black py-3 text-base font-bold capitalize">
                              {data.child_items.length === 0 && (
                                <Link href={data.link}>{data.title}</Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-4  items-start justify-center">
                        {/* {childItemsWithChildren.map((data) => (
                          <div key={data.id} className="p-10 space-y-3">
                            <div className="text-black py-3 text-base font-bold capitalize">
                              <h1>{data.title}</h1>
                            </div>
                            <div className="space-y-2">
                              {data.child_items.map((subItem) => (
                                <div
                                  key={subItem.id}
                                  className="text-gray-600 text-sm capitalize hover:text-black"
                                >
                                  <Link href={subItem.link}>
                                    {subItem.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))} */}
                        {item.child_items.map((data) => (
                          <div key={data.id} className="p-10 space-y-3">
                            <div className="text-black py-3 text-base font-bold capitalize">
                              {data.child_items.length > 0 && (
                                <h1>{data.title}</h1>
                              )}
                            </div>

                            <div className="space-y-2">
                              {data?.child_items?.map((subItem) => (
                                <div
                                  key={subItem.id}
                                  className="text-gray-600 text-sm capitalize hover:text-black "
                                >
                                  <Link href={subItem.link}>
                                    {subItem.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </Fragment>
          ))}
      </div>
    </Popover>
  );
}
