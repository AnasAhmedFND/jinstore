import React from 'react'
import Main from './img-De/Main.png'
import Banana from './img-De/1010.png'
import { IoIosStar } from "react-icons/io";

const Details = () => {
  return (
    <section className='container mx-auto flex justify-between'>
        <div className="w-[48%] border">
            <p className='text-white border rounded-md px-2 bg-red-500 w-[40px] text-[14px] '>50%</p>
            <img className='mt-2' src={Main} alt="" />

            <img src={Banana} alt="" />

            <div className="flex items-center justify-center gap-2">
            <img className='w-[80px] border rounded-md  ' src={Banana} alt="" />
            <img className='w-[80px] border rounded-md  ' src={Banana} alt="" />
            <img className='w-[80px] border rounded-md  ' src={Banana} alt="" />
            </div>
        </div>

        <div className="w-[48%] border  ">
            <h2>Marketside Fresh Organic Bananas, <br /> Bunch</h2>
            <div className="flex items-center">
                <p className='text-yellow-500' ><IoIosStar /></p>
                <p className='text-yellow-500' ><IoIosStar /></p>
                <p className='text-yellow-500' ><IoIosStar /></p>
                <p><IoIosStar /></p>
                <p><IoIosStar /></p>
                <p className='flex items-center ml-2'><span className='border px-1 rounded-sm'>3.00 </span>  <span className='ml-1'>2</span> </p>
                <p className=' ml-5'>SKU: <span className='font-bold'>E7F8G9H0</span></p>
            </div>

        </div>
    </section>
  )
}

export default Details
