"use client";

import Image from "next/image";
import useTitleChange from "@/hooks/useTitleChange";
import { motion } from "framer-motion";
import HeroOptions from "./heroOptions";

export default function Hero() {
  const { title } = useTitleChange();
  return (
    <section className='relative overflow-x-hidden h-[800px]'>
      <div className='w-[1500px] h-[800px] absolute -left-20 max-lg:w-[1000px] max-lg:-left-[100px] max-md:w-[600px] max-md:-left-[110px]'>
        <Image
          src='/island_2.jpg'
          width={3000}
          height={600}
          alt=''
          priority
          className='rounded-b-[50%] w-full h-full'
        />
      </div>

      <div className='w-[1500px] h-[800px] rounded-b-[50%] absolute bg-[#0D233E] -left-20 opacity-[0.70] max-lg:w-[1000px] max-lg:-left-[100px] max-md:w-[600px] max-md:-left-[110px]' />

      <div className='absolute max-lg:p-[15px] w-full px-20'>
        <div className='flex flex-col justify-center max-lg:px-[10px] px-20 py-[100px] h-full gap-y-12'>
          <h1 className='text-[50px] font-[600] text-white max-md:text-[32px] max-lg:text-[40px]'>
            Amazing{" "}
            <motion.span
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
              }}
            >
              {title}{" "}
            </motion.span>
            Waiting for You
          </h1>

          <HeroOptions />
        </div>
      </div>
    </section>
  );
}
