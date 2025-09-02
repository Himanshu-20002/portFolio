import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
interface AnimatedTextLineProps {
    text: string;
    className?: string;
}

export const AnimatedTextLine: React.FC<AnimatedTextLineProps> = ({ text, className }) => {
    const containerRef = useRef(null)
    const lineRefs = useRef<HTMLSpanElement[]>([])

    const lines: string[] = text.split("\n").filter((line: string) => line.trim() !== "");
 useGSAP(()=>{
    if(lineRefs.current.length > 0){
        gsap.from(lineRefs.current,{
            y:100,
            opacity:0,
            duration:0.5,
            stagger:0.4,
            ease:"back.out",
            scrollTrigger:{
                trigger:containerRef.current,
                scrub: 1,
                start: "top +=120%",
                end: "+=200",
            }
        })
    }
 })


    return(
        <div ref={containerRef} className={className}>
            {lines.map((line: string, index: number) =>
            <span 
            key={index}
            ref={(el: HTMLSpanElement | null) => {
                if (lineRefs.current && el) {
                    lineRefs.current[index] = el;
                }
            }}
            className="block leading-relaxed tracking-wide text-pretty">
                
                {line}
                
                </span>)}
        </div>
    )
}