"use client";

import { nav_items } from "@/utils/data";
import NavSection from "./navSection";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import MobileNav from "./mobilenav";

type items = (typeof nav_items)[number];

export default function NavBar() {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <nav className='px-[15px] flex justify-between items-center max-lg:pb-[15px] relative'>
      <Image
        src='/triluxy_logo.png'
        width={90}
        height={77.01}
        alt='Logo'
        priority
      />

      <div className='lg:hidden w-[40px] h-[40px] flex items-center justify-center bg-[#8089961A] cursor-pointer'>
        {showMobile ? (
          <div>
            <IoMdClose
              size={26}
              className='transition duration-300 ease-linear'
              onClick={() => setShowMobile(false)}
            />

            <MobileNav />
          </div>
        ) : (
          <FiMenu
            size={26}
            className='transition duration-300 ease-linear'
            onClick={() => setShowMobile(true)}
          />
        )}
      </div>
      <div className='flex items-center gap-x-[27px] max-lg:hidden'>
        <div className='flex gap-x-[27px] items-center mt-[1px]'>
          {nav_items.slice(0, 6).map((items: items, i: number) => (
            <NavSection key={i} label={items.label} subitems={items.subItems} />
          ))}
        </div>

        <button className='w-[184px] bg-[#6CCACB] pt-[12px] pb-[13px] rounded-[4px] text-[15px] text-white font-[600] hover:bg-white hover:border-[#6CCACB] hover:text-[#6CCACB] hover:border-[1px] transition duration-500 ease focus:outline-none'>
          {nav_items[6].label}
        </button>
      </div>
    </nav>
  );
}
