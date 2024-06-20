import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function MenuAccordian({ title, items }) {
  const [toggle, setToggle] = useState(true);

  return (
    <Disclosure
      as="div"
      defaultOpen={false}
      onClick={() => setToggle(!toggle)}
      className="border-b"
    >
      <DisclosureButton className="group flex w-full items-center justify-between px-6 py-6">
        <span className=" uppercase font-semibold "> {title}</span>
        {toggle ? <FiPlus size="1.5rem" /> : <FiMinus size="1.5rem" />}
      </DisclosureButton>
      <DisclosurePanel className="py-2">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 ">
            <a href={item.link} className=" cursor-pointer px-8 py-2">
              {item.title}
            </a>
          </div>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
