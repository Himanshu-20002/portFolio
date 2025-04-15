import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { body } from 'motion/react-client'
import Rive, { useRive } from '@rive-app/react-canvas'
gsap.registerPlugin(ScrollTrigger)


const Section = () => {

    useGSAP(()=>{
        gsap.to('#titles',{
            transform: 'translateX(-100%)',
            scrollTrigger:{
                trigger:'#sticky',
                pin:true,
                scrub:1,
                start:'top 0%',
                end:"top -150%",
                markers:true

            }
        })
    })
  const { RiveComponent: SecondHero, rive: SecondRive } = useRive({
         src: '/developer.riv',
         autoplay: true,
         stateMachines: "State Machine 1",
     });


    const titleClass = "text-6xl font-bold text-white"
    const h1 ="text-[#dafa6c] absolute top-50% left-50% text-[9vw] italic will-change-transform   translate(-50%, -50%)"
    return (
        <div>
            <section id='hero' className='flex justify-center items-center  bg-cyan-400 min-h-screen'>
                <h1 className={titleClass}>Scroll if you dare</h1>
            </section>
            <section id='sticky' className=''>
                <div id='titles' className=' flex flex-1 will-change-transform   absolute top-0 left-0 w-[400vw] h-[100vh]'>
                    <div id='title' className=' flex-1 flex justify-center items-center'>
                        <h1 id='title-1' className='text-[#dafa6c] absolute top-50% left-50% text-[9vw] italic will-change-transform   translate(-50%, -50%)'>Showcase real</h1>
                        <h1 id='title-2' className='text-[#10d0f4] absolute top-50% left-50% text-[9vw] italic will-change-transform   translate(-50%, -50%)'>Showcase real</h1>
                        <h1 id='title-3' className='text-[#1f1f1f] absolute top-50% left-50% text-[9vw] italic will-change-transform translate(-50%, -50%)'>Showcase real</h1>
                    </div>
                    <div id='title' className=' flex-1 flex justify-center items-center'>
                        <h1 id='title-1'className={h1}>Dare to design</h1>
                        <h1 id='title-2'className={h1}>Dare to design</h1>
                        <h1 id='title-3'className={h1}>Dare to design</h1>
                    </div>
                    <div id='title' className=' flex-1 flex justify-center items-center'>
                        <h1 id='title-1'className={h1}>Creative by choice</h1>
                        <h1 id='title-2'className={h1}>Creative by choice</h1>
                        <h1 id='title-3'className={h1}>Creative by choice</h1>
                    </div>
                    <div id='title'className=' flex-1 flex justify-center items-center'>
                        <h1 id='title-1'className={h1}>Facncy & Smooth</h1>
                        <h1 id='title-2'className={h1}>Facncy & Smooth</h1>
                        <h1 id='title-3'className={h1}>Facncy & Smooth</h1>
                    </div>

                </div>
                <div id='images' className='absolute top-0 left-50 z-10 w-screen h-screen overflow-hidden z-[-100] '>
                    <SecondHero />
                  
                </div>

            </section>
           
            <section id="outro" className="flex justify-center items-center bg-cyan-400 min-h-screen">
                <h1 className={titleClass}>(That's a wrap)</h1>
            </section>
        </div>
    )
}

export default Section