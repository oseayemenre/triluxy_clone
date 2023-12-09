import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { button_labels } from "@/utils/data";
import Button from "./button";

type TButton = (typeof button_labels)[number];

export default function Header() {
  return (
    <div className='w-full border-b-[1px] border-b-[#d4d9e05b] py-[5px] px-[15px] flex justify-between text-[#0D233E]'>
      <div className='flex items-center gap-x-[13px]'>
        <div className='flex items-center gap-x-1'>
          <FiPhone size={14} />
          <p className='text-[14px]'>+234 813 264 0130</p>
        </div>

        <div className='flex items-center gap-x-1'>
          <CiMail size={14} />
          <p className='text-[14px]'>info@triluxy.com</p>
        </div>
      </div>

      <div className='flex gap-x-3'>
        <div className='flex gap-x-1 items-center'>
          <p>Flag</p>
          <p>English(US)</p>
        </div>

        <div className='flex gap-x-1 items-center'>
          <p>USD</p>
          <p>Arrow</p>
        </div>

        <div className='flex gap-x-1 items-center'>
          {button_labels.map((items: TButton, index: number) => (
            <Button {...items} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
