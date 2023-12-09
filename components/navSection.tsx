"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function NavSection({
  label,
  subitems,
}: {
  label: string;
  subitems?: string[];
}) {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className='cursor-pointer relative text-[#0D233E] h-[50px] flex items-center hover:text-[#6ccacb]'
      onMouseOver={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <div className='flex items-center gap-x-1'>
        <p>{label}</p>
        {subitems && <IoIosArrowDown size={13} color='#5D646D' />}
      </div>

      {toggle && subitems && (
        <motion.div
          initial={{ rotateX: "-90deg" }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 0.3 }}
          className='absolute top-12 w-[170px] px-5 flex flex-col gap-y-2 rounded-md py-4 bg-white text-[15px] shadow-[0_-2px_10px_1px_rgba(0,0,0,0.3)]'
        >
          {subitems?.map((items: string, index: number) => (
            <p key={index} className='text-[#0D233E] hover:text-[#6ccacb]'>
              {items}
            </p>
          ))}
        </motion.div>
      )}
    </div>
  );
}
