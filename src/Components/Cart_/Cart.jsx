import React, { useContext, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { apiData } from '../Context_API/ContextApi';
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { clearAllItems, deleteCartItem } from '../Slice_/cart_Slice';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { SiShopee } from "react-icons/si";

const Cart = () => {
  let info = useContext(apiData)

  // add to cart system............................................................
  let cartData = useSelector((state) => state.cartItemSlice.cartItems)

  // Delete cart item..............................................................
  const dispatch = useDispatch()

  let hendeleRemoveItem = (index) => {
    dispatch(deleteCartItem(index))
  }

  // Delete cart All items.........................................................

  let hendeleClearAll = () => {
    dispatch(clearAllItems())
  }

  // Go to shop button .............................................................




  return (
    <section className='container mx-auto border-t '>
      <div className="flex w-[100px] justify-between items-center py-4">
        <p>Home</p>
        <p><IoIosArrowForward /></p>
        <p className='font-bold '>Cart</p>
      </div>
      {cartData.length > 0 ?
        <div className="flex flex-col gap-2  p-2  w-[60%] ">

          {cartData.map((item, index) => (
            <div className="border-2  md:w-full  md:h-[150px] w-[160px] px-2  rounded-xl flex gap-10 items-center relative">
              <p onClick={() => hendeleRemoveItem(index)} className='absolute w-[30px] h-[30px] bg-[#6d75a7b5] hover:bg-red-400 border rounded-full items-center flex justify-center top-5 left-[70px] text-white  cursor-pointer '><ImCross /></p>
              <div className="">
                <img className='md:w-[100px] w-[300px] border mt-2 rounded-md ' src={item.thumbnail} alt="" />
                <p className='font-bold '> </p>


              </div>
              <div className="flex  w-full justify-between items-center ">
                <div className="">
                  <h6 className='font-bold '>Price</h6>
                  <p className='font-bold text-red-500 text-xl mt-4 '>${item.price}   <span className='line-through '>  $ {item.discountPercentage} </span> </p>

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

          ))}


          <button onClick={hendeleClearAll} className='bg-red-500 text-white font-bold py-2 rounded-md cursor-pointer items-center flex justify-center gap-4 group '>Clear All Items <RiDeleteBin2Fill className='text-red-500 group-hover:text-white' /> </button>
        </div>
        :

        <div className="py-5">
          
          
          <Link to="/shop">
          <button className='bg-red-500 text-white font-bold py-2 rounded-md cursor-pointer items-center flex justify-center gap-4 group w-[60%] '>Go to shop <SiShopee /></button>
          </Link>

          
          
          
        </div>


      }

    </section>
  )
}

export default Cart
