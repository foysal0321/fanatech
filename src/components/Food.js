import React from 'react';
import man from '../components/imgs/cycle.png'
import bg from '../components/imgs/image 2.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Food = () => {
    return (
        <div className='py-6 max-w-[1100px] mx-auto'>
            <div className="food flex flex-wrap p-5">
                <div className="food-text w-[300px] lg:w-[430px] lg:mt-32">
                    <h3 className='text-[#396C03] text-4xl py-3 font-mono font-semibold'>Explore your <br /> favourite city’s food.</h3>
                    <p >Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>
                    <button className='flex bg-[#396C03] btn-md btn text-white rounded-full mt-4'>Exploer <AiOutlineArrowRight className='mt-1 text-sm mx-1' /> </button>
                </div>
                <div className="food-img bg-no-repeat w-[300px] lg:w-[600px] h-[400px]" style={{backgroundImage: `url("${bg}") `}}>
                    <img className='mx-1 lg:mx-16 w-[300px] lg:w-[600px] h-[500px]' src={man} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Food;