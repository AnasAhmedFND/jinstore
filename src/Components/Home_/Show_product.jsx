import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import F3 from './img_home/f3.jpg'
import Snacky from './img_home/snacky.jpg'
import F2 from './img_home/f2.jpg'



const Show_product = () => {
  return (
   <section className='container mx-auto py-10 border flex justify-between  '>
    <div className="flex w-[32%] pl-2 bg-[#E6E9E7] rounded-md h-[180px] ">
        <div className="w-1/2 pb-2">
            <p className='text-red-500 mt-5 text-[12px] '>Only This Week</p>
            <h3 className='font-bold '>Quality eggs at an affordable price  </h3>
            <p className='text-[14px] text-[#1e1d2355] '>Eat one every day</p>
            <button className='flex border px-2  rounded-full gap-2 font-bold items-center mt-4 '>Shop Now <FaLongArrowAltRight /> </button>
        </div>
        <div className="w-1/2 ">
          <img className='h-full w-full rounded-r-full  ' src={F3} alt="" />
        </div>
    </div>

    <div className="flex w-[32%] pl-2 bg-[#E6E9E7] rounded-md h-[180px] ">
        <div className="w-1/2 pb-2">
            <p className='text-red-500 mt-5 text-[12px] '>Only This Week</p>
            <h3 className='font-bold '>Quality eggs at an affordable price  </h3>
            <p className='text-[14px] text-[#1e1d2355] '>Eat one every day</p>
            <button className='flex border px-2  rounded-full gap-2 font-bold items-center mt-4 '>Shop Now <FaLongArrowAltRight /> </button>
        </div>
        <div className="w-1/2 ">
          <img className='h-full w-full rounded-r-full  ' src={Snacky} alt="" />
        </div>
    </div>

    <div className="flex w-[32%] pl-2 bg-[#E6E9E7] rounded-md h-[180px] ">
        <div className="w-1/2 pb-2">
            <p className='text-red-500 mt-5 text-[12px] '>Only This Week</p>
            <h3 className='font-bold '>Quality eggs at an affordable price  </h3>
            <p className='text-[14px] text-[#1e1d2355] '>Eat one every day</p>
            <button className='flex border px-2  rounded-full gap-2 font-bold items-center mt-4 '>Shop Now <FaLongArrowAltRight /> </button>
        </div>
        <div className="w-1/2 ">
          <img className='h-full w-full rounded-r-md  ' src={F2} alt="" />
        </div>
    </div>

   </section>
  )
}

export default Show_product
