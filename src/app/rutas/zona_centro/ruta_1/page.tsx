"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Ruta_1() {
    const router = useRouter();

    const handleRegresar = () => {
        router.back();
    }
    return (
        <div className="flex flex-col justify-center items-center text-center">
            < div className="p-2 flex flex-row w-full gap-6 justify-center items-center text-center bg-amber-300 bg-opacity-15 rounded-bl-lg rounded-br-lg">
                <h1 className='text-[25px] font-extrabold text-yellow-300 border-b-4 border-b-yellow-400'>RUTA 1</h1>
                <Image src="/ruta_1.png" alt="image_ruta_1" width={100} height={100} className='border-b-4 border-b-black' />
            </div>
            <button className='m-5 p-2 rounded-xl text-white bg-yellow-500'
                onClick={handleRegresar}
            >
                Regresar
            </button>
            {/* 1.-UNIVERSIDAD-GUACAMAYAS */}
            <div className="mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-yellow-300'>
                    1. UNIVERSIDAD-GUACAMAYAS
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1ESMT23sgrurRqYRoIOM4zNyq5SfB7Nve&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 2.-JERUSALEN-UNIVERSIDAD-ACATLIPA */}
            <div className="mt-5 mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-yellow-300'>
                    2. JERUSALEN-UNIVERSIDAD-ACATLIPA
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1aikJgkBesxmf4u1S215KwhNaK3b4zjxL&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 3.-JERUSALEN-GUACAMAYAS */}
            <div className="mt-5 mb-2 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-yellow-300'>
                    3. JERUSALEN-GUACAMAYAS
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=111ApNvwiosIsd-zGNWg3gATpQCyHOSqL&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
        </div >
    )
}
