"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Ruta_2() {
    const router = useRouter();

    const handleRegresar = () => {
        router.back();
    }
    return (
        <div className="flex flex-col justify-center items-center text-center">
            < div className="p-2 flex flex-row w-full gap-6 justify-center items-center text-center bg-red-300 bg-opacity-15 rounded-bl-lg rounded-br-lg">
                <h1 className='text-[25px] font-extrabold text-red-700 border-b-4 border-b-blue-700'>RUTA 2</h1>
                <Image src="/ruta_2.png" alt='image_ruta_2' width={100} height={100} className='border-b-4 border-b-black' />
            </div>
            <button className='m-5 p-2 rounded-xl text-white bg-red-500'
                onClick={handleRegresar}
            >
                Regresar
            </button>
            {/* 1.-COL. HERNANDEZ NAVARRO-RANCHO CORTES X DOMINGO DIEZ */}
            <div className="mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-red-700 border-t-blue-800'>
                    1.-COL. HERNANDEZ NAVARRO-RANCHO CORTES X DOMINGO DIEZ
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=15_MriG_dmzx4LCT-VKjEw7x_aPsVOEWx&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 2.-COL. HERNANDEZ NAVARRO-RANCHO CORTES X AV. EMILIANO ZAPATA */}
            <div className="mt-5 mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-b-red-700 border-t-blue-800'>
                    2.-COL. HERNANDEZ NAVARRO-RANCHO CORTES X AV. EMILIANO ZAPATA
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1uOImcFhtZIeusAEtVc4DqBSdBBFWvbiM&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 3.-COL. HERNANDEZ NAVARRO-CHIPITLáN */}
            <div className="mt-5 mb-2 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-red-700 border-t-blue-800'>
                    3.-COL. HERNANDEZ NAVARRO-CHIPITLáN
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1VTe-gZmnqTkEDY05XDeiGgxbqPdcg2BT&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
        </div >
    )
}
