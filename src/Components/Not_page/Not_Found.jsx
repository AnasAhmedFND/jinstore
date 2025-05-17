import React from 'react'
import Not from './N-Found_img/404.png'
import { Link } from 'react-router-dom'

const Not_Found = () => {
  return (
    <section className='container mx-auto py-5'>
        <div className="flex justify-center ">
        <img className='' src={Not} alt="" />

        </div>
        <h2 className='text-center font-bold text-4xl '>That Page Cant Be Found</h2>
        <p className='text-center'>It looks like nothing was found at this location. Maybe try to <br />search for what you are looking for?</p>
        <div className="flex justify-center">
            <Link to='/' >
        <button className=' px-5 py-2 bg-blue-400 rounded-md mt-4 text-white'>Go To Home </button>
            </Link>           

          

        </div>

    </section>
  )
}

export default Not_Found
