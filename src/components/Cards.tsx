'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { i, object, svg } from 'motion/react-client'
import { Postr1 } from '../svg/index'
import { nb  as Nb} from '../svg/index'
// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const Cards = () => {
    
    //card array
    const cardArray =[
        { id: 1, image: <Postr1 width='100%' height='108%' styles={{ objectFit: 'cover' }} /> },
        { id: 2, image: <Nb width='100%' height='130%' styles={{ objectFit: 'cover' }} /> },
        { id: 3, image: <Postr1 width='100%' height='108%' styles={{ objectFit: 'cover' }} /> }
    ]



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
                scrub: 3,
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
                        { x: window.innerWidth * 0.3, y: 200 },
                        { x: window.innerWidth * 0.6, y: 200 },
                        { x: -window.innerWidth, y: 30 }
                    ],
                curviness: 1.5,
                autoRotate: false
            },
            scale: 0.8,
            ease: "power1.inOut"
        });

    }, []);

    return (
        <div className='flex-1 w-screen overflow-x-hidden  '>

            <section className='steps bg-gray-950' id='steps'>
                <div className='step-counter'>
                    <div className='counter-title'>
                        <h1 className='text-white mt-2.5 pt-20'>knowing by doing-</h1>
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
                            <div className='card-image contain-content w-full h-full'>
                                {/* <Postr1 width='100%' height='108%' styles={{ objectFit: 'cover' }} /> */}
                                {/* <Nb width='100%' height='100%' styles={{ objectFit: 'cover' }} /> */}
                                {cardArray[index % cardArray.length].image}
                                
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