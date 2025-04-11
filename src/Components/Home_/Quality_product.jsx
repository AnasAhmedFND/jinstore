import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Alpro from './img_home/alpro.jpg'
import Ball from './img_home/ball.png'
import Oatbox from './img_home/oatbox_man.png'



const Quality_product = () => {
    return (
        <section className='container mx-auto flex  justify-between pb-5 '>
            <div className=" w-[200px] ">
                <p className='text-red-500 text-sm '>Only This Week</p>
                <h4 className='font-bold mt-2 '>Provides you experienced <br />quality products</h4>
                <p className='text-sm mt-2 '>Feed your family the best</p>
                <button className='border flex gap-2 items-center rounded-full font-bold px-4 py-1 text-sm mt-3 bg-white '>Shop Now <FaLongArrowAltRight /></button>
            </div>

            <div className="border bg-[#e7f0f0] rounded-sm pt-2  ">
                <div className="px-2">
                <p className='text-red-500 text-sm '>Only This Week</p>
                <h4 className='font-bold mt-2 '>Shopping with us for better <br />quality and the best price</h4>
                <p  className='text-sm mt-2 '>Only this week. Don’t miss...</p>
                <button className='border flex gap-2 items-center rounded-full font-bold px-4 py-1 text-sm mt-3 bg-white '>Shop Now <FaLongArrowAltRight /></button>

                </div>
                <img className='w-[250px]  h-[160px] mt-4 rounded-b-sm' src={Alpro} alt="" />
            </div>

            <div className="border bg-[#e7f0f0] rounded-sm pt-2  ">
                <div className="px-2">
                <p className='text-red-500 text-sm '>Only This Week</p>
                <h4 className='font-bold mt-2 '>Get the best quality products <br />at the lowest prices</h4>
                <p  className='text-sm mt-2 '>A different kind of grocery store</p>
                <button className='border flex gap-2 items-center rounded-full font-bold px-4 py-1 text-sm mt-3 bg-white '>Shop Now <FaLongArrowAltRight /></button>

                </div>
                <img className='w-[250px]  h-[160px] mt-4 ' src={Ball} alt="" />
            </div>

            <div className="border bg-[#e7f0f0] rounded-sm pt-2  ">
                <div className="px-2 ">
                <p className='text-red-500 text-sm '>Only This Week</p>
                <h4 className='font-bold mt-2 '>Where you get your all favorite <br />brands under one roof</h4>
                <p  className='text-sm mt-2 '>Only this week. Don’t miss...</p>
                <button className='border flex gap-2 items-center rounded-full font-bold px-4 py-1 text-sm mt-3 bg-white '>Shop Now <FaLongArrowAltRight /></button>

                </div>
                <img className='w-[250px]  h-[160px] mt-4 ' src={Oatbox} alt="" />
            </div>
        </section>
    )
}

export default Quality_product
