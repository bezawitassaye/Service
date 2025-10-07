import React from 'react'

const About = () => {
  return (
    <section id='about' className='relative overflow-hidden py-12px px-4 sm:py-16 md:py-20 md:px-12 lg:px-20 flex flex-row lg:flex-row items-center justify-center'>
        <div className='flex-1 w-full max-w-2xl mx-auto lg:mx-0 space-y-6
        md:space-y-8 relative '>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center lg:text-center '>
                We Provide The Best <span className='text-orange-500'>Services</span>
                 <span className='text-orange-500'>.</span>
            </h2>

        </div>
    </section>
  )
}

export default About
