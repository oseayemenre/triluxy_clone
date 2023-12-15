"use client";

import Options from "./options";
import { hero_options } from "@/utils/data";
import { useState } from "react";

type THeroOptions = (typeof hero_options)[number];
export default function HeroOptions() {
  const [active, setActive] = useState("Flights");
  return (
    <div>
      <div className='flex gap-x-2 flex-wrap'>
        {hero_options.map((items: THeroOptions, index: number) => (
          <Options
            key={index}
            label={items.label}
            Icon={items.icon}
            active={active}
            handleActive={() => setActive(items.label)}
          />
        ))}
      </div>
      <h1>Hero Options</h1>;
    </div>
  );
}
