import React, { useContext, useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import Well2 from './img_home/well.png'
import { GoPlus } from "react-icons/go";
import Banana from './img_home/625.png'
import Chipch from './img_home/633.png'
import Cac from './img_home/637.png'
import Act from './img_home/648.png'
import Firesmith from './img_home/656.png'
import Box from './img_home/641.png'
import Babyfood from './img_home/babyfood.jpg'
import Cupcak from './img_home/cupcac.jpg'
import Persent from './img_home/persent.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import MyVideo from './video/free-video.mp4'
import FoodVideo from './video/food-tab.mp4'
import { apiData } from '../Context_API/ContextApi';





const Featured = () => {
    let data = useContext(apiData)

    let filter = data.filter((item) => item.id >= 16 && item.id <= 16)

    let [product, showProduct] = useState(true)

    let hendeleProductNew = () => {
        showProduct(!product)
    }

    return (
        <section className='container mx-auto py-5'>
            <div className="md:flex gap-3 items-center h-14 bg-linear-60 from-yellow-500 to-pink-500 rounded-sm px-2">
                <h2 className='font-bold text-lg'>Featured Products </h2>
                <p className='text-[12px] '>Do not miss the current offers until the end of March.</p>
            </div>
            <div className="md:border md:flex md:flex-wrap mt-4">
                <div className="flex md:w-1/3 md:border border-b pt-2 ">
                    <div className=" 1/2">
                        <div className="flex justify-between  px-1">
                            <p className='w-[30px] text-center rounded-full text-white text-[10px] bg-red-500 '>-50%</p>
                            <p><FaRegHeart /></p>
                        </div>
                        {product ?
                            (<img className='w-[80%] ' src={Banana} alt="" />)
                            :
                            (filter.map((item) => (
                                <img className=' ' src={item.thumbnail} alt="" />

                            )))

                        }
                    </div>
                    <div className="w-1/2 px-1">
                        <h6 className='font-bold text-sm '>Marketside Fresh Organic
                            Bananas, Bunch</h6>
                        <p className='mt-2 text-red-500 font-bold'>$44.00 <span className='line-through'>$10</span> </p>
                        <p className='flex mt-2'><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /> <span className='flex '><IoMdStar className='text-[#d6d3d5]' /><IoMdStar className='text-[#d6d3d5]' /></span> </p>
                        <button onClick={hendeleProductNew} className='flex items-center border w-[160px] rounded-full py-1 px-2 justify-between  mt-2 '>Add To Cart <span><GoPlus /> </span> </button>
                    </div>
                </div>

                <div className="flex  md:w-1/3 md:border-none border-b  pt-2 ">
                    <div className=" 1/2">
                        <div className="flex justify-between  px-1">
                            <p className='w-[30px] text-center rounded-full text-white text-[10px] bg-red-500 '>-50%</p>
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

                <div className="flex  md:w-1/3 md:border border-b pt-2 ">
                    <div className=" 1/2">
                        <div className="flex justify-between  px-1">
                            <p className='w-[30px] text-center rounded-full text-white text-[10px] bg-red-500 '>-50%</p>
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

                <div className="flex  md:w-1/3 md:border border-b pt-2 ">
                    <div className=" 1/2">
                        <div className="flex justify-between  px-1">
                            <p className='w-[30px] text-center rounded-full text-white text-[10px] bg-red-500 '>-50%</p>
                            <p><FaRegHeart /></p>
                        </div>
                        <img className=' ' src={Box} alt="" />
                    </div>
                    <div className="w-1/2 px-1">
                        <h6 className='font-bold text-sm '>All Natural 85_15 Ground Beef –
                            1lb</h6>
                        <p className='mt-2 text-red-500 font-bold'>$44.00 <span className='line-through'>$10</span> </p>
                        <p className='flex mt-2'><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /> <span className='flex '><IoMdStar className='text-[#d6d3d5]' /><IoMdStar className='text-[#d6d3d5]' /></span> </p>
                        <button className='flex items-center border w-[160px] rounded-full py-1 px-2 justify-between  mt-2 '>Add To Cart <span><GoPlus /> </span> </button>
                    </div>
                </div>

                <div className="flex  md:w-1/3 md:border-none border-b pt-2 ">
                    <div className=" 1/2">
                        <div className="flex justify-between  px-1">
                            <p className='w-[30px] text-center rounded-full text-white text-[10px] bg-red-500 '>-50%</p>
                            <p><FaRegHeart /></p>
                        </div>
                        <img className=' ' src={Act} alt="" />
                    </div>
                    <div className="w-1/2 px-1">
                        <h6 className='font-bold text-sm '>ACT Anticavity Fluoride
                            Mouthwash With Zero Alcoho…</h6>
                        <p className='mt-2 text-red-500 font-bold'>$44.00 <span className='line-through'>$10</span> </p>
                        <p className='flex mt-2'><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /> <span className='flex '><IoMdStar className='text-[#d6d3d5]' /><IoMdStar className='text-[#d6d3d5]' /></span> </p>
                        <button className='flex items-center border w-[160px] rounded-full py-1 px-2 justify-between  mt-2 '>Add To Cart <span><GoPlus /> </span> </button>
                    </div>
                </div>

                <div className="flex  md:w-1/3 md:border border-b pt-2 ">
                    <div className=" 1/2">
                        <div className="flex justify-between  px-1">
                            <p className='w-[30px] text-center rounded-full text-white text-[10px] bg-red-500 '>-50%</p>
                            <p><FaRegHeart /></p>
                        </div>
                        <img className=' ' src={Firesmith} alt="" />
                    </div>
                    <div className="w-1/2 px-1">
                        <h6 className='font-bold text-sm '>FireSmith Flame Grilled Chicken
                            Breast – Deli Fresh Sliced –…</h6>
                        <p className='mt-2 text-red-500 font-bold'>$44.00 <span className='line-through'>$10</span> </p>
                        <p className='flex mt-2'><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500' /> <span className='flex '><IoMdStar className='text-[#d6d3d5]' /><IoMdStar className='text-[#d6d3d5]' /></span> </p>
                        <button className='flex items-center border w-[160px] rounded-full py-1 px-2 justify-between  mt-2 '>Add To Cart <span><GoPlus /> </span> </button>
                    </div>
                </div>

            </div>

            <div className="md:flex ">
                <div className="md:flex md:flex-row flex flex-col-reverse md:border-r bg-[#F4F1EC] rounded-sm pt-2  w-full md:mt-0 mt-2 md:py-0 py-2  ">
                    <div className="px-2 md:w-1/2">
                        <p className='text-red-500 text-sm '>Only This Week</p>
                        <h4 className='font-bold mt-2 '>Make your grocery <br />shopping easy with us</h4>
                        <p className='text-sm mt-2 '>A different kind of grocery store</p>
                        <button className='border flex gap-2 items-center rounded-full font-bold px-4 py-1 text-sm mt-3 bg-white '>Shop Now <FaLongArrowAltRight /></button>

                    </div>

                    <img className='md:w-1/2 h-[180px] ' src={Babyfood} alt="" />
                </div>

                <div className="md:flex md:flex-row flex flex-col-reverse  bg-[#F4F1EC] rounded-sm pt-2  w-full md:mt-0 mt-2 md:py-0 py-2  ">
                    <div className="px-2 md:w-1/2 ">
                        <p className='text-red-500 text-sm '>Only This Week</p>
                        <h4 className='font-bold mt-2 '>Get your everyday<br />needs here with us</h4>
                        <p className='text-sm mt-2 '>A different kind of grocery store</p>
                        <button className='border flex gap-2 items-center rounded-full font-bold px-4 py-1 text-sm mt-3 bg-white '>Shop Now <FaLongArrowAltRight /></button>

                    </div>
                    <img className='md:w-1/2 h-[180px]  ' src={Cupcak} alt="" />
                </div>
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-2 justify-between md:border-t-0 border-t ">
                <video className='md:w-[280px] md:h-[180px] md:mt-0 mt-2 ' controls>
                    <source src={MyVideo} type="video/mp4" />
                </video>

                <video className='md:w-[280px] md:h-[180px]  ' controls >
                    <source src={FoodVideo} type='video/mp4' />
                </video>

            </div>

            <div className="pt-5">
                <img src={Persent} alt="" />
            </div>

        </section>
    )
}

export default Featured
