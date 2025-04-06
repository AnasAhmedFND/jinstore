import React, { useContext, useEffect, useState } from 'react'
import { BiCategory } from "react-icons/bi";
import Weekend from './img_home/weekend.png'
import He_fruits from './img_home/fruits.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Slider from "react-slick";
import { apiData } from '../Context_API/ContextApi';

const Hero = () => {
  // Api Data........................................................//
  const data =useContext(apiData)

  // category style show arrow icon......................................//
  let [categories, setCategories] = useState(false)

  let hendeleCategory = () => {
    setCategories(!categories)

  }

  // Category Product show & category items filter. ........................
  // let [categoryProduct, setCategoryProduct] = useState([])
  // const hendelCategoryItem = (index) => {
  //   let filterProduct = data.filter((item) => item.category == index)
  //   setCategoryProduct(filterProduct)
  // };


  // Category items show .................................
  let [cat, setCat] = useState([])
   useEffect(() => {
    setCat([...new Set(data.map((item) => item.category)) ])

   }, [data]) 

  return (
    <section className='container mx-auto flex  justify-between  border '>
      <div className=" w-[28%] ">
        <div onClick={hendeleCategory} className="flex justify-between h-[30px] border-b items-center px-2">
          <div className="flex items-center gap-2 font-bold ">
            <p><BiCategory className='text-xl ' /></p>
            <p>All Categories</p>
          </div>

          <div className="text-xl ">
            <p> {categories === true ? <IoIosArrowDown /> : <MdKeyboardArrowRight />}  </p>

          </div>
        </div>

        <ul className='overflow-y-scroll h-[260px] '>
            {cat.map((item) => 
            <li className='cursor-pointer border-b py-1 pl-2' >{item} </li>
            )}
         
        </ul>

      </div>



      <div className="w-[70%] flex   pl-5 justify-between bg-[#e5e7eb] ">
        <div className=" mt-10 pb-5">
          <img src={Weekend} alt="" />
          <h1 className='font-bold text-3xl '>Get the best quality <br /> products at the lowest <br />prices</h1>
          <p className='text-[13px] '>We have prepared special discounts for you on grocery <br /> products. Don't miss these opportunities... </p>
          <div className="mt-5 flex gap-4 ">
            <button className='border bg-[#310358f3] text-white rounded-sm  py-1 px-2 h-[40px]  '>Shop Now</button>
            <h4 className='bg-lucal  '> <span className='font-bold text-red-500 text-xl '>$27.99</span> <span className=' line-through'>$56.67</span>   <br /> Don't miss this limited time offer. </h4>
          </div>
        </div>

        <div className=" ">
          <img className='w-full h-full' src={He_fruits} alt="" />
        </div>
      </div>









    </section>
  )
}

export default Hero
