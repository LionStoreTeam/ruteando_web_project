"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Ruta_3() {
    const router = useRouter();

    const handleRegresar = () => {
        router.back();
    }
    return (
        <div className="flex flex-col justify-center items-center text-center">
            < div className="p-2 flex flex-row w-full gap-6 justify-center items-center text-center bg-red-300 bg-opacity-15 rounded-bl-lg rounded-br-lg">
                <h1 className='text-[25px] font-extrabold text-red-600 border-b-4 border-b-red-600'>RUTA 3</h1>
                <Image src="/ruta_3.png" alt='image_ruta_3' width={100} height={100} className='border-b-4 border-b-black' />
            </div>
            <button className='m-5 p-2 rounded-xl text-white bg-red-500'
                onClick={handleRegresar}
            >
                Regresar
            </button>
            {/* 1.-SANTA MARíA-ALPUYECA */}
            <div className="mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-red-600'>
                    1.-SANTA MARíA-ALPUYECA
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1ffPVeYas7VrFoAQqY82GW-5V8AXdiDGN&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 2.-SANTA MARÍA-RANCHO CORTÉS-MINA 5 */}
            <div className="mt-5 mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-red-600'>
                    2.-SANTA MARÍA-RANCHO CORTÉS-MINA 5
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1UqGXch36byQiPW8rvmQgUHUzneNoJ_T7&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 3.-TETELA DEL MONTE-MINA 5 TETELA DEL MONTE */}
            <div className="mt-5 mb-2 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-red-600'>
                    3.-TETELA DEL MONTE-MINA 5 TETELA DEL MONTE
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1AuVZUW6QeaWTr3Q5M8W_N5D8w3oI9p6O&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 4.-SANTA MaRíA-BUENA VISTA-CALERA */}
            <div className="mt-5 mb-2 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-red-600'>
                    4.-SANTA MaRíA-BUENA VISTA-CALERA
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1MzeHBxdkB0k-wd3F5UE4ABvSjQGF_YQC&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 5.-SANTA MARÍA-BUENA VISTA-FRANCISCO VILLA */}
            <div className="mt-5 mb-2 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-red-600'>
                    5.-SANTA MARÍA-BUENA VISTA-FRANCISCO VILLA
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1ky3E0Cz9YqMRWsfho8KGnySng8tt3sqk&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
        </div >
    )
}
