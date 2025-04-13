import React from 'react'
import Pvg from './img_home/SVG.png'
import Pvg1 from './img_home/SVG1.png'
import Pvg2 from './img_home/SVG2.png'
import Pvg3 from './img_home/SVG3.png'




const Servics = () => {
  return (
    <section className='container mx-auto py-5  md:flex justify-between border-b md:px-0 px-2 '>
        <div className="flex gap-2 md:w-1/4 w-full">
        <img className='mt-5' src={Pvg} alt="" />
        <div className="">
            <h6 className='font-bold '>Payment only online</h6>
            <p className='text-[10px] '>Tasigförsamhet beteendedesign. Mobile
            checkout. Ylig kärrtorpa.</p>
        </div>
        </div>

        <div className="flex gap-2 md:w-1/4 w-full">
        <img className='mt-5' src={Pvg1} alt="" />  
        <div className="">
            <h6 className='font-bold '>New stocks and sales</h6>
            <p className='text-[10px] '>Tasigförsamhet beteendedesign. Mobile
            checkout. Ylig kärrtorpa.</p>
        </div>          
        </div>

        <div className="flex gap-2 md:w-1/4 w-full">
        <img className='mt-5' src={Pvg2} alt="" />
        <div className="">
            <h6 className='font-bold '>Quality assurance</h6>
            <p className='text-[10px] '>Tasigförsamhet beteendedesign. Mobile
            checkout. Ylig kärrtorpa.</p>
        </div>
        </div>

        <div className="flex gap-2 md:w-1/4 w-full">
        <img className='mt-5' src={Pvg3} alt="" />
        <div className="">
            <h6 className='font-bold '>Delivery from 1 hour</h6>
            <p className='text-[10px] '>Tasigförsamhet beteendedesign. Mobile
            checkout. Ylig kärrtorpa.</p>
        </div>
        </div>



    </section>
  )
}

export default Servics

