import React, { useContext } from 'react'
import wt from './wish_img/648.png'
import { IoHeartDislikeOutline } from "react-icons/io5";
import { apiData } from '../Context_API/ContextApi';
import { useDispatch, useSelector } from 'react-redux';
import { GiShoppingCart } from "react-icons/gi";
import { GiCrossedSabres } from "react-icons/gi";
import { deleteWishItem } from '../Slice_/wish_Slice';
import { addToCart } from '../Slice_/cart_Slice';
import { ToastContainer, toast } from 'react-toastify';

const Wish_list = () => {

    // add to wish system
    let wishData = useSelector((state) => state.wishItemSlice.wishItem)
    console.log(wishData);

    // wish items delete....................................
    let dispatch = useDispatch()
    const hendeleDeleteItem = (index) => {
        dispatch(deleteWishItem(index))

    }

    // add to cart items......................................
    const hendeleAddCart = (product) => {
        dispatch(addToCart({ ...product, qty: 1 }))
        toast.success('Added to cart')

    }

    // total quantity.......................................
    const totalQtyItems = wishData.reduce((total, item) => total + item.qty, 0);


    return (
        <section className='container mx-auto px-2  pb-10'>
            <h2 className='font-bold text-xl py-2 '>Wish ({totalQtyItems}) </h2>
            <div className="flex flex-wrap md:col-span-4 col-span-2 gap-4">
                {wishData.map((item, index) => (
                    <div key={index} className="border rounded-md md:w-[300px]  text-center relative pt-2">
                        <p className='absolute bg-red-500 border py-1 px-2 rounded-md text-white ml-2'>10% off</p>
                        <p className='absolute md:left-[255px] left-[280px] top-2 text-xl  w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#bbb8c9] '><IoHeartDislikeOutline /></p>

                        <p onClick={() => hendeleDeleteItem(index)} className='absolute md:left-[255px] left-[280px] top-14 text-xl  w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#f30ad8] text-white cursor-pointer hover:bg-red-500 hover:text-black' ><GiCrossedSabres /></p>

                        <img className='md:w-full w-[80%] h-[250px] md:ml-0 ml-[5%]  ' src={item.thumbnail} alt="" />
                        <div className="border-t bg-[#77789673] p-2 ">
                            <h4 className='font-bold truncate'>{item.title}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum </p>
                            <p className='font-bold text-xl'>${item.price} <span className='text-red-500 line-through '> $ {item.discountPercentage} </span></p>

                        </div>
                        <button onClick={() => hendeleAddCart(item)} className='w-full py-2 bg-black text-white font-bold rounded-b-sm flex justify-center items-center gap-2 cursor-pointer ' ><GiShoppingCart className='text-xl' /> Add To Cart</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"

                        />
                    </div>

                ))}



            </div>
        </section>
    )
}

export default Wish_list
