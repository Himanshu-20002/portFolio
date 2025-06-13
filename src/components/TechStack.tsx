import React from 'react'
import StyleSheet  from 'react'

const TechStack = () => {
    return (
        <div id='TechStack' className='relative h-dvh w-screen'>
            <div className='h-dvh w-screen grid grid-cols-3 gap-10 place-items-center'>
                <div className="h-14 bg-violet-400"><p className='text-white 5xl:text-6xl uppercase'>html</p></div>
                <div className="h-14 bg-violet-500"><p>css</p></div>
                <div className="h-14 bg-violet-800"><p>react</p></div>
                <div className="h-14 bg-violet-900"><p>tailwind</p></div>
                <div className="h-14 bg-violet-100"><p>typescript</p></div>
                <div className="h-14 bg-violet-400"><p>rive</p></div>
                <div className="h-14 bg-violet-400"><p>gsap</p></div>
                <div className="h-14 bg-violet-400"><p>react-three-fiber</p></div>
                <div className="h-14 bg-violet-400"><p>three.js</p></div>
            </div>
            <div id='highlight' className=''></div>
        </div>
    )
}


export default TechStack