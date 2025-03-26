import React from 'react'
import Well from './img_home/well.png'

const New_Arrivals = () => {
  return (
   <section className='container mx-auto border py-10 '>
    <div className="border w-[250px] p-2 relative rounded-xl">
        <p className='bg-red-500 w-[40px] h-[30px] rounded-md absolute top-5 flex justify-center items-center  text-white '>41%</p>
        <img className='w-[300px] ' src={Well} alt="" />
        <p className='font-bold '>100 Percent Apple Juice – 64 fl oz Bottle</p>
        <p className=''>id:1</p>
        <p>Price: <span className='font-bold text-red-500 text-xl '>$0.50 </span>  <span className='line-through '>$1.99 </span> </p>
        <p className='border rounded-full py-1 px-2 mt-2'>Add to cart</p>        

    </div>
   </section>
  )
}

export default New_Arrivals
