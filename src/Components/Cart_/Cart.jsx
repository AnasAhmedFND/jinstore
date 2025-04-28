import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { apiData } from '../Context_API/ContextApi';
import { ImCross } from "react-icons/im";

const Cart = () => {
  let info = useContext(apiData)
  return (
    <section className='container mx-auto border-t '>
        <div className="flex w-[100px] justify-between items-center py-4">
          <p>Home</p>
          <p><IoIosArrowForward /></p>
          <p className='font-bold '>Cart</p>
        </div>
        <div className="flex flex-col gap-2 border p-2  w-[60%] ">
        {info.map((item) => (
        <div className="border-2  md:w-full  md:h-[150px] w-[160px] px-2  rounded-xl flex gap-10 items-center relative">
          <p className='absolute w-[30px] h-[30px] bg-red-400 border rounded-full items-center flex justify-center top-5 left-[70px] text-white '><ImCross /></p>          
          <div className="">           
            <img className='md:w-[100px] w-[300px] border mt-2 rounded-md ' src={item.thumbnail} alt="" />
            <p className='font-bold '> </p>
           

          </div>
          <div className="flex  w-full justify-between items-center ">
            <div className="">
            <h6 className='font-bold '>Price</h6>          
            <p  className='font-bold text-red-500 text-xl mt-4 '>${item.price}   <span className='line-through '>  $ {item.discountPercentage} </span> </p>

            </div>

            <div className="">
              <h6 className='font-bold '>Quantity</h6>
              <p className='mt-4 border flex justify-between '> <span className='bg-[#706570c5] px-2  '>-</span> <span className='bg-[#b0adc755] px-2 '>1 </span> <span className='bg-[#706570c5] px-2' >+</span> </p>
            </div>

            <div className="">
              <h5 className='font-bold '>Total</h5>
              <p className='mt-4 '>245</p>
            </div>
            
          </div>
            
            
          </div>

        )) }

        </div>
    </section>
  )
}

export default Cart
