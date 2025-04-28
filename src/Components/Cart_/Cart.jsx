import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Cart = () => {
  return (
    <section className='container mx-auto border-t '>
        <div className="flex w-[100px] justify-between items-center py-4">
          <p>Home</p>
          <p><IoIosArrowForward /></p>
          <p className='font-bold '>Cart</p>
        </div>
    </section>
  )
}

export default Cart
