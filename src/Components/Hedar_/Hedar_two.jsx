import React from 'react'
import { Link } from 'react-router-dom'

const Hedar_two = () => {
  return (
    <section className='border-b py-2'>
        <div className="container mx-auto text-[12px]  flex justify-between  ">
            <ul className='flex gap-5 items-center'>
                <li><Link to='about' >About Us</Link> </li>
                <li>My accout</li>
                <li>Wishlist</li>
                <li>We deliver to you every day from <span className='text-red-500'>7:00 to 23:00</span> </li>
            </ul>

            <div className='flex gap-5 items-center'>
                <select className='outline-none ' name="english" id="lengu">
                    <option value="english">English</option>
                    <option value="bg">বাংলা</option>
                </select>
                <select className='outline-none ' name="dullar" id="many">
                    <option value="usd">USD</option>
                    <option value="bdt">BDT</option>
                </select>
                <p>Order Tracking</p>
            </div>
        </div>
    </section>
  )
}

export default Hedar_two
