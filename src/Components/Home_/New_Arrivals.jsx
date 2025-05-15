import React, { useContext, useState } from 'react'
import Well from './img_home/well.png'
import { apiData } from '../Context_API/ContextApi'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Slice_/cart_Slice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';



const New_Arrivals = () => {

  let info = useContext(apiData)

  let filter = info.filter((item) => item.id >= 20 && item.id <= 23)


  // view all product............................................
  let [view, setView] = useState(true)
  const viewAllData = () => {
    setView(!view)
  }

  // slick.....................................................

  // Add to cart itmes..........................................
  let dispatch = useDispatch()

  const hendeleAddCart = (product) => {
    dispatch(addToCart({ ...product, qty: 1 }))
    toast.success('Added to cart')

  }




  return (
    <section className='container mx-auto  pb-10  md:px-0 px-2 '>
      <div className="md:flex justify-between pb-4  ">
        <h6 className=' '> <span className='font-bold'>New Arrivals</span>  <span className='text-[10px] '>Dont miss this opportunity at a special discount just for this week.</span></h6>
        <button onClick={viewAllData} className='font-bold border rounded-full px-2 flex gap-2 items-center py-1 shadow-lg cursor-pointer'>View All <FaLongArrowAltRight /></button>
      </div>

      {view ?

        (
          <div className="flex flex-wrap justify-between gap-5">
            {filter.map((item) => (
              <div className="border md:w-[230px] w-[160px] p-2 relative rounded-xl">
                <p className='bg-red-500 w-[40px] h-[30px] rounded-md absolute top-5 flex justify-center items-center  text-white '>41%</p>
                <img className='w-[300px] ' src={item.thumbnail} alt="" />

                <div className="flex justify-between">
                  <p className=''> <span className='font-bold '>id:</span> {item.id} </p>
                   <Link to={`Details_/${item.id}`} >
                    <button className='border px-2 bg-linear-90 from-blue-500 to-red-500 text-white rounded-2xl cursor-pointer '>View </button>
                  </Link>
                  
                </div>
                <p>Price: <span className='font-bold text-red-500 text-xl '>${item.price} </span>  <span className='line-through '>  $ {item.discountPercentage} </span> </p>
                <button onClick={() => hendeleAddCart(item)} className='border rounded-full py-1 px-2 mt-2 cursor-pointer w-full '>Add to cart</button>
                <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  
                />



              </div>

            ))}

          </div>

        )

        :

        (<div className="flex flex-wrap justify-between md:gap-5 gap-2 overflow-y-scroll h-[600px] ">
          {info.map((item) => (
            <div className="border md:w-[180px] w-[158px]  p-2 relative rounded-xl">
              <p className='bg-red-500 w-[40px] h-[30px] rounded-md absolute top-5 flex justify-center items-center  text-white '>41%</p>
              <img className='w-[300px] ' src={item.thumbnail} alt="" />

              <div className="flex justify-between">
                <p className=''> <span className='font-bold '>id:</span> {item.id} </p>

                <Link to={`Details_/${item.id}`} >
                  <button className='border px-2 bg-linear-60 from-blue-500 to-pink-500 text-white rounded-2xl cursor-pointer '>View </button>
                </Link>

              </div>
              <p>Price: <span className='font-bold text-red-500  '>${item.price} </span>  <span className='line-through '>  $ {item.discountPercentage} </span> </p>
              <button onClick={() => hendeleAddCart(item)} className='border rounded-full py-1 px-2 mt-2 cursor-pointer w-full  '>Add to cart</button>


            </div>

          ))}


        </div>)


      }




    </section>
  )
}

export default New_Arrivals
