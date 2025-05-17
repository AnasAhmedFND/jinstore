import React from 'react'

const Footer = () => {
  return (
   <section className='border-b-4'>
    <div className="md:flex justify-center items-center border bg-[#e0e1e8c0] py-20 ">
        <p className='text-blue-700 md:ml-0 ml-6' href="">anasahmed@gmail.com</p>
        <input className=' w-[250px] py-4 ml-5 rounded-lg outline-none px-2 md:mt-0 mt-2 ' type="text" placeholder='some text' />
    </div>
   </section>
  )
}

export default Footer
