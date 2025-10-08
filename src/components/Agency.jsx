import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import persones from "../assets/persone 3.png"
import worker from "../assets/worker.png"

const Agency = () => {

    useEffect(() => {
        AOS.init({
            duration: 400,
            once: true,
        });
    }, []);

    return (
        <section
    id='company'
    className='relative overflow-hidden pt-20 sm:pt-20 md:pt-30 lg:pt-30 lg:top-24 py-12 px-4 sm:px-6 md:px-8 lg:px-30 flex flex-col lg:flex-row items-center justify-center gap-4 '
>
    <div className='lg:w-1/2 flex flex-col justify-start items-center  text-center lg:text-left space-y-6' data-aos="fade-left">
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900'>
            Our <span className='text-orange-500'>Agency.</span>
        </h2>

        <p className='text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg'>
            We believe in the power of data. Our analytics-driven approach allows us to make informed decisions and optimize your marketing efforts for maximum ROI. Let's turn your data into actionable insights with tailored solutions for your business.
        </p>

        <div
            className='flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-6'
            data-aos="fade-up"
            data-aos-delay="200"
        >
            <button className='px-4 py-2 sm:px-5 sm:py-3 font-medium rounded-lg sm:rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors'>
                 Read More
            </button>
        </div>
    </div>

    {/* Image */}
     <img
    src={worker}
    alt='People working'
    className='w-5/6 sm:w-4/5 md:w-3/4 lg:w-full max-w-xl lg:max-w-2xl object-contain'
/>

    
</section>

    );
};

export default Agency;
