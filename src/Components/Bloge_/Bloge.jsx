import React from 'react'
import B1 from './Blog_img/55.png'
import B2 from './Blog_img/54.png'
import B3 from './Blog_img/53.png'
import B4 from './Blog_img/1295.png'
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Bloge = () => {
    return (
        <section className='container mx-auto flex justify-between'>
            <div className="w-[68%] ">
                <div className="  pb-4">
                    <img src={B1} alt="" />
                    <h3 className='font-bold text-2xl'>How grocers are approaching delivery as the market <br /> evolves </h3>
                    <p className='text-[12px] '>November 3, 2023 Klbtheme, store, themeforest </p>
                    <p className='text-[8px] font-bold mt-2 pb-4'>Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,<br /> och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper </p>


                    <a href="https://unsplash.com/s/photos/fruit-juice" target='_blanck' className='py-2 px-4 font-bold text-white rounded-md bg-[#124bb4]  '> Read More </a>
                </div>

                <div className="  pb-4">
                    <img src={B2} alt="" />
                    <h3 className='font-bold text-2xl'>The Friday Checkout: Food insecurity keeps retailers off <br /> balance</h3>
                    <p className='text-[12px] '>November 3, 2023 Klbtheme, store, themeforest </p>
                    <p className='text-[8px] font-bold mt-2 pb-4'>Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,<br /> och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper </p>


                    <a className='py-2 px-4 font-bold text-white rounded-md bg-[#124bb4] mt-2 ' href="https://profootballarena.com/bar-cafe/" target='_blanck' > Read More </a>
                </div>

                <div className="  pb-4">
                    <img src={B3} alt="" />
                    <h3 className='font-bold text-2xl'>Consumer want grocer to use AI to help them save money <br />
                        Dunnhumby </h3>
                    <p className='text-[12px] '>November 3, 2023 Klbtheme, store, themeforest </p>
                    <p className='text-[8px] font-bold mt-2 pb-4'>Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,<br /> och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper </p>

                    <a href='https://www.easyfundraising.org.uk/blog/the-best-places-to-buy-cheese-online-this-national-cheese-day/' target='_blanck' className='py-2 px-4 font-bold text-white rounded-md bg-[#124bb4] mt-2 '> Read More </a>
                </div>

            </div>

            <div className="w-[30%] ">
                <h4 className='font-bold text-lg '>Blog Post List</h4>

                <div className="flex gap-5 mt-4 " >
                    <img className='rounded-full w-[60px] h-[60px] ' src={B1} alt="" />
                    <div className="">
                        <h6 className='font-bold '>How grocers are approaching <br />delivery as the market <br />evolves</h6>
                        <p className='mt-2'>November 3, 2023</p>
                    </div>

                </div>

                <div className="flex gap-5  mt-2 " >
                    <img className='rounded-full w-[60px] h-[60px] ' src={B2} alt="" />
                    <div className="">
                        <h6 className='font-bold '>How grocers are approaching <br />delivery as the market <br />evolves</h6>
                        <p className='mt-2'>November 3, 2023</p>
                    </div>

                </div>
                <div className="flex gap-5 mt-2  " >
                    <img className='rounded-full w-[60px] h-[60px] ' src={B3} alt="" />
                    <div className="">
                        <h6 className='font-bold '>How grocers are approaching <br />delivery as the market <br />evolves</h6>
                        <p className='mt-2'>November 3, 2023</p>
                    </div>

                </div>

                <div className="flex gap-5  mt-2 border-b-2 pb-5 " >
                    <img className='rounded-full w-[60px] h-[60px] ' src={B4} alt="" />
                    <div className="">
                        <h6 className='font-bold '>How grocers are approaching <br />delivery as the market <br />evolves</h6>
                        <p className='mt-2'>November 3, 2023</p>
                    </div>

                </div>

                <h5 className='mt-8 font-bold'>Social Media Widget</h5>

                <a href="https://web.facebook.com/story.php?story_fbid=595851873202274&id=100083323983536&_rdc=1&_rdr#" target='_blanck' >
                    <p className='flex items-center gap-4 px-2 py-2 mt-4 bg-blue-500 text-white rounded-md cursor-pointer '> <FaFacebookF className='text-xl' /> facebook</p>
                </a>
                <a href="https://www.hy-vee.com/recipes-ideas/advice-how-tos/entertaining/lagers-and-cheese" target='_black' >
                    <p className='flex items-center gap-4 px-2 py-2 mt-2 bg-[#238ec8] text-white rounded-md cursor-pointer '> <TiSocialTwitter className='text-xl' /> twitter</p>
                </a>

                <a href="https://www.instagram.com/p/C8E9cyBsI9G/" target='_blanck'>
                    <p className='flex items-center gap-4 px-2 py-2 mt-2 bg-red-500 text-white rounded-md cursor-pointer '> <FaInstagram className='text-xl' /> instagram</p>
                </a>
                <a href="https://www.linkedin.com/in/jose-lara-ramirez-1b3a3a206/" target='_blanck' >
                    <p className='flex items-center gap-4 px-2 py-2 mt-2 bg-[#220b96] text-white rounded-md cursor-pointer '> <FaLinkedinIn className='text-xl' /> linkedin</p>
                </a>
            </div>


        </section>
    )
}

export default Bloge
