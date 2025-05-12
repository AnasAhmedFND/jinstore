import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Dynamic_page = (props) => {
  return (
    <section className='container mx-auto'>
        <div className="flex py-3 gap-4 items-center">
            <p>Home</p>
            <p><IoIosArrowForward /></p>
            <p className='text-red'>{props.page} </p>

        </div>
    </section>
  )
}

export default Dynamic_page
