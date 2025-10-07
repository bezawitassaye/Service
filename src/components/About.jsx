import React from 'react'
import { Code, Megaphone, Share2, Users } from 'lucide-react'

const About = () => {
    return (
        <section id='about' className='relative overflow-hidden pt-20 sm:pt-20 md:pt-30 lg:pt-48 py-12 px-4 sm:px-6
             md:px-8 lg:py-16  lg:px-30 flex flex-col lg:flex-col items-center justify-center'>

            <div className='flex-1 w-full max-w-2xl mx-auto lg:mx-0 space-y-6
                   md:space-y-8 relative ' data-aos="fade-up" data-aos-delay="50">
                <h2 className='text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center lg:text-center '  >
                    We Provide The Best <span className='text-orange-500'>Services</span>
                    <span className='text-orange-500'>.</span>
                </h2>

                <p className='text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-center'   >
                    Let us unleash the full potential of your business <br />
                    with our data-driven strategies
                </p>
            </div>
            <div className="relative overflow-hidden md:px-8 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:mt-10 justify-items-center" data-aos="fade-up" data-aos-delay="100">

    <div className="p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg transition-all hover:shadow-xl text-center">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-pink-100 mb-3 md:mb-4 mx-auto">
            <Users className="text-pink-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Expert Team</h3>
        <p className="text-gray-600 text-xs md:text-sm">
            Our dedicated team of experts combines creativity and innovation to deliver outstanding results for your business.
        </p>
    </div>

    <div className="p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg transition-all hover:shadow-xl text-center">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-pink-100 mb-3 md:mb-4 mx-auto">
            <Megaphone className="text-pink-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Marketing</h3>
        <p className="text-gray-600 text-xs md:text-sm">
            We create powerful marketing strategies that boost visibility and drive lasting customer engagement.
        </p>
    </div>

    <div className="p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg transition-all hover:shadow-xl text-center">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-pink-100 mb-3 md:mb-4 mx-auto">
            <Share2 className="text-pink-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Viral Campaign</h3>
        <p className="text-gray-600 text-xs md:text-sm">
            We craft share-worthy campaigns that spark engagement and help your brand go viral across platforms.
        </p>
    </div>

    <div className="p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg transition-all hover:shadow-xl text-center">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-pink-100 mb-3 md:mb-4 mx-auto">
            <Code className="text-pink-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Developmet</h3>
        <p className="text-gray-600 text-xs md:text-sm">
            Our development team builds scalable and efficient solutions tailored to your business needs.
        </p>
    </div>
    <div></div>

</div>

          




        </section>
    )
}

export default About
