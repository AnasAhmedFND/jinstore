import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { apiData } from '../Context_API/ContextApi';
import { TbCategoryPlus } from "react-icons/tb";
import { FaRegSquare } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { SlList } from "react-icons/sl";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Inst from './shop_img/squer_icon.jpg'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Slice_/cart_Slice';


const Shop = () => {
    // context api.........................................
    let info = useContext(apiData)

    // category show itmes..................................................
    let [categoryItems, setCategoryItems] = useState([])
    useEffect(() => {
        setCategoryItems([...new Set(info.map((item) => item.category))])
    }, [info])

    // shop 16 product filter..........................................
    let shopProductFilter = info.filter((item) => item.id >= 20 && item.id <= 35)


    // categoryItems squer & list (short-circuit Evaluation && )................
    let [squer, setSquer] = useState('')

    // categoryItems items filter............................................
    let [category, setCategory] = useState([])
    const hendeleCategoryProduct = ((index) => {
        let catFilter = info.filter((item) => item.category == index)
        setCategory(catFilter)


    })
    // in stock....//////////////////////////////////////////////
    let [stock, setStock] = useState(false)
    const hendeleInStock = (() => {
        setStock(!stock)

    })

    // on stock..................................................... 
    let [stockOn, setStockOn] = useState(false)

    const hendeleOnStock = (() => {
        setStockOn(!stockOn)

    })
    // add to cart slice...................................
    let dispatch = useDispatch()

    const hendeleAddToCart = (product) => {
        dispatch(addToCart({ ...product, qty: 1 }))

    }






    return (
        <section className='container mx-auto border-t py-4 md:flex justify-between md:px-0 px-2 '>
            <div className="md:w-[30%]  ">
                <div className="flex gap-4">
                    <p className='flex items-center gap-2'>Home <IoIosArrowForward /></p>
                    <p className='font-bold '>Shop</p>
                </div>
                <h4 className='mt-4 font-bold '>Widget price filter</h4>
                <div className="mt-2 ">
                    <div className="flex gap-28">
                        <p>Min price</p>
                        <p>Max price</p>
                    </div>
                    <div className="flex justify-between mt-2 ">
                        <input className='border w-[45%] px-2 py-2 rounded-md ' type="text" placeholder='0' />
                        <p>-</p>
                        <input className='border w-[45%] px-2 py-2 rounded-md ' type="text" placeholder='30' />
                    </div>
                    <div className="flex items-center mt-5 ">
                        <p className='w-[8%] border rounded-full bg-black h-[1%] '>.</p>
                        <p className='w-[83%]  border bg-black h-[3px] '> </p>
                        <p className='w-[8%] border rounded-full bg-black h-[1%] '>.</p>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <p>Price:$0-$30</p>
                        <p className='border py-2 px-5 rounded-md bg-[#aaa9b6c0] font-bold  '>Filter</p>
                    </div>

                </div>

                <div className=" py-4 ">

                    <p className='border-b pb-2 flex items-center gap-2 font-bold'><TbCategoryPlus className='text-xl ' /> Product Categories</p>
                    <ul className='h-[300px] overflow-y-scroll '>

                        {categoryItems.map((item) =>
                            <li onClick={() => hendeleCategoryProduct(item)} className='items-center flex gap-2 border-b mt-1 shadow-2xl cursor-pointer '><FaRegSquare /> {item} </li>

                        )}
                    </ul>

                </div>

                <p className='font-bold mt-2 border-t pt-4'>Product Status</p>
                <p onClick={hendeleInStock} className='flex items-center gap-2 mt-2'>
                    {stock == 0 ?
                        <FaRegSquare />
                        :
                        <img className='w-[20px] ' src={Inst} alt="" />
                    }
                    In Stock</p>
                <p onClick={hendeleOnStock} className='flex items-center gap-2'>
                    {stockOn == 0 ?
                        <FaRegSquare />
                        :
                        <img className='w-[20px] ' src={Inst} alt="" />

                    }
                    On Sale</p>


            </div>

            {/* Right........................................... */}

            <div className="md:w-[68%]   ">
                <p className='text-red-500 bg-[#f3b968be] w-[120px] text-center rounded-md '>Only This Week</p>
                <h2 className='font-bold mt-4 md:text-3xl text-2xl '>Grocery store with different <br /> treasures</h2>
                <p className='mt-2'>We have prepared special discounts for you on grocery <br />
                    products...</p>

                <button className='border px-5 py-2 rounded-full font-bold flex items-center gap-2 mt-4'>Shop Now <FaLongArrowAltRight /></button>


                <div className="md:flex border justify-between py-2 px-2 items-center bg-linear-60 from-yellow-500 to-pink-500 mt-5 rounded-md">
                    <div className="flex md:gap-10 items-center  gap-7  ">
                        <p> Showing all 16 result</p>
                        <p>| Sort: <span className='font-bold md:mr-10'>Sort by latest</span>  </p>
                    </div>
                    <div className="flex items-center gap-2 md:w-[300px] w-[326px] justify-between  md:mt-0 mt-2 ">
                        <p>| show: <span className='font-bold mr-5'> 20 items </span></p>
                        <div className="font-bold text-xl flex md:gap-4 gap-2 items-center">
                            <p onClick={() => setSquer('squer')} className='border px-2 py-1 bg-[#c0dee6] rounded-md cursor-pointer '><TbCategory /></p>
                            <p onClick={() => setSquer('list')} className='cursor-pointer  '><SlList /></p>

                        </div>

                    </div>
                </div>

                {/* ata amon condition ja click corle kichu dekabe otherwise dekabena
                (short-circuit Evaluation && ) ....................*/ }

                {category.length === 0 ?
                    <div className="">

                        {squer === 'squer' &&

                            (<div className="flex flex-wrap gap-3 justify-between mt-2">
                                {shopProductFilter.map((item, index) => (
                                    <div key={index} className="border md:w-[164px] w-[163px] p-2 relative rounded-xl">
                                        <p className='bg-red-500 w-[40px] h-[30px] rounded-md absolute top-5 flex justify-center items-center  text-white '>-41%</p>
                                        <img className='w-[300px] ' src={item.thumbnail} alt="" />
                                        <p className='font-bold '>{item.title} </p>
                                        <p className=''> <span className='font-bold '>id:</span> {item.id} </p>
                                        <p>Price: <span className='font-bold text-red-500  '>${item.price} </span>  <span className='line-through '>  $ {item.discountPercentage} </span> </p>
                                        <button onClick={() => hendeleAddToCart(item)} className='border rounded-full py-1 px-2 mt-2 cursor-pointer w-full '>Add to cart </button>

                                    </div>

                                ))}

                            </div>)

                        }

                        {squer === 'list' && (
                            <div className="mt-2">
                                {shopProductFilter.map((item, index) => (
                                    <div key={index} className="flex md:gap-14 border w-full md:h-[200px]   p-2 relative mt-2 rounded-xl items-center ">
                                        <div className="">
                                        <p className='bg-red-500 w-[40px] h-[30px] rounded-md absolute top-5 flex justify-center items-center  text-white '>-41%</p>
                                        <img className='md:w-[180px] w-[120px] ml-5 ' src={item.thumbnail} alt="" />

                                        </div>
                                        <div className="">
                                            <p className='font-bold '>{item.title} </p>
                                            <p className=''> <span className='font-bold '>id:</span> {item.id} </p>
                                            <p className='flex text-yellow-500 gap-1'><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /> </p>
                                            <p>Price: <span className='font-bold text-red-500  '>${item.price} </span>  <span className='line-through '>  $ {item.discountPercentage} </span> </p>
                                            <button onClick={() => hendeleAddToCart(item)} className='border rounded-full py-1 px-2 mt-2 cursor-pointer w-[150px] '>Add to cart</button>

                                        </div>

                                    </div>

                                ))}

                            </div>
                        )}



                    </div>

                    :


                    <div className="flex flex-wrap gap-3 justify-between mt-2 ">

                        {category.map((item, index) => (
                            <div key={index} className="border md:w-[164px] w-[163px] p-2 relative rounded-xl">
                                <p className='bg-red-500 w-[40px] h-[30px] rounded-md absolute top-5 flex justify-center items-center  text-white '>-41%</p>
                                <img className='w-[300px] ' src={item.thumbnail} alt="" />
                                <p className='font-bold '>{item.title} </p>
                                <p className=''> <span className='font-bold '>id:</span> {item.id} </p>
                                <p>Price: <span className='font-bold text-red-500  '>${item.price} </span>  <span className='line-through '>  $ {item.discountPercentage} </span> </p>

                                <button onClick={() => hendeleAddToCart(item)} className='border rounded-full py-1 px-2 mt-2 cursor-pointer w-full '>Add to cart</button>

                            </div>

                        ))}
                    </div>

                }


            </div>


        </section>
    )
}

export default Shop
