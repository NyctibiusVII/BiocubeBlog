'use client'

import {
    OrbitControls,
    useGLTF
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {
    useEffect,
    useState
} from 'react'

const RubiksCube3D = () => {
    const cubeObj = useGLTF('/assets/cube/three/scene.gltf')

    const [cubeScale, setCubeScale] = useState(0.20)
    const [cubePosition, setCubePosition] = useState([0, -1, 0])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1080) setCubePosition([0, -1.3, 0])
            else if (window.innerWidth >= 640) setCubePosition([0, -0.9, 0])

            if (window.innerWidth < 640) return setCubeScale(0.20)
            else if (window.innerWidth <= 700) return setCubeScale(0.25)
            else if (window.innerWidth <= 1080) return setCubeScale(0.30)
            else setCubeScale(0.35)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Canvas className='w-full h-full max-w-[1366px] max-h-[768px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10' camera={{ position: [5, -2, 0] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight />
            <primitive object={cubeObj.scene} scale={cubeScale} position={cubePosition} />
        </Canvas>
    )
}

export default RubiksCube3D