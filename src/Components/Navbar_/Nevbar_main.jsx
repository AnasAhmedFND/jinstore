import React from 'react'

const Nevbar_main = () => {
  return (
    <section className='container mx-auto  py-4 flex justify-between '>
        <ul className='flex items-center w-[55%] justify-between font-bold  '>
            <li className=' cursor-pointer'>
                <select className='outline-none items-center cursor-pointer' name="page" id="home">
                    <option className='' value="home">Home</option>
                    <option value="home_2">Home_2</option>
                    <option value="home_3">Home_3</option>
                </select>
            </li>
            <li  className='cursor-pointer '>Shop</li>
            <li  className='cursor-pointer '>Fruits & Vegetables</li>
            <li  className='cursor-pointer '>Beverages</li>
            <li  className='cursor-pointer '>Blog</li>
            <li  className='cursor-pointer '>Contact</li>
            
        </ul>

        <div className="flex items-center gap-4 font-bold  w-[35%] justify-end ">
            <h6>Trending Products</h6>
            <h6 className='text-red-500'>Almost Finished <span className='bg-red-500 text-white p-1 rounded-sm ml-2'>SALE </span> </h6>
        </div>


    </section>
  )
}

export default Nevbar_main
