import Image from "next/image";
import useTitleChange from "@/hooks/useTitleChange";

export default function Hero() {
  const { title } = useTitleChange();
  return (
    <section className='relative overflow-x-hidden h-[800px]'>
      <div className='w-[1500px] bg-red-800 h-[800px] absolute -left-20'>
        <Image
          src='/island_2.jpg'
          width={3000}
          height={600}
          alt=''
          priority
          className='rounded-b-[50%] w-full h-full'
        />
      </div>

      <div className='w-[1500px] h-[800px] rounded-b-[50%] absolute bg-[#0D233E] -left-20 opacity-[0.70]' />

      <div className='absolute w-full flex justify-center -left-[150px] items-center h-full'>
        <h1 className='text-[50px] font-[600] text-white'>
          Amazing {title} Waiting for You
        </h1>
      </div>
    </section>
  );
}
