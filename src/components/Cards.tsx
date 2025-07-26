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

const cardArray =[
    { id: 1, image: <Postr1 width='100%' height='108%' styles={{ objectFit: 'cover' }} /> },
    { id: 2, image: <Nb width='100%' height='130%' styles={{ objectFit: 'cover' }} /> },
    { id: 3, image: <Postr1 width='100%' height='108%' styles={{ objectFit: 'cover' }} /> }
]
const Cards = () => {
    
    //card array
  



    const cardsRef = useRef(null);
    const stickySecton = document.querySelector('.steps');
    const stickyHeight = window.innerHeight *7;
    const cards = document.querySelector('.card');
    const countContainer = document.querySelector('.count-container');
    const totalCards = 3;
   



    const getRadius =()=>{
        return window.innerWidth < 900 ? window.innerWidth * 7.5 : window.innerWidth *2.5
         
    }

    const arcAngle = Math.PI * 0.4;
    const startArc = Math.PI /2 - arcAngle/2
 
    const positionCards = (progress: number, cards: HTMLCollection) => {
        const radius = getRadius();
        const totalTravel = 1 + totalCards / 7.5;
        const adjustedProgress = (progress * totalTravel - 1) * 0.75;

        Array.from(cards).forEach((card, i) => { //convert to array
            const normalizedProgress = i / (totalCards - 1); // Corrected normalization
            const cardProgress = normalizedProgress + adjustedProgress;
            const angle = startArc + arcAngle * cardProgress;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

            gsap.set(card, {
                x: x,
                y: -y + radius,
                rotation: -rotation,
                transformOrigin: 'center center'
            });
        });
    };


    useGSAP(() => {


        // Define SVG path for more complex motion
      //  const path = `M100,200 C100,100 400,100 400,200 c100,200 400,100 300,0`;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#steps",
                start: "top top",
                end: "+=200%",
                scrub: 3,
                pin: true,
                markers: true,

                onUpdate:(self)=>{
                    positionCards(self.progress, cards);

                }
            }
        });

        // Animate each card with stagger
        // tl.to(cards, {
        //     duration: 2,
        //     stagger: 0.2,
        //     motionPath: {
        //       path: [
        //         { x: window.innerWidth, y: 100 }, // Start off-screen right
        //         { x: window.innerWidth * 0.75, y: 200 }, // Control point 1
        //         { x: window.innerWidth * 0.25, y: 200 }, // Control point 2
        //         { x: -window.innerWidth, y: 100 } // End off-screen left
        //       ],
        //       curviness: 1.5,
        //       autoRotate: false
        //     },
        //     scale: 0.8,
        //     ease: "power1.inOut"
        //   });
       

    }, []);

    return (
        <div className='flex-1 w-screen overflow-x-hidden pt-90 h-[300vh] bg-black'>

            <div  id='steps'>
                <div className='step-counter'>
                    <div className='counter-title'>
                        <h1 className='text-white mt-2.5 pt-20 text-4xl'>STEPS</h1>
                    </div>
                    <div className='count'>
                        <div className='count-container'>
                            <h1>01</h1>
                            <h1>02</h1>
                            <h1>03</h1>
                            <h1>04</h1>
                            <h1>05</h1>

                        </div>

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
            </div>
            
        </div>
    )
}

export default Cards