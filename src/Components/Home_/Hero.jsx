import React, { useState } from 'react'
import { BiCategory } from "react-icons/bi";
import Weekend from './img_home/weekend.png'
import He_fruits from './img_home/fruits.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";

const Hero = () => {





  return (
    <section className='container mx-auto flex  justify-between  border '>
      <div className=" w-[28%] border  px-2">
        <div className="flex justify-between h-[30px] border items-center ">
          <div className="flex items-center gap-2 font-bold ">
            <p><BiCategory className='text-xl ' /></p>
            <p>All Categories</p>
          </div>

          <div className="text-xl ">
            <p><MdKeyboardArrowRight /></p>
          </div>
        </div>

      </div>



      <div className="w-[70%] flex border  pl-5 justify-between bg-[#e5e7eb] ">
        <div className=" mt-10 pb-5">
          <img src={Weekend} alt="" />
          <h1 className='font-bold text-3xl '>Get the best quality <br /> products at the lowest <br />prices</h1>
          <p className='text-[13px] '>We have prepared special discounts for you on grocery <br /> products. Don't miss these opportunities... </p>
          <div className="mt-5 flex gap-4 ">
            <button className='border bg-[#310358f3] text-white rounded-sm  py-1 px-2 h-[40px]  '>Shop Now</button>
            <h4 className='bg-lucal  '> <span className='font-bold text-red-500 text-xl '>$27.99</span> <span className=' line-through'>$56.67</span>   <br /> Don't miss this limited time offer. </h4>
          </div>
        </div>

        <div className=" ">
          <img className='w-full h-full' src={He_fruits} alt="" />
        </div>
      </div>









    </section>
  )
}

export default Hero
