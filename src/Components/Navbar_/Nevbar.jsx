import React from 'react'
import Jin from './img_nav/jinstore.png'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { TbShoppingCartCancel } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { useSelector } from 'react-redux';

const Nevbar = () => {
    let cartItemsValow = useSelector((state) => state.cartItemSlice.cartItems)
    console.log(cartItemsValow.length);
    
    return (
        <section className='container mx-auto py-3 md:px-0 px-2 '>
            <div className="md:flex justify-between  items-center ">
                <div className="flex items-center  md:gap-4  justify-between  ">
                    <Link to='/' >
                        <img src={Jin} alt="" />
                    </Link>
                    <Link to='/' >
                    <h3 className='text-2xl font-bold' >JinStore</h3>
                    </Link>
                    <p className='text-2xl'><IoLocationOutline /></p>
                    <p className='text-[12px]'>Deliver to <br /> <span className='font-bold'>all</span> </p>
                </div>

                <div className="border bg-[#F3F4F6] md:w-[55%] py-2 rounded-md px-2  flex justify-between items-center md:mt-0 mt-2  ">
                    <input className='outline-none w-[80%] md:text-[16px] text-[12px] ' type="search" placeholder='Search for products categories or brands...' />
                    <p><FiSearch className='text-xl' /></p>
                </div>

                <div className="flex gap-4 md:items-center md:mt-0 mt-2 justify-between  ">
                    <p className='text-2xl cursor-pointer '><IoMdContact /></p>
                    <p className='text-[10px] cursor-pointer '>Sign In <br /> <span className='font-bold '>Account</span> </p>
                    <div className="relative">
                    <p className='text-xl cursor-pointer '><FaRegHeart /></p>
                    <p className='absolute bottom-[10px] left-[12px] w-[20px] h-[20px] bg-red-500 border rounded-full text-white  flex justify-center items-center  '>1</p>

                    </div>
                    <Link to='/cart' >
                    <div className="relative ">
                    <p className='text-xl cursor-pointer '><TbShoppingCartCancel /></p>
                    <p className='absolute bottom-[10px] left-[8px] w-[20px] h-[20px] bg-red-500 border rounded-full text-white  flex justify-center items-center text-[12px] '>{cartItemsValow.length} </p>

                    </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Nevbar

