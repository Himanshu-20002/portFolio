'use client'
import React from 'react'



const navItems =['about','portfolio','contact','likes']

const Navbar = () => {
    const nevContainerRef = React.useRef(null)
  return (
    <div
    ref={nevContainerRef}
    className='fixed z-50 h-16  border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute  w-full'>
        <nav className='flex size-full  item-center justify-between'>
            <div className='flex items-center gap-5 '>
                <a href='/' className='nav-hover-btn '>
                    <img src='/img/dev.png' alt='Logo' className='w-16 h-10 rounded-sm  ' />
                </a>
                {/* <Button
                id="product-button"
                title="Product"
                rightIcon={<TiLocationArrow/>}
                containerClass="!bg-blue-50 md:flex   hidden  item-center justify-center gap-1 rounded-full"/> */}
            </div>

            <div className='flex h-full items-center p-5 '>
                <div className='hidden md:block'>
                    {navItems.map((item, index) => (
                       <a className='nav-hover-btn' key={index} href={`#${item.toLowerCase()}`}>
                        {item}

                       </a>
                    ))}


                </div>
                

            </div>
        </nav>
        </header>

    </div>
  )
}

export default Navbar