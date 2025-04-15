import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { body } from 'motion/react-client'
gsap.registerPlugin(ScrollTrigger)

const Experties = () => {

useGSAP(() => {
    const tl = gsap.timeline()
    tl.to('#Experience', {
        opacity: 1,
        ease: 'power1.inOut',
        transform: 'translateX(-100%)',
        duration: 3,
        scrollTrigger: {
        markers:true,
        trigger: '#parent',
        scroller:"body",
        start: 'top 0%',
        end: '+=500',
        scrub: true,
        pin: true,
      },
    })
})


  return (
    <div id='parent' className='relative h-dvh w-screen '>

        <h1 id='Experience' className=' text-lime-500 text-[30vw] font-[600] opacity-0.2 '>Expertise:-</h1>
        <p id='content' className='text-fuchsia-500 text-2xl'>/mobile/web/ai/3d/animation/design/marketing/strategy</p>
    </div>
  )
}

export default Experties