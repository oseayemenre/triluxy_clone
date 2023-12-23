"use client";

import { button_labels } from "@/utils/data";
import { useState } from "react";

type TButton = (typeof button_labels)[number];

export default function Button({
  label,
  bgColor,
  borderColor,
  textColor,
  hoverBorder,
  hoverText,
  hoverColor,
}: TButton) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        backgroundColor: isHovered ? hoverColor : bgColor,
        borderColor: isHovered ? hoverBorder : borderColor,
        color: isHovered ? hoverText : textColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='border-[1px]  px-[15.7px] py-[7.5px] font-[600] rounded-[4px] focus:outline-none duration-150 ease transition'
    >
      {label}
    </button>
  );
}
