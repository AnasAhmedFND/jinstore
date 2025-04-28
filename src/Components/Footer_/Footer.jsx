import React from 'react'
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import Playstore from './img_footer/792.png'
import App_store from './img_footer/793.png'
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Visa from './img_footer/visa.png'



const Footer = () => {
  return (
    <section className='bg-[#F3F4F6] md:py-10 py-5 md:px-0 px-2'>
      <div className="container mx-auto  ">
      <div className="md:flex border-b pt-5 pb-8 justify-between">

        <div className="">
          <h5 className='font-bold '>Join our newsletter for £10 offs</h5>
          <p className='text-[10px] '>Register now to get latest updates on promotions & <br />
            coupons.Don’t worry, we not spam!</p>
        </div>
        <div className="">
          <div className="border rounded-md flex items-center justify-between ">
            <p className='text-xl px-2'><CiMail /></p>
            <input className=' w-[65%] py-2 text-[14px] ' type="text" placeholder='Enter your email address' />
            <button className='border rounded-r-md  w-[22%] py-2 bg-[#1d0947] text-white '>SEND</button>
          </div>
          <p className='text-[8px] font-bold '>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
        </div>

      </div>

      <div className="md:flex justify-between gap-5 text-[14px] md:py-10 py-2 ">

        <div className=" ">
          <h4 className='font-bold '>Do You Need Help ?</h4>
          <p className='mt-4 text-[12px] '>Autoseligen syr. Nek diarask fröbomba. Nör <br /> antipol kynoda nynat. Pressa fåmoska.</p>
          <div className="flex mt-4 items-center gap-3">
            <p className='text-2xl '><FiPhoneCall /></p>
            <p>Monday-Friday: 08am-9pm <br /> <span className='font-bold text-lg '>0 800 300-353</span> </p>
          </div>
          <div className="flex mt-4 items-center gap-3">
            <p  className='text-2xl '><CiMail /></p>
            <p>Need help with your order? <br /> <span className='font-bold text-md '>info@example.com</span> </p>
          </div>

        </div>


        <div className=" flex flex-col gap-1">
          <h4 className='font-bold '>Make Money with Us</h4>
          <p className='mt-3'>Sell on Grogin </p>
          <p>Sell Your Services on Grogin </p>
          <p>Sell on Grogin Business </p>
          <p>Sell Your Apps on Grogin </p>
          <p>Become an Affilate </p>
          <p>Advertise Your Products </p>
          <p>Sell-Publish with Us </p>
          <p>Become an Blowwe Vendor </p>

        </div>


        <div className="flex flex-col gap-1">
          <h4  className='font-bold '>Let Us Help You</h4>
          <p className='mt-3'>Accessibility Statement </p>
          <p>Your Orders </p>
          <p>Returns & Replacements </p>
          <p>Shipping Rates & Policies </p>
          <p>Refund and Returns Policy </p>
          <p>Privacy Policy </p>
          <p>Terms and Conditions </p>
          <p>Cookie Settings </p>
          <p>Help Center </p>


        </div>


        <div className="flex flex-col gap-1">
          <h4  className='font-bold '>Get to Know Us</h4>
          <p className='mt-3'>Careers for Grogin </p>
          <p>About Grogin </p>
          <p>Inverstor Relations </p>
          <p>Grogin Devices </p>
          <p>Customer reviews </p>
          <p>Social Responsibility </p>
          <p>Store Locations </p>

        </div>

        <div className="">
          <h4 className='font-bold '>Download our app</h4>
          <div className="mt-4 flex gap-3 ">
            <a href="https://play.google.com/store/games?device" target='_blanck' rel='noopener noopener'>
            <img src={Playstore} alt="" />
            </a>
            <p>Download App Get <br /> -10% Discount</p>

          </div>

          <div className="mt-2 flex gap-3">
            <a href="https://www.apple.com/app-store/" target='_blanck' rel='noopener noopener'>
            <img src={App_store} alt="" />
            </a>
            <p>Download App Get <br /> -20% Discount</p>
          </div>

          <p className='mt-10 font-bold '>Follow us on socisl media.</p>

          <div className="flex gap-2 mt-5">
            <a href="https://www.facebook.com" target='_blanck' rel='noopener noopener'>
            <p className=' h-[30px] w-[30px]  bg-white  rounded-md flex justify-center items-center text-xl '><ImFacebook className='text-blue-700' /> </p>
            </a>

            <a href="https://twitter.com" target='_blanck' rel='noopener noopener'>
            <p className=' h-[30px] w-[30px]  bg-white rounded-md flex justify-center items-center text-xl '><FaTwitter /> </p>
            </a>

            <a href="https://www.instagram.com" target='_blanck' rel='noopener noopener'>
            <p className=' h-[30px] w-[30px]  bg-white rounded-md flex justify-center items-center text-xl '><FaInstagram className='text-red-700' /> </p>
            </a>

            <a href="https://www.linkedin.com" target='_blanck' rel='noopener noopener'>
            <p className=' h-[30px] w-[30px]  bg-white rounded-md flex justify-center items-center text-xl '><FaLinkedinIn className='text-blue-700' /> </p>
            </a>

          </div>

        </div>



      </div>

      <div className=" border-t md:pt-10 pt-2 md:flex justify-between ">
        <div className="">
          <p className='text-[10px] '>Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right reserved. Powered by <span className='font-bold'> BlackRise Themes.</span> </p>
          <div className="flex gap-2 ">
          <p className='font-bold text-blue-600 italic  '>VISA</p>
          <img src={Visa} alt="" />
          <p className='flex  '> <span className='font-bold italic '>Pay</span><span className='font-bold italic text-[#41b3f1] '>Pal</span> <span className='font-bold text-red-800 italic ml-2'>Skrill</span> <span className='font-bold ml-2'> Klarna.</span>  </p>

          </div>
        </div>

        <div className="text-[10px] font-bold ">
          <p className='flex gap-2'> <span className='underline '>Terms and Conditions </span> <span className='underline '> Privacy Policy  </span> <span className="underline">Order Tracking </span> </p>
        </div>
      </div>

      </div>


    </section>
  )
}

export default Footer
