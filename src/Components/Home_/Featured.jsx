import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import Well2 from './img_home/well.png'
import { GoPlus } from "react-icons/go";
import Banana from './img_home/625.png'
import Chipch from './img_home/633.png'
import Cac from './img_home/637.png'



const Featured = () => {
  return (
   <section className='container mx-auto py-5'>
    <div className="flex gap-3 items-center ">
    <h2 className='font-bold text-lg'>Featured Products </h2>
    <p className='text-[12px] '>Do not miss the current offers until the end of March.</p>
    </div>
    <div className="border flex mt-4">
        <div className="flex w-1/3 border pt-2 ">
            <div className=" 1/2">
                <div className="flex justify-between  px-1">
                <p className='w-[30px] text-center rounded-full text-white text-[10px] bg-red-500 '>50%</p>
                <p><FaRegHeart /></p> 
                </div>
               <img className='w-[80%] ' src={Banana} alt="" />
            </div>
            <div className="w-1/2 px-1">
                <h6 className='font-bold text-sm '>Marketside Fresh Organic
                Bananas, Bunch</h6>
                <p className='mt-2 text-red-500 font-bold'>$44.00 <span className='line-through'>$10</span> </p>
                <p className='flex mt-2'><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /> <span className='flex '><IoMdStar className='text-[#d6d3d5]' /><IoMdStar className='text-[#d6d3d5]' /></span> </p>
                <button className='flex items-center border w-[160px] rounded-full py-1 px-2 justify-between  mt-2 '>Add To Cart <span><GoPlus /> </span> </button>
            </div>
        </div> 

         <div className="flex w-1/3 border pt-2 ">
            <div className=" 1/2">
                <div className="flex justify-between  px-1">
                <p className='w-[30px] text-center rounded-full text-white text-[10px] bg-red-500 '>50%</p>
                <p><FaRegHeart /></p> 
                </div>
               <img className=' ' src={Chipch} alt="" />
            </div>
            <div className="w-1/2 px-1">
                <h6 className='font-bold text-sm '>Lay’s Classic Potato Snack
                Chips, Party Size, 13 oz Bag</h6>
                <p className='mt-2 text-red-500 font-bold'>$44.00 <span className='line-through'>$10</span> </p>
                <p className='flex mt-2'><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /> <span className='flex '><IoMdStar className='text-[#d6d3d5]' /><IoMdStar className='text-[#d6d3d5]' /></span> </p>
                <button className='flex items-center border w-[160px] rounded-full py-1 px-2 justify-between  mt-2 '>Add To Cart <span><GoPlus /> </span> </button>
            </div>
        </div>  

         <div className="flex w-1/3 border pt-2 ">
            <div className=" 1/2">
                <div className="flex justify-between  px-1">
                <p className='w-[30px] text-center rounded-full text-white text-[10px] bg-red-500 '>50%</p>
                <p><FaRegHeart /></p> 
                </div>
               <img className=' ' src={Cac} alt="" />
            </div>
            <div className="w-1/2 px-1">
                <h6 className='font-bold text-sm '>Great Value Classic Crust
                Pepperoni Microwave Frozen…</h6>
                <p className='mt-2 text-red-500 font-bold'>$44.00 <span className='line-through'>$10</span> </p>
                <p className='flex mt-2'><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /> <span className='flex '><IoMdStar className='text-[#d6d3d5]' /><IoMdStar className='text-[#d6d3d5]' /></span> </p>
                <button className='flex items-center border w-[160px] rounded-full py-1 px-2 justify-between  mt-2 '>Add To Cart <span><GoPlus /> </span> </button>
            </div>
        </div>        
    </div>
   </section>
  )
}

export default Featured
