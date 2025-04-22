import React from 'react'
import Pimg from './img_home/p-com.png'
import { IoMdStar } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

const Popular_Companies = () => {
  return (
    <section className='container mx-auto pb-5'>
      <div className="md:flex justify-between  py-4">
        <h6 className='text-[12px] md:flex gap-2 md:items-center'><span className='font-bold text-xl'>Popular Companies </span> <br className='md:not-[]:' /> <span className=' md:mb-0 mb-2'>Some of the new products arriving this weeks </span>  </h6>
        <button className='border px-4 md:py-2 rounded-full flex items-center gap-2 md:mt-0 mt-2 ' >View All <FaLongArrowAltRight /></button>
      </div>

      <div className="border md:flex md:flex-row flex flex-wrap col-span-2  justify-between rounded-xl ">
      <div className="border-r md:w-[250px] w-1/2  px-2 py-4 ">
        <div className="flex  md:gap-5">
          <img src={Pimg} alt="" />
          <div className="">
            <h4 className='font-bold text-xl '>Machic</h4>
            <p>Featured</p>
            <p className='flex items-center text-[#8a818ad4] '><span className='text-yellow-500 flex '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /> </span> <IoMdStar /> 41</p>
          </div>
        </div>
        
          <p className='mt-5 border-t pt-4 text-[10px]  '>Good quality can only be found in good stores</p>
        
      </div>

      <div className="md:border-r md:w-[250px] w-1/2  px-2 py-4">
        <div className="flex md:gap-5">
          <img src={Pimg} alt="" />
          <div className="">
            <h4 className='font-bold text-xl '>Blonwe</h4>
            <p>Featured</p>
            <p className='flex items-center text-[#8a818ad4] '><span className='text-yellow-500 flex '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /> </span> <IoMdStar /> 37</p>
          </div>
        </div>
        
          <p className='mt-5 border-t pt-4 text-[10px]  '>Good quality can only be found in good stores</p>
        
      </div>

      <div className="border-r md:w-[250px] w-1/2  px-2 py-4">
        <div className="flex md:gap-5">
          <img src={Pimg} alt="" />
          <div className="">
            <h4 className='font-bold text-xl '>Bacola</h4>
            <p>Featured</p>
            <p className='flex items-center text-[#8a818ad4] '><span className='text-yellow-500 flex '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /> </span> <IoMdStar /> 35</p>
          </div>
        </div>
        
          <p className='mt-5 border-t pt-4 text-[10px]  '>Good quality can only be found in good stores</p>
        
      </div>

      <div className=" md:w-[250px] w-1/2  px-2 py-4">
        <div className="flex md:gap-5">
          <img src={Pimg} alt="" />
          <div className="">
            <h4 className='font-bold text-xl '>Medibazar</h4>
            <p>Featured</p>
            <p className='flex items-center text-[#8a818ad4] '><span className='text-yellow-500 flex '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /> </span> <IoMdStar /> 30</p>
          </div>
        </div>
        
          <p className='mt-5 border-t pt-4 text-[10px]  '>Good quality can only be found in good stores</p>
        
      </div>

      </div>

    </section>
  )
}

export default Popular_Companies

