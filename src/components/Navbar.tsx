'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from "lucide-react"

const navItems = ['about', 'portfolio', 'contact', 'likes']

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const nevContainerRef = React.useRef(null)

    return (
        <div
            ref={nevContainerRef}
            className='fixed z-[100] w-full h-16 transition-all duration-700 top-0 left-0 px-4 sm:px-8'>
            <header className='relative w-full h-full bg-black/20 backdrop-blur-2xl border-b border-white/10 rounded-2xl mt-2 overflow-hidden group/nav'>
                {/* Full Navbar Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
                <div className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700" />
                <nav className='container mx-auto h-full flex items-center justify-between px-6'>
                    <div className='flex items-center gap-3 group'>
                        <Link href='/' aria-label="Home" className='flex items-center gap-2 text-white font-bold tracking-tighter text-xl uppercase'>
                            <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-500">
                                {/* Integrated Moon Glows */}
                                <div className="absolute inset-[-4px] rounded-full bg-cyan-400/40 blur-xl animate-pulse" />
                                <div className="absolute inset-0 rounded-full bg-white/20 blur-md" />
                                <Image
                                    src="/img/moon.png"
                                    alt="Celestial moon logo"
                                    width={32}
                                    height={32}
                                    className="relative z-10 object-contain animate-slow-spin mix-blend-screen brightness-150"
                                />
                            </div>
                            <span className="group-hover:text-purple-400 transition-colors">
                                Himanshu<span className='text-purple-500'>.</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center gap-10' role="list">
                        {navItems.map((item, index) => (
                            <Link
                                className='text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110'
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                aria-label={`Navigate to ${item} section`}
                                role="listitem"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className='md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>

            </header>
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className='absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col p-8 gap-8 md:hidden animate-in fade-in zoom-in-95 duration-300 z-[101] shadow-2xl'>
                    {navItems.map((item, index) => (
                        <Link
                            className='text-2xl uppercase tracking-[0.3em] text-white font-black italic hover:text-purple-400 transition-colors'
                            key={index}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Navbar