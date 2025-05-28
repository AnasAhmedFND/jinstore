import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Nevbar_main = () => {

    let [menu, setMenu] = useState(false)


    const hendeleMenu = () => {
        setMenu(!menu)        

    }
    
    

    return (
        <section className='container mx-auto py-4 relative md:bg-white bg-[#c0dbe1] '>
            <div className={`md:flex justify-between  md:bg-white  w-full  md:px-0 px-2 md:pb-0 pb-4 md:mt-0 mt-6  duration-700 ease-linear  ${menu ? 'md:static absolute md:-left-0 -left-[360px] top-20 ' : ' top-0 left-0  bg-[#c0dbe1]   '} `} >
                <ul className='md:flex items-center gap-10   w-full  font-bold   '>
                    <li onClick={hendeleMenu} className=' cursor-pointer md:border-b-0 border-b-2 md:pb-0 pb-1  '>
                        <Link to='/' >  <select className='outline-none items-center cursor-pointer position relative md:right-0 right-1 md:w-[80px] w-[80px] ' name="page" id="home">

                            <option className='' value="home">  Home  </option>

                            <option value="home_2">Home_2</option>
                            <option value="home_3">Home_3</option>
                        </select></Link>
                    </li>
                    <Link to='/shop' >
                    <li  className='cursor-pointer md:border-b-0 border-b-2 md:pb-0 pb-1  '>  Shop </li>
                    </Link>

                    <Link to='/test' >
                    <li onClick={hendeleMenu} className='cursor-pointer  md:border-b-0 border-b-2 md:pb-0 pb-1 '>Fruits & Vegetables </li></Link>
                    
                    <li onClick={hendeleMenu} className='cursor-pointer md:border-b-0 border-b-2 md:pb-0 pb-1  '>Beverages</li>
                    <Link to='blog' >
                        <li onClick={hendeleMenu} className='cursor-pointer  md:border-b-0 border-b-2 md:pb-0 pb-1 '>Blog </li>
                    </Link>
                    <li className='cursor-pointer '>Contact</li>

                </ul>

                <div className="md:flex items-center gap-4 font-bold  md:w-[35%] md:justify-end  md:mt-0 mt-2 md:border-t-0 border-t ">
                    <h6>Trending Products</h6>
                    <h6 className='text-red-500 flex items-center'>Almost Finished <span className='bg-red-500 text-white p-1 rounded-sm ml-2'>SALE </span> </h6>
                </div>

            </div>

            <button onClick={hendeleMenu} className='absolute top-2 right-2 font-bold text-2xl md:hidden cursor-pointer  '> 
                {menu === true ?
                <GiHamburgerMenu /> : <ImCross /> 
                 }

                </button>


        </section>
    )
}

export default Nevbar_main
