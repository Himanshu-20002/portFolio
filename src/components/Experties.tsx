import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { body } from 'motion/react-client'
gsap.registerPlugin(ScrollTrigger)
import TechStack from '@/src/components/TechStack'

const Experties = () => {

useGSAP(() => {
    const tl = gsap.timeline()
    tl.to('#Experience', {
        opacity: 0,
        ease: 'power1.inOut',
        transform: 'translateX(-100%)',
        duration: 3,
        scrollTrigger: {
        markers:true,
        trigger: '#parent',
        scroller:"body",
        start: 'top 0%',
        end: '+=500',
        scrub: 3,
        pin: true,
      },
    })
    tl.to('#TechStack',{
      opacity: 1,
      // ease: 'power1.inOut',
      transform: 'translateY(-40%)',
      duration:2,
      scrollTrigger: {
      markers:true,
      trigger: '#parent',
      scroller:"body",
      start: 'top 0%',
      end: '+=500',
      scrub: 5,
      },
      
    })
})


  return (
    <div id='parent' className='relative h-200vh w-screen '>

        <h1 id='Experience' className=' text-lime-500 text-[30vw] font-[600] opacity-0.2 '>Expertise:-</h1>
        <TechStack/>
    
    </div>
  )
}

export default Experties