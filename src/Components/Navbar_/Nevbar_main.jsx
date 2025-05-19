import React from 'react'
import { Link } from 'react-router-dom'

const Nevbar_main = () => {
    return (
        <section className='container mx-auto  py-4  '>
            <div className="md:flex justify-between  md:border-t-0 border-t md:bg-white bg-yellow-500 md:w-full w-[70%] md:px-0 px-2 md:pb-0 pb-4  ">
                <ul className='md:flex items-center md:gap-0  w-full justify-between font-bold   '>
                    <li className=' cursor-pointer md:border-b-0 border-b-2 md:pb-0 pb-1  '>
                        <Link to='/' >  <select className='outline-none items-center cursor-pointer position relative md:right-0 right-1 md:w-[80px] w-[200px] ' name="page" id="home">

                            <option className='' value="home">  Home  </option>

                            <option value="home_2">Home_2</option>
                            <option value="home_3">Home_3</option>
                        </select></Link>
                    </li>
                    <li className='cursor-pointer md:border-b-0 border-b-2 md:pb-0 pb-1  '><Link to='/shop' >Shop</Link> </li>

                    <li className='cursor-pointer  md:border-b-0 border-b-2 md:pb-0 pb-1 '><Link to='/test' >Fruits & Vegetables </Link></li>
                    <li className='cursor-pointer md:border-b-0 border-b-2 md:pb-0 pb-1  '>Beverages</li>
                    <Link to='blog' >
                        <li className='cursor-pointer  md:border-b-0 border-b-2 md:pb-0 pb-1 '>Blog</li>
                    </Link>
                    <li className='cursor-pointer '>Contact</li>

                </ul>

                <div className="md:flex items-center gap-4 font-bold  md:w-[35%] md:justify-end  md:mt-0 mt-2 md:border-t-0 border-t ">
                    <h6>Trending Products</h6>
                    <h6 className='text-red-500 flex items-center'>Almost Finished <span className='bg-red-500 text-white p-1 rounded-sm ml-2'>SALE </span> </h6>
                </div>

            </div>


        </section>
    )
}

export default Nevbar_main
