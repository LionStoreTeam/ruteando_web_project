"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Ruta_Aliados_Morelos() {
    const router = useRouter();

    const handleRegresar = () => {
        router.back();
    }
    return (
        <div className="flex flex-col justify-center items-center text-center">
            < div className="p-2 flex flex-row w-full gap-6 justify-center items-center text-center bg-cyan-600 bg-opacity-15 rounded-bl-lg rounded-br-lg">
                <h1 className='text-[25px] font-extrabold text-cyan-600 border-b-4 border-b-cyan-600'>RUTA ALIADOS MORELOS</h1>
                <Image src="/aliados_urban.png" alt='image_ruta_aliados_urban' width={100} height={100} className='border-b-4 border-b-black' />
            </div>
            <button className='m-5 p-2 rounded-xl text-white bg-cyan-500'
                onClick={handleRegresar}
            >
                Regresar
            </button>
            {/* 1. ACAPANTZINGO-CHAMILPA-ACAPANTZINGO*/}
            <div className="mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-cyan-500 border-t-green-600'>
                    1. ACAPANTZINGO-CHAMILPA-ACAPANTZINGO
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1Q5X4iwvPnjTQ819jSfdOjRjwtrCJPpkL&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
        </div >
    )
}
