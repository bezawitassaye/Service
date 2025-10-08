import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import persones from "../assets/persone 3.png"

const SimpleSolutions = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      id='company'
      className='relative bg-orange-50 overflow-hidden pt-20 sm:pt-24 md:pt-32 py-12 px-4 sm:px-6 md:px-8 lg:px-20 flex flex-col lg:flex-row justify-center items-center'
    >
      {/* Image */}
      <div className='flex-1 flex justify-center max-w-xl' data-aos="fade-right">
        <img
          src={persones}
          alt='People working'
          className='w-4/5 sm:w-3/4 md:w-2/3 lg:w-full max-w-lg object-contain'
        />
      </div>

      {/* Text */}
      <div className='flex flex-col justify-start items-start space-y-6' data-aos="fade-left">
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900'>
          We Provide The Best <span className='text-orange-500'>Services.</span>
        </h2>

        <p className='text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed'>
          We understand that no two businesses are alike — that’s why we take the time to understand you.
        </p>

        {[
          { n: 1, title: "Contact us", desc: "Contact us to boost your visibility" },
          { n: 2, title: "Consult", desc: "Always available to answer your questions" },
          { n: 3, title: "Place Order", desc: "Buy our package today to proceed" },
          { n: 4, title: "Payment", desc: "We receive payments through all banking methods" },
        ].map((item, i) => (
          <div
            key={i}
            className='flex flex-row items-center justify-center gap-10'
            data-aos="fade-up"
            data-aos-delay={100 * (i + 1)}
          >
            <h2 className='bg-orange-500 font-bold w-12 h-12 flex items-center justify-center text-white rounded-full'>
              {item.n}
            </h2>
            <div>
              <p className='font-medium text-gray-900 text-2xl'>{item.title}</p>
              <p className='text-gray-600'>{item.desc}</p>
            </div>
          </div>
        ))}

        <div className='flex flex-row items-center justify-center gap-10 mt-6' data-aos="fade-up" data-aos-delay="500">
          <button className='px-4 py-2 sm:px-5 sm:py-3 font-medium rounded-lg sm:rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors'>
            Get Started
          </button>
          <button className='px-4 py-2 sm:px-5 sm:py-3 font-medium border-orange-500 border-2 rounded-lg sm:rounded-xl bg-white text-orange-500 hover:bg-gray-100 transition-colors'>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimpleSolutions;
