import React, { useContext } from 'react'
import Main from './img-De/Main.png'
import Banana from './img-De/1010.png'
import { IoIosStar } from "react-icons/io";
import { apiData } from '../Context_API/ContextApi';
import { RiShoppingBagFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { LuShare } from "react-icons/lu";


const Details = () => {
  let data = useContext(apiData)

  return (
    <section className='container mx-auto flex justify-between pb-5'>
        <div className="w-[48%] ">
            <p className='text-white border rounded-md px-2 bg-red-500 w-[40px] text-[14px] '>50%</p>
            <img className='mt-2' src={Main} alt="" />

            <img src={Banana} alt="" />

            <div className="flex items-center justify-center gap-2">
            <img className='w-[80px] border rounded-md  ' src={Banana} alt="" />
            <img className='w-[80px] border rounded-md  ' src={Banana} alt="" />
            <img className='w-[80px] border rounded-md  ' src={Banana} alt="" />
            </div>
        </div>

        <div className="w-[48%]   ">
            <h2 className='font-bold text-2xl mt-10'>Marketside Fresh Organic Bananas, <br /> Bunch</h2>
            <div className="flex items-center border-b pb-2 ">
                <p className='text-yellow-500' ><IoIosStar /></p>
                <p className='text-yellow-500' ><IoIosStar /></p>
                <p className='text-yellow-500' ><IoIosStar /></p>
                <p className='text-[#c1c1d7] '><IoIosStar /></p>
                <p className='text-[#c1c1d7] '><IoIosStar /></p>
                <p className='flex items-center ml-2'><span className='border px-1 rounded-sm'>3.00 </span>  <span className='ml-1'>2</span> </p>
                <p className=' ml-5'>SKU: <span className='font-bold'>E7F8G9H0</span></p>
            </div>

            <p className='mt-4 text-[10px] '>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti <br /> sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.</p>
            <p className='font-bold text-2xl text-red-500 mt-4'>$0.84  <span className='line-through text-black text-lg'>$1.99 </span> </p>
            <button className='border-2 py-3 px-4 font-bold text-white rounded-lg bg-green-700 mt-5'>Order On WhatsApp </button>
            <p className='bg-[#FFF7ED] py-5 rounded-lg text-red-500 font-bold mt-4 px-2 '>Special Offer : <span className='border px-2 rounded-md bg-[#f5e2cc]  py-2'>81</span> <span className='border px-2 rounded-md bg-[#f5e2cc]  py-2'>06</span> <span className='border px-2 rounded-md bg-[#f5e2cc]  py-2'>50  </span> <span className='px-1'>:</span> <span className='border px-2 rounded-md bg-[#f5e2cc]  py-2'>02</span> <span className='text-[10px] text-black'> Remains until the end of the offer.</span> </p>

            <div className="flex mt-5 gap-2">
              <p className='px-2 py-2 border-2 rounded-md border-[#7c80a655]  flex justify-center items-center text-2xl'><span className='text-[20px] '><FaMinus /></span>  <span className='ml-8'> 1</span> <span className='ml-8 text-[20px] '><FaPlus /></span></p>

              <button className='flex justify-center items-center border px-8 bg-green-500 py-2 text-white rounded-xl'><RiShoppingBagFill /><span className='ml-2'>Add to cart</span>  </button>
              <button className='flex justify-center items-center border px-8 bg-black py-2 text-white rounded-xl'><RiShoppingBagFill /> <span className='ml-2'>Buy Now</span> </button>
            </div>

            <div className="flex gap-2 border px-2 rounded-sm py-2 mt-2 ">
              <p className='text-xl'><MdOutlinePayment /></p>
              <p className='text-[10px] '><span className='font-bold'>Payment</span> . Payment upon receipt of goods, Payment by card in the department, Google Pay,<br /> Online card, -5% discount in case of payment</p>
            </div>

             <div className="flex gap-2 border px-2 rounded-sm py-2 mt-2 ">
              <p className='text-xl'><IoShieldCheckmarkOutline /></p>
              <p className='text-[10px] '><span className='font-bold'>Warranty</span> Warranty. The Consumer Protection Act does not provide for the return of this product of proper  quality.</p>
            </div>

            <div className="mt-4 flex gap-4">
            <button className='flex items-center gap-2 '><span className='border p-2 rounded-md '> <IoHeartOutline />  </span>Add to wish</button>

             <button className='flex items-center gap-2 '><span className='border p-2 rounded-md '> <LuShare />  </span>Share this Product</button>

            </div>


        </div>
    </section>
  )
}

export default Details
