import React from 'react'

const Test = () => {
    return (
        <section className='container mx-auto'>
            <div className=" md:flex justify-between mt-5 py-4 gap-2">
                <div className="md:w-[70%]   ">
                    <h4 className='text-center font-bold bg-[#b6c2c955] py-10'>Main Content 70% </h4>

                </div>

                <div className="md:w-[30%] md:mt-0 mt-2">
                    <h4 className='text-center font-bold bg-[#b6c2c955] py-10'>Right 30%</h4>
                </div>

            </div>

        </section>
    )
}

export default Test
