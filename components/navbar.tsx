import { nav_items } from "@/utils/data";
import { Roboto } from "next/font/google";
import NavSection from "./navSection";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

type items = (typeof nav_items)[number];

export default function NavBar() {
  return (
    <div className={`px-[15px] flex py-3 justify-between ${roboto.className}`}>
      <p>Logo</p>
      <div className='flex gap-x-6 items-center'>
        {nav_items.slice(0, 6).map((items: items, i: number) => (
          <NavSection key={i} label={items.label} subitems={items.subItems} />
        ))}
      </div>
    </div>
  );
}
