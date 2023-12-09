"use client";

import { useState } from "react";

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
      className='cursor-pointer hover:text-[#6ccacb]'
      onMouseOver={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <p>{label}</p>

      {toggle &&
        subitems?.map((items: string, index: number) => <p>{items}</p>)}
    </div>
  );
}
