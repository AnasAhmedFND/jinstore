import React, { useContext, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { apiData } from '../Context_API/ContextApi';
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { clearAllItems, deleteCartItem, dicrement, increment } from '../Slice_/cart_Slice';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { SiShopee } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import Dynamic_page from '../Dynamic_page';

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

  // incriment plus .............................................................
  let hendeleIncrement = (item) => {
    dispatch(increment(item))
    
  }

  // dicrement....................................................................
  let hendeleDicrement = (item) => {
    dispatch(dicrement(item))
  }

  // total price and qty ........................
  let {totalPrice, totalQty} = cartData.reduce((acc, current) => {
    acc.totalPrice += (current.price * current.qty);
    acc.totalQty += current.qty;
    return acc
  }, {totalPrice: 0, totalQty: 0 } )

   



  return (
    <section className='container mx-auto border-t px-2'>
      <div className="flex items-center ">
        <Dynamic_page page='Cart' />
      </div>

      <div className=" md:flex justify-between  ">
        {cartData.length > 0 ?
          <div className="flex flex-col gap-2  p-2 md:w-[60%] ">

            {cartData.map((item, index) => (
              <div className="border-2  md:w-full  md:h-[150px]  px-2 py-2 md:py-0 rounded-xl md:flex gap-10 items-center relative">
                <p onClick={() => hendeleRemoveItem(index)} className='absolute w-[30px] h-[30px]  bg-[#6d75a7b5] hover:bg-red-400 border rounded-full items-center flex justify-center md:top-5 bottom-[230px] md:left-[80px] left-[230px] text-white  cursor-pointer '><ImCross /></p>
                <div className="">
                  <img className='md:w-[120px] w-[180px] border mt-2 rounded-md md:ml-0 ml-[20%]  ' src={item.thumbnail} alt="" />
                 
                </div>
                <div className="flex  w-full justify-between items-center ">
                  <div className="">
                    <h6 className='font-bold '>Price</h6>
                    <p className='font-bold text-red-500 md:text-xl mt-4 '>${item.price}   <span className='line-through '>  $ {item.discountPercentage} </span> </p>

                  </div>

                  <div className="">
                    <h6 className='font-bold '>Quantity</h6>

                    {/* incriment and dicriment .................................................*/}

                    <p className='mt-4 border flex justify-between '> <span onClick={() => hendeleDicrement(index) } className='bg-[#706570c5] px-2 cursor-pointer '>-</span> <span className='bg-[#b0adc755] px-2 '>{item.qty} </span> <span onClick={() => hendeleIncrement(index) }className='bg-[#706570c5] px-2 cursor-pointer ' >+</span> </p>
                  </div>

                  <div className="">
                    <h5 className='font-bold '>Total</h5>
                    <p className='mt-4 '>{(item.qty * item.price).toFixed(2) } </p>
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

        <div className="border-2 border-dashed md:w-[35%] h-[280px] rounded-md  ">
          <p className='flex justify-center text-5xl py-4 text-red-500 '><FaSackDollar /></p>

          <div className="flex gap-2 mt-[0px] font-bold justify-between px-2 border-b pb-2 text-xl  ">
            <h5 className=' text-green-500 '>Totall =</h5>
            <p className='text-red-500'>${totalPrice.toFixed(2) } </p>
          </div>

          <div className="flex gap-2  font-bold justify-between px-2 border-b pb-2 mt-4 text-xl  ">
            <h5 className=' text-green-500 '>Subtotall =</h5>
            <p className='text-red-500'>${(totalPrice+10).toFixed(2) } </p>
          </div>

          <div className="flex gap-2 font-bold px-2 border-b mt-4 pb-2 text-xl  justify-between">
            <h5 className=' text-green-500'>totalQuantity =</h5>            
            <p className='text-red-500'>${totalQty} </p>
          </div>

          <button className='bg-green-500 py-2 border rounded-md w-full text-white font-bold mt-[10px] cursor-pointer '>Bay Now</button>
        </div>

      </div>

    </section>
  )
}

export default Cart
