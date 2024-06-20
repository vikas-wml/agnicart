import { useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import MenuAccordian from "./MenuAccordian";

export default function RecursiveFunction({ items }) {
  const [menuNavOpen, setMenuNavOpen] = useState();

  const openMenuNav = (id) => {
    setMenuNavOpen(id);
  };
  const closeMenuNav = () => {
    setMenuNavOpen(false);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => openMenuNav(item.id)}
            className="flex items-center justify-between border px-6 py-4 w-full"
          >
            <h1 className=" uppercase"> {item.title} </h1>
            <IoIosArrowDown size="1.5rem" />
          </button>

          <div
            className={`ease-linear fixed top-0 translate-y-18   bottom-0 left-0   z-[999] duration-200 delay-200 bg-white flex flex-col gap-8 overflow-y-auto scrollbar-thin scrollbar-webkit  ${
              menuNavOpen === item.id ? `-translate-x-0` : `-translate-x-[100%]`
            } `}
          >
            <div className="w-[435px] ">
              <div className="bg-gray-200 flex items-center justify-start gap-[150px] border px-6 py-8">
                <button onClick={closeMenuNav}>
                  <IoIosArrowBack size="1.5rem" />
                </button>
                <h1 className="text-xl font-semibold uppercase">
                  {item.title}
                </h1>
              </div>
              <ul className="flex flex-col  px-4   ">
                {item.child_items?.map((child) => (
                  <MenuAccordian
                    key={child.id}
                    title={child.title}
                    items={child.child_items}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
