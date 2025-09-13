'use client'

import Link from 'next/link'
import React from 'react'



const navItems = ['about', 'portfolio', 'contact', 'likes']

const Navbar = () => {
    const nevContainerRef = React.useRef(null)
    return (
        <div
            ref={nevContainerRef}
            className='fixed z-50 h-16  border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute  w-full'>
                <nav className='flex size-full  item-center justify-between'>
                    <div className='flex items-center gap-5' style={{ width: "100%", height: "100%", position: "relative" }}>
                        <Link href='/' className='nav-hover-btn'>
                            {/* <Image
                                src='/img/dev.png'
                                alt='Logo'
                                width={34}    // equivalent to w-16
                                height={40}   // equivalent to h-10
                                className='rounded-sm'
                                priority      // Logo should load first
                            /> */}
                        </Link>
                    </div>

                    <div className='flex h-full items-center p-5 '>
                        <div className='hidden md:block'>
                            {navItems.map((item, index) => (
                                <Link
                                    className='nav-hover-btn'
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                >
                                    {item}
                                </Link>
                            ))}


                        </div>


                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Navbar