"use client"
import {sliderData} from "@/components/constants"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SliderProps {
  images?: string[]
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
}

export function Slider() {
    return(
        <div className="slider relative overflow-hidden  w-screen h-[100dvh]">
            <div className="slide-track absolute w-100% h-100% flex">


            </div>

        </div>

    

    )
}
