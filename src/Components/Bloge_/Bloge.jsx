import React from 'react'
import B1 from './Blog_img/55.png'
import B2 from './Blog_img/54.png'
import B3 from './Blog_img/53.png'
import B4 from './Blog_img/1295.png'



const Bloge = ({ image, title, date, discription, button }) => {
    return (
        <section className='container mx-auto flex justify-between'>
            <div className="w-[68%] ">
                <div className="  pb-4">
                    <img src={B1} alt="" />
                    <h3 className='font-bold text-2xl'>How grocers are approaching delivery as the market <br /> evolves </h3>
                    <p className='text-[12px] '>November 3, 2023 Klbtheme, store, themeforest </p>
                    <p className='text-[8px] font-bold mt-2'>Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,<br /> och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper </p>

                    <button className='py-2 px-4 font-bold text-white rounded-md bg-[#124bb4] mt-2 '> Read More </button>
                </div>

                <div className="  pb-4">
                    <img src={B2} alt="" />
                    <h3 className='font-bold text-2xl'>The Friday Checkout: Food insecurity keeps retailers off <br /> balance</h3>
                    <p className='text-[12px] '>November 3, 2023 Klbtheme, store, themeforest </p>
                    <p className='text-[8px] font-bold mt-2'>Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,<br /> och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper </p>

                    <button className='py-2 px-4 font-bold text-white rounded-md bg-[#124bb4] mt-2 '> Read More </button>
                </div>

                <div className="  pb-4">
                    <img src={B3} alt="" />
                    <h3 className='font-bold text-2xl'>Consumer want grocer to use AI to help them save money <br />
                        Dunnhumby </h3>
                    <p className='text-[12px] '>November 3, 2023 Klbtheme, store, themeforest </p>
                    <p className='text-[8px] font-bold mt-2'>Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,<br /> och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper </p>

                    <button className='py-2 px-4 font-bold text-white rounded-md bg-[#124bb4] mt-2 '> Read More </button>
                </div>

            </div>

            <div className="w-[30%] ">
                <h4 className='font-bold text-lg '>Blog Post List</h4>

                <div className= "flex gap-5 mt-4 " >
                    <img className='rounded-full w-[60px] h-[60px] ' src={B1} alt="" />
                    <div className="">
                    <h6 className='font-bold '>How grocers are approaching <br />delivery as the market <br />evolves</h6>
                    <p className='mt-2'>November 3, 2023</p>
                    </div>
                    
                </div>

                <div className= "flex gap-5  mt-2 " >
                    <img className='rounded-full w-[60px] h-[60px] ' src={B2} alt="" />
                    <div className="">
                    <h6 className='font-bold '>How grocers are approaching <br />delivery as the market <br />evolves</h6>
                    <p className='mt-2'>November 3, 2023</p>
                    </div>
                    
                </div>
                 <div className= "flex gap-5 mt-2  " >
                    <img className='rounded-full w-[60px] h-[60px] ' src={B3} alt="" />
                    <div className="">
                    <h6 className='font-bold '>How grocers are approaching <br />delivery as the market <br />evolves</h6>
                    <p className='mt-2'>November 3, 2023</p>
                    </div>
                    
                </div>

                <div className= "flex gap-5  mt-2 " >
                    <img className='rounded-full w-[60px] h-[60px] ' src={B4} alt="" />
                    <div className="">
                    <h6 className='font-bold '>How grocers are approaching <br />delivery as the market <br />evolves</h6>
                    <p className='mt-2'>November 3, 2023</p>
                    </div>
                    
                </div>
            </div>


        </section>
    )
}

export default Bloge
