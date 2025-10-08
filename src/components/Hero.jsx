import { Play } from 'lucide-react'
import React from 'react'
import persones from "../assets/persones.png"
import down from "../assets/down.png"
import up from "../assets/up.png"

const Hero = () => {
  return (
    <section className='relative overflow-hidden pt-20 sm:pt-20 md:pt-30 lg:pt-30 lg:top-24 py-12 px-4 sm:px-6
    md:px-8   lg:px-30 flex flex-col lg:flex-row items-center justify-between'>
   
      <div className='flex-1 lg:ml-28 justify-center w-full max-w-xl space-y-6 relative z-20'>
        <h2 className='text-4xl sm:text-5xl text-gray-900 text-center lg:text-left font-bold text-sty  ' data-aos="fade-right">
          We create <br /> <span className='text-orange-500'>solutions</span> for <br /> your business{""}
          <span className='text-orange-500'>.</span>
        </h2>

        <div className='flex mt-4 justify-center lg:justify-start ' data-aos="fade-right" data-aos-delay="100">
          <p className='text-gray-700 text-xl '>
            Our team keeps eye on emerging trends <br /> and technologies to
            ensure your marketing <br /> campaigns remain cutting-edge
          </p>
        </div>

        <div className='pt-2 flex mt-4 justify-center lg:justify-start' data-aos="fade-right" data-aos-delay="100">

          <button className='px-4 py-2 sm:px-5 sm:py-3 font-medium   rounded-lg sm:rounded-xl bg-orange-500 text-white  hover:bg-orange-600 transition-colors'>Get Started</button>

        </div>

        <div className='pt-2 flex mt-4 justify-center lg:justify-start gap-4 items-center' data-aos="fade-right" data-aos-delay="100">

          <button className="flex items-center justify-center bg-white p-4 rounded-full shadow-lg shadow-orange-500/50 transition">
            <Play className="w-6 h-6 text-orange-500 fill-orange-500" />
          </button>

          <span className='text-gray-900 font-medium'>Explore more</span>

        </div>



      </div>

      <div className='flex-1 mt-12 lg:mt-0 lg:ml-12 relative w-full flex justify-center' data-aos="zoom-in" data-aos-delay="200">
        <img src={persones} className='' alt="" />

      </div>

     

    </section>
  )
}

export default Hero
