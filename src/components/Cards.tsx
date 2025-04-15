'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const Cards = () => {

    const cardsRef = useRef(null);

    useGSAP(() => {
      
        const cards = document.querySelectorAll('.card');

        // Define SVG path for more complex motion
        const path = `M 0 0 C 200 -100, 400 -100, 600 0`;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#steps",
                start: "top top",
                end: "+=200%",
                scrub: 1,
                pin: true,
                markers: true
            }
        });

        // Animate each card with stagger
        tl.to(cards, {
            duration: 2,
            stagger: 0.2,
            motionPath: {
                path:
                 [
                    { x: 0, y: 0 },
                    { x: window.innerWidth * 0.3, y: 100 },
                    { x: window.innerWidth * 0.6, y: 50 },
                    { x: -window.innerWidth, y: 0 }
                ],
                curviness: 1.5,
                autoRotate: true
            },
            scale: 0.8,
            ease: "power1.inOut"
        });

    }, []);

    return (
        <div className='flex-1 w-screen overflow-x-hidden  '>
            
            <section className='steps' id='steps'>
                <div className='step-counter'>
                    <div className='counter-title'>
                        <h1 className='mt-2.5 pt-20'>knowing by doing-</h1>
                    </div>
                   
                </div>
                <div
                    ref={cardsRef}
                    className='cards relative flex gap-8 p-8 min-h-[600px]'
                    style={{
                        perspective: '1000px',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            id='card'
                            className='card transform-gpu w-72 h-96 bg-white rounded-xl shadow-lg overflow-hidden'
                        >
                            <div className='card-image w-full h-full'>
                                <img
                                    src='/img/card-1.png'
                                    alt='card'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>
                    ))}
                    <div className='card-empty w-72 h-96'></div>
                    <div className='card-empty w-72 h-96'></div>
                </div>
            </section>
            <section className='outro'>
                <p className='w-2xl text-center line-clamp-5'>Our 3d designs are made with creativity and attention to detail. We are passionate about creating beautiful and functional products that enhance the user experience. <span>crfting stunning visuals and prototypes</span></p>


            </section>
        </div>
    )
}

export default Cards