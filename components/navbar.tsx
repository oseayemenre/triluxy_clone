import { nav_items } from "@/utils/data";
import NavSection from "./navSection";
import Image from "next/image";

type items = (typeof nav_items)[number];

export default function NavBar() {
  return (
    <div className='px-[15px] flex justify-between '>
      <Image src='/triluxy_logo.png' width={90} height={77.01} alt='Logo' />
      <div className='flex items-center gap-x-[28px]'>
        <div className='flex gap-x-6 items-center'>
          {nav_items.slice(0, 6).map((items: items, i: number) => (
            <NavSection key={i} label={items.label} subitems={items.subItems} />
          ))}
        </div>

        <button className='w-[184px] bg-[#6CCACB] py-3 rounded-[4px] text-[14px] text-white font-[600] tracking-[0.05rem] hover:bg-white hover:border-[#6CCACB] hover:text-[#6CCACB] hover:border-[1px] transition duration-500 ease focus:outline-none'>
          {nav_items[6].label}
        </button>
      </div>
    </div>
  );
}
