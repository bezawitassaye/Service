import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import up from "../assets/up.png"

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    
    { name: "Company", href: "#company" }
]

const Navbar = () => {
    const [ismenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!ismenuOpen);


    return (
        <nav className='fixed w-full  top-0 left-0
    right-0 z-50'>
            <div className='max-w-7xl bg-gray-50 mx-auto px-4 sm:px-6 md:px-12
        lg:px-20 py-3 md:py-4 flex items-center justify-between'>
                {/*logo*/}
                <div className='flex items-center text-xl sm:text-2xl md:text-3xl  font-bold text-gray-900'>
                    <div className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  rounded-full border-4 border-orange-500 text-orange-500 mr-2 '>
                        P
                    </div>
                    <span>
                        ro <span>
                            Service
                        </span>
                    </span>

                </div>
                {/* Links */}
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium'>
                    {navItems.map(({ name, href }) => (
                        <li key={name}>
                            <a href={href} className='hover:text-orange-500 cursor-pointer transition-colors'>
                                {name}
                            </a>

                        </li>
                    ))}

                </ul>
                {/*buttons*/}
                <div className='hidden md:block'>
                    <button className='px-4 py-2 sm:px-5 sm:py-3 font-bold   rounded-lg sm:rounded-xl bg-orange-500 text-white  hover:bg-orange-600 transition-colors'>Sign Up</button>
                </div>


                {/* Menu */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='p-1 rounded-md focus:outline-none focus:ring-2 focus:orange-400'>
                        {ismenuOpen ? (
                            <X className='w-6 h-6 text-gray-700' />
                        ) : (
                            <Menu className='w-6 h-6 text-gray-700' />
                        )
                        }

                    </button>

                </div>
            </div>

            {ismenuOpen && (
                <div className='md:hidden bg-white shadow-lg border-t border-gray-200'>
                    <div className='px-4 py-3 space-y-3'>
                        {
                            navItems.map(({ name, href }) => (
                                <a key={name}
                                    href={href}
                                    className='block py-2 px-4 text-gray-700
                            hover:bg-gray-100 rounded-lg hover:text-orange-400 transition-colors'
                                    onClick={() => setIsMenuOpen(false)} >{name}</a>
                            ))
                        }
                        <div className='pt-2'>
                            <button className='w-full py-2 rounded-lg
                        bg-orange-400 text-white font-medium
                        hover:bg-orange-500 transition-colors'>
                                Sign Up

                            </button>
                        </div>

                    </div>

                </div>

            )}
            
        </nav>
    )
}

export default Navbar
