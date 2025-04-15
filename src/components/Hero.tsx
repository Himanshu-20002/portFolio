'use client'
import { useRive } from '@rive-app/react-canvas';
import React, { useState, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // First Rive component
    const { RiveComponent, rive } = useRive({
        src: '/skull.riv',
        autoplay: isClient,
        stateMachines: "State Machine 1",
    });

    // Second Rive component
    const { RiveComponent: SecondHero, rive: SecondRive } = useRive({
        src: '/hero.riv',
        autoplay: isClient,
        stateMachines: "MainStateMachine",
    });

    // Background hero component
    const { RiveComponent: BgHero, rive: BgRive } = useRive({
        src: '/herobg.riv',
        autoplay: isClient,
        stateMachines: "State Machine 1",
    });

    useGSAP(() => {
        if (isClient && typeof window !== 'undefined') {
            gsap.from('#rive-canvas', {
                duration: 1,
                rotate: 360,
                borderRadius: '0%',
                transformOrigin: 'center center',
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: 'onscroll',
                    start: 'center center',
                    end: 'bottom center',
                    scrub: true,
                },
            });
        }
    }, [isClient]);

  


    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to('#title', {
            duration: 1,
            opacity: 1,
            ease: 'power1.inOut',
            x: 10
        })
        tl.to('#developer', {
            duration: 0.5,
            opacity: 1,
            color: 'lime',
            ease: 'power1.inOut',
        }),
            tl.to('#description', {
                duration: 1,
                opacity: 1,
                ease: 'power1.inOut',
                x: -20
            })


    })

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden  bg-gradient-to-t from-indigo-500 from-10% via-blue-400 via-30% to-black to-90%'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg'>
                <div className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden fit-stretch cursor-zoom-in'>

                    <BgHero />
                </div>
                <div className=' relative top-0 left-5'>
                    <h1 className='absolute top-50 left-5 text-white text-6xl z-10 font-bold'>
                        hi ,<span className='text-red-600'>I'm </span>
                    </h1>
                    <h1 className='absolute top-70 left-40 text-black text-6xl z-10 font-bold -translate-x-1/2 -translate-y-1/2'>
                        Himanshu
                    </h1>
                    <h2 id='title' className='absolute top-80 left-4 text-2xl z-10 font-bold opacity-0'>
                     A <span id='developer'>developer</span> and <span id='designer' className=' hover:text-red-600'>Web designer</span>
                    </h2>
                    <p id='description' className='absolute top-90 left-10 text-xl z-10  text-left text-grey-500 italic opacity-0'>
                    "Designer by day, developer by night—basically "
                        <br />a Batman who fights bad UX instead of criminals.
                    </p>
                    {/* <p id='description' className='absolute top-90 left-10 text-xl z-10  text-left text-grey-500 italic opacity-0'>
                        i like to craft solid and scalable web products and designs
                        <br /> with great user experience and interactivity
                    </p> */}

                    <button className='absolute top-120 left-6 bg-blue-600 z-10 font-bold text-left text-white rounded-lg px-4 py-2'>
                        Get in touch
                    </button>
                </div>
                <div className='absolute top-0 left-50 z-10 w-screen h-screen overflow-hidden'>
                    <SecondHero />
                </div>
                <div id='rive-canvas' className='absolute top-9 left-90 z-30 fixed w-120 h-200 overflow-hidden'>
                    <RiveComponent />
                </div>
            </div>
        </div>
    )
}

export default Hero