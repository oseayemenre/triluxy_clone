"use client";

import { nav_items } from "@/utils/data";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type TNav = (typeof nav_items)[number];

export default function MobileNav() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  function handleToggle(activeitem: string) {
    setActive(activeitem);

    if (activeitem === active) {
      setToggle(!toggle);
    } else {
      setToggle(true);
    }
  }

  return (
    <div className='absolute top-[85px] z-10 bg-white left-0 w-full px-[15px] pt-1 pb-6 flex flex-col gap-y-5 transition duration-500 ease-linear'>
      {nav_items.slice(0, 6).map((items: TNav, index: number) => (
        <div key={index}>
          {items.subItems ? (
            <div>
              <div className='flex justify-between relative items-center'>
                <p className='hover:text-[#6ccacb] text-[#0D233E]'>
                  {items.label}
                </p>
                <div
                  className='hover:bg-[#8089961A] absolute p-2 right-0 rounded-md'
                  onClick={() => handleToggle(items.label)}
                >
                  <IoIosArrowDown size={16} color='#5D646D' />
                </div>
              </div>

              {active === items.label && toggle && (
                <div className='flex flex-col pt-4 px-6 gap-y-3'>
                  {items.subItems.map((items: string, index: number) => (
                    <p
                      key={index}
                      className='hover:text-[#6ccacb] text-[15px] text-[#5D646D]'
                    >
                      {items}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className='hover:text-[#6ccacb]'>{items.label}</p>
          )}
        </div>
      ))}
    </div>
  );
}
