"use client";

import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { button_labels, countries } from "@/utils/data";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { currencies } from "@/utils/data";
import { useState } from "react";
import Button from "./button";

type TButton = (typeof button_labels)[number];
type Tcountry = (typeof countries)[number];

export default function Header() {
  const [toggleCurrency, setToggleCurrency] = useState(false);
  const [toggleCountry, setToggleCountry] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [country, setCountry] = useState("English(US)");
  const [flag, setFlag] = useState("/united-states.png");
  const [rotate, setRotate] = useState(false);

  function handleCurrency() {
    setToggleCurrency(!toggleCurrency);
    setToggleCountry(false);
  }
  function handleCountry() {
    setToggleCountry(!toggleCountry);
    setToggleCurrency(false);
  }
  function handleCountryItems(name: string, flag: string) {
    setCountry(name);
    setFlag(flag);
  }

  return (
    <div>
      <div
        className={`w-full border-b-[1px] border-b-[#d4d9e05b] py-[5px] px-[15px] flex justify-between items-center text-[#0D233E] text-[14px] ${
          rotate ? "max-lg:visible" : "max-lg:hidden"
        } max-lg:flex-col max-md:gap-y-2 max-lg:p-4 max-md:transition max-md:duration-300`}
      >
        <div className='flex items-center gap-x-4 mb-1'>
          <div className='flex items-center gap-x-[6px] cursor-pointer'>
            <FiPhone size={12} className='mb-[1px]' />
            <p className='text-[14px]'>+234 813 264 0130</p>
          </div>

          <div className='flex items-center gap-x-[6px] cursor-pointer'>
            <CiMail size={13} />
            <p>info@triluxy.com</p>
          </div>
        </div>

        <div className='flex gap-x-3 items-center'>
          <div
            className='flex gap-x-1 items-center cursor-pointer relative'
            onClick={handleCountry}
          >
            <div className='w-[16px] h-[8px] mb-2'>
              <img src={flag} className='w-full' />
            </div>
            <p>{country}</p>
            <IoIosArrowDown size={13.7} className='mt-1' />

            {toggleCountry && (
              <div className='h-[192px] w-[175px] bg-white border-[1px] overflow-y-scroll absolute top-[31px] rounded-[4px] z-10 flex flex-col gap-y-[6px] '>
                {countries.map((Country: Tcountry, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer focus:outline-none px-[10px] py-[3px] flex items-center gap-x-1 ${
                        country === Country.name
                          ? "bg-[#6CCACB] text-white"
                          : "bg-transparent"
                      }`}
                      onClick={() =>
                        handleCountryItems(Country.name, Country.flag)
                      }
                    >
                      <div className='w-[16px] h-[8px] mb-2'>
                        <img src={Country.flag} className='w-full' />
                      </div>
                      <p>{Country.name}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div
            className='flex gap-x-1 items-center cursor-pointer'
            onClick={handleCurrency}
          >
            <p>{currency}</p>
            <IoIosArrowDown size={13.7} className='mt-1' />

            {toggleCurrency && (
              <div className='h-[192px] w-[90px] bg-white border-[1px] overflow-y-scroll absolute top-[46px] rounded-[4px] z-10 flex flex-col gap-y-[6px] max-lg:top-[85px]'>
                {currencies.map((currencies: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer focus:outline-none px-[10px] py-[3px] ${
                        currency === currencies
                          ? "bg-[#6CCACB] text-white"
                          : "bg-transparent"
                      }`}
                      onClick={() => setCurrency(currencies)}
                    >
                      <p>{currencies}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className='flex gap-x-2 items-center'>
            {button_labels.map((items: TButton, index: number) => (
              <Button {...items} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center lg:hidden'>
        <button
          className='w-[30px] h-[22px] bg-[#8089961A] flex justify-center items-center focus:outline-none hover:bg-[#6CCACB] transition ease duration-300 hover:text-white rounded-b-md'
          onClick={() => setRotate(!rotate)}
        >
          <MdKeyboardArrowDown
            size={16}
            className={`${
              rotate ? "rotate-180" : "rotate-0"
            } transition duration-300`}
          />
        </button>
      </div>
    </div>
  );
}
