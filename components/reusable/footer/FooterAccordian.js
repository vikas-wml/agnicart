"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FooterAccordian({ title, items }) {
  const [toggle, setToggle] = useState(true);

  return (
    <Disclosure
      as="div"
      defaultOpen={false}
      onClick={() => setToggle(!toggle)}
      className="border-b py-4"
    >
      <DisclosureButton className="group flex w-full items-center justify-between py-2">
        <span className=" uppercase font-bold"> {title}</span>
        {toggle ? <FiPlus size="1.5rem" /> : <FiMinus size="1.5rem" />}
      </DisclosureButton>
      <DisclosurePanel className="py-2">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 ">
            <a href={item.link} className=" cursor-pointer px-2 py-2">
              {item.title}
            </a>
          </div>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
