import React from 'react'
// import { Nav } from '../Components/Nav'
// import { Footer } from '../Components/Footer'
// import { Shop } from '../Components/Shop'
import merch1 from "../assets/images/1.png"
import merch2 from "../assets/images/2.png"
import merch3 from "../assets/images/3.png"
// import Slider from '../Components/Slider'

export const Merch = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-yellow-400 to-[#F22223] h-full pt-32 pb-10 flex items-center justify-center md:flex-col text-white sm:flex-col'>
                <div className='w-fit h-fit bg-gray-500 flex items-center justify-center mx-28 rounded-xl shadow-2xl gap-48'>
                    <div className='flex items-center justify-center ml-28 my-32 border-4 border-black'>
                        <div>

                            <img src={merch1} alt="" className='w-[800px] hover:scale-150 duration-500 hover:cursor-pointer hover:shadow-2xl' />
                        </div>
                        <div>
                            <img src={merch2} alt="" className='w-[400px] hover:scale-[2.5] duration-500 hover:cursor-pointer hover:shadow-2xl' />
                            <img src={merch3} alt="" className='w-[400px] hover:scale-[2.5] duration-500 hover:cursor-pointer hover:shadow-2xl' />
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-[70%] flex flex-col items-start justify-center'>
                            <h3 className='text-4xl py-6 font-bold'>Roots Merchandise T-Shirt</h3>
                            <p className=''>Get ready to make a statement with our new t-shirt ! Made with high-quality, soft material, this shirt is perfect for any occasion. Whether you're hanging out with friends or running errands, this shirt will keep you comfortable and stylish. Plus, with its eye-catching design, you'll be turning heads wherever you go. Don't miss out on this must-have addition to your wardrobe. Order yours today!</p>
                        </div>
                        <div className='flex gap-36 pt-8 items-center justify-start'>
                            <div>
                                <p className='font-extrabold text-3xl'>₹385</p>
                            </div>
                            <div>
                                <button className='border-2 border-black p-2 rounded-3xl hover:bg-black hover:text-white hover:shadow-2xl duration-300'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
