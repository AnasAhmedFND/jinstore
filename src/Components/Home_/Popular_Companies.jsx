import React from 'react'
import Pimg from './img_home/p-com.png'
import { IoMdStar } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

const Popular_Companies = () => {
  return (
    <section className='container mx-auto'>
      <div className="flex justify-between  py-4">
        <h6 className='text-[12px] flex gap-4 items-center'><span className='font-bold text-xl'>Popular Companies </span>Some of the new products arriving this weeks </h6>
        <button className='border px-4 py-2 rounded-full flex items-center gap-2' >View All <FaLongArrowAltRight /></button>
      </div>

      <div className="border flex justify-between rounded-xl ">
      <div className="border-r w-[250px] px-2 py-4 ">
        <div className="flex  gap-5">
          <img src={Pimg} alt="" />
          <div className="">
            <h4 className='font-bold text-xl '>Machic</h4>
            <p>Featured</p>
            <p className='flex items-center text-[#8a818ad4] '><span className='text-yellow-500 flex '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /> </span> <IoMdStar /> 41</p>
          </div>
        </div>
        
          <p className='mt-5 border-t pt-4 text-[10px]  '>Good quality can only be found in good stores</p>
        
      </div>

      <div className="border-r w-[250px] px-2 py-4">
        <div className="flex  gap-5">
          <img src={Pimg} alt="" />
          <div className="">
            <h4 className='font-bold text-xl '>Blonwe</h4>
            <p>Featured</p>
            <p className='flex items-center text-[#8a818ad4] '><span className='text-yellow-500 flex '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /> </span> <IoMdStar /> 37</p>
          </div>
        </div>
        
          <p className='mt-5 border-t pt-4 text-[10px]  '>Good quality can only be found in good stores</p>
        
      </div>

      <div className="border-r w-[250px] px-2 py-4">
        <div className="flex  gap-5">
          <img src={Pimg} alt="" />
          <div className="">
            <h4 className='font-bold text-xl '>Bacola</h4>
            <p>Featured</p>
            <p className='flex items-center text-[#8a818ad4] '><span className='text-yellow-500 flex '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /> </span> <IoMdStar /> 35</p>
          </div>
        </div>
        
          <p className='mt-5 border-t pt-4 text-[10px]  '>Good quality can only be found in good stores</p>
        
      </div>

      <div className=" w-[250px] px-2 py-4">
        <div className="flex  gap-5">
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

