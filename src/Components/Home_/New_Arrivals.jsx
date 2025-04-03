import React, { useContext } from 'react'
import Well from './img_home/well.png'
import { apiData } from '../Context_API/ContextApi'


const New_Arrivals = () => {

  let info = useContext(apiData)     

  let filter =info.filter((item) => item.id >= 20 && item.id <= 23)
  
  return (
   <section className='container mx-auto border py-10 flex flex-wrap justify-between gap-5 '>

    {filter.map((item) => (
    <div className="border w-[230px] p-2 relative rounded-xl">
        <p className='bg-red-500 w-[40px] h-[30px] rounded-md absolute top-5 flex justify-center items-center  text-white '>41%</p>
        <img className='w-[300px] ' src={item.thumbnail} alt="" />
        <p className='font-bold '> </p>
        <p className=''> <span className='font-bold '>id:</span> {item.id} </p>
        <p>Price: <span className='font-bold text-red-500 text-xl '>${item.price} </span>  <span className='line-through '>  $ {item.discountPercentage } </span> </p>
        <p className='border rounded-full py-1 px-2 mt-2'>Add to cart</p>        

    </div>

    )) }   

  
   </section>
  )
}

export default New_Arrivals
