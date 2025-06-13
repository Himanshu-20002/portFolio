'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Canvas = () => {
    const pathRef = useRef(null);
    const svgRef = useRef(null)
    const initialPath = `M 70 80 Q 700 80 1430 80`;

    useEffect(() => {
        const path = pathRef.current;
        const svg = svgRef.current;
        
        const updatePath = (e: MouseEvent) => {
            const mouseY = e.layerY
            ;
            const mouseX=  e.offsetX
            console.log(e)
            const controlY = mouseY * 1;
            const newPath = `M 70 80 Q ${mouseX} ${controlY} 1430 80`;

            gsap.to(path, {
                duration: 0.5,
                attr: { d: newPath },
                ease: "power2.out",
                overwrite: "auto"
            });
        };
        const resetPath = () => {
            gsap.to(path, {
                duration: 0.5,
                attr: { d: initialPath },
                ease: "power2.out"
            });
        }

        svg.addEventListener('mousemove', updatePath);
        svg.addEventListener('mouseleave', resetPath);
        return () => {
            svg.removeEventListener('mousemove', updatePath);
            svg.removeEventListener('mouseleave', resetPath);
        };
    }, []);

    return (
        <div id='curve' className='relative w-screen h-screen overflow-hidden bg-amber-300'>
            <svg ref={svgRef} width="100%" height="160" xmlns="http://www.w3.org/2000/svg" className='bg-blue-600'>
                <path 
                    ref={pathRef}
                    d={initialPath} 
                    stroke="white" 
                    fill="none" 
                    strokeWidth="2"

                />
            </svg>
        </div>
    );
};
export default Canvas;
