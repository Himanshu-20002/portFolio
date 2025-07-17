'use client'
import React from 'react'
import {Canvas} from '@react-three/fiber'
import Model from '@/src/components/3d/Model'
import { Environment, OrbitControls } from '@react-three/drei'

export default function Scene(){
    return(
        <Canvas
        camera={{ position: [0, 1.5, 5], fov: 20 }}
        style={{ width: '100%', height: '120vh'  }}
    >

        <ambientLight intensity={0.5} />
        <Environment preset="studio" />
        <Model/>
        <OrbitControls enableZoom={true} />
    </Canvas>
    )
}