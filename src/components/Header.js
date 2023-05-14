import React from 'react';
import img1 from '../components/imgs/pat.png'
import img2 from '../components/imgs/NicePng_plate-of-food-png_546030 1.png'
import img3 from'../components/imgs/image 1 (1).png'

import {FiCheck} from 'react-icons/fi'

const Header = () => {
    return (
        <div>
            <div className="header flex flex-wrap justify-center py-8 p-5 overflow-hidden gap-6 lg:gap-0 bg-slate-100" >           
                <div className="header_text w-[630px]">
                    <img className='w-[200px] -mx-36 lg:-mt-20 hidden md:block' src={img1} alt="" />
                    <h2 className='text-[#396C03] text-5xl lg:-mt-32 py-3 font-mono font-semibold'>Order food online <br /> from your favourite <br /> local restaurants<span className='text-[#FF8B00]'>.</span></h2>
                    <p className='font-semibold text-gray-500 py-2'>Freshly made food delivered to your door. </p>
                    <div className="form-control mt-4 ">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered w-56 lg:w-96" />
                        <button className="btn btn-square bg-[#396C03] border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    </div>
                </div>
                <div className="img flex flex-wrap w-[480px] ">
                    <img className='w-32 h-32 absolute -mx-12 mt-10' src={img2} alt="" />
                    <img className='w-96 h-96 relative mt-14 z-10' src={img3} alt="" />
                    <div className="w-44 h-16 bg-gray-100 absolute mx-32 z-20 mt-6 text-center">
                        <h2 className='flex text-center text-2xl font-bold mx-8 text-[#FF8B00]'><FiCheck className='mt-1 text-white rounded-full mx-2 bg-[#FF8B00]' /> 200k+ </h2>
                        <p className='font-semibold text-gray-500'>People Delivered</p>
                    </div>
                    <img className='absolute mx-72 -mt-20 hidden md:block ' src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;