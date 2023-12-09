import { nav_items } from "@/utils/data";
import { Roboto } from "next/font/google";
import NavSection from "./navSection";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

type items = (typeof nav_items)[number];

export default function NavBar() {
  return (
    <div className={`px-[15px] flex justify-between ${roboto.className} `}>
      <Image src='/triluxy_logo.png' width={90} height={77.01} alt='Logo' />
      <div className='flex items-center gap-x-[28px]'>
        <div className='flex gap-x-6 items-center'>
          {nav_items.slice(0, 6).map((items: items, i: number) => (
            <NavSection key={i} label={items.label} subitems={items.subItems} />
          ))}
        </div>

        <button className='w-[184px] bg-[#6CCACB] py-3 rounded-md text-[15px] text-white font-bold hover:bg-white hover:border-[#6CCACB] hover:text-[#6CCACB] hover:border-[1px] transition duration-500 ease focus:outline-none'>
          {nav_items[6].label}
        </button>
      </div>
    </div>
  );
}
