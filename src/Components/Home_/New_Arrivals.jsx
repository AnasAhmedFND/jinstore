import React, { useContext, useState } from 'react'
import Well from './img_home/well.png'
import { apiData } from '../Context_API/ContextApi'
import { FaLongArrowAltRight } from "react-icons/fa";


const New_Arrivals = () => {

  let info = useContext(apiData)

  let filter = info.filter((item) => item.id >= 20 && item.id <= 23)
  


  let [view, setView] = useState(true)
  const viewAllData = () => {   
    setView(!view)
  }
  


  return (
    <section className='container mx-auto  pb-10  md:px-0 px-2 '>
      <div className="md:flex justify-between pb-4  ">
        <h6 className=' '> <span className='font-bold'>New Arrivals</span>  <span className='text-[10px] '>Dont miss this opportunity at a special discount just for this week.</span></h6>
        <button onClick={viewAllData} className='font-bold border rounded-full px-2 flex gap-2 items-center py-1 shadow-lg cursor-pointer'>View All <FaLongArrowAltRight /></button>
      </div>

      {view ? 

      (<div className="flex flex-wrap justify-between gap-5">
        {filter.map((item) => (
          <div className="border md:w-[230px] w-[160px] p-2 relative rounded-xl">
            <p className='bg-red-500 w-[40px] h-[30px] rounded-md absolute top-5 flex justify-center items-center  text-white '>41%</p>
            <img className='w-[300px] ' src={item.thumbnail} alt="" />
            <p className='font-bold '> </p>
            <p className=''> <span className='font-bold '>id:</span> {item.id} </p>
            <p>Price: <span className='font-bold text-red-500 text-xl '>${item.price} </span>  <span className='line-through '>  $ {item.discountPercentage} </span> </p>
            <p className='border rounded-full py-1 px-2 mt-2'>Add to cart</p>

          </div>

        ))}


      </div>)

      :
      
    ( <div className="flex flex-wrap justify-between gap-5 overflow-y-scroll h-[600px] ">
        {info.map((item) => (
          <div className="border md:w-[180px] w-[120px] p-2 relative rounded-xl">
            <p className='bg-red-500 w-[40px] h-[30px] rounded-md absolute top-5 flex justify-center items-center  text-white '>41%</p>
            <img className='w-[300px] ' src={item.thumbnail} alt="" />
            <p className='font-bold '> </p>
            <p className=''> <span className='font-bold '>id:</span> {item.id} </p>
            <p>Price: <span className='font-bold text-red-500  '>${item.price} </span>  <span className='line-through '>  $ {item.discountPercentage} </span> </p>
            <p className='border rounded-full py-1 px-2 mt-2'>Add to cart</p>

          </div>

        ))}


      </div>)
      

  }




    </section>
  )
}

export default New_Arrivals
