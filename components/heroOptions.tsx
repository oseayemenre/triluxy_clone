"use client";

import Options from "./options";
import { hero_options } from "@/utils/data";
import { useState } from "react";
import HeroOptionsView from "./heroOptionsView";

type THeroOptions = (typeof hero_options)[number];
export default function HeroOptions() {
  const [active, setActive] = useState("Flights");
  return (
    <div>
      <div className='flex gap-x-2 flex-wrap mx-5 w-full max-md:mx-0'>
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

      {active === "Flights" ? (
        <HeroOptionsView title='Flights' />
      ) : active === "Hotels" ? (
        <HeroOptionsView title='Hotels' />
      ) : active === "Cars" ? (
        <HeroOptionsView title='Cars' />
      ) : active === "Cruises" ? (
        <HeroOptionsView title='Cruises' />
      ) : active === "Attractions" ? (
        <HeroOptionsView title='Attractions' />
      ) : (
        ""
      )}
    </div>
  );
}
