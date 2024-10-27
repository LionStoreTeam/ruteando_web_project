"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Ruta_13() {
    const router = useRouter();

    const handleRegresar = () => {
        router.back();
    }
    return (
        <div className="flex flex-col justify-center items-center text-center">
            < div className="p-2 flex flex-row w-full gap-6 justify-center items-center text-center bg-blue-600 bg-opacity-15 rounded-bl-lg rounded-br-lg">
                <h1 className='text-[25px] font-extrabold text-blue-600 border-b-4 border-b-blue-600'>RUTA 13</h1>
                <Image src="/ruta_13.png" alt='image_ruta_13' width={100} height={100} className='border-b-4 border-b-black' />
            </div>
            <button className='m-5 p-2 rounded-xl text-white bg-blue-500'
                onClick={handleRegresar}
            >
                Regresar
            </button>
            {/* 1. UNIVERSIDAD - NARANJOS - SAN GASPAR - (JIUTEPEC)*/}
            <div className="mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-blue-800 border-t-yellow-600'>
                    1. UNIVERSIDAD - NARANJOS - SAN GASPAR - (JIUTEPEC)
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1Vfhrpge5wygV871GSAHzJVZ8ptUdrHxr&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 2. UNIVERSIDAD - LAS FUENTES - SAN GASPAR - (JIUTEPEC) */}
            <div className="mt-5 mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-blue-800 border-t-yellow-600'>
                    2. UNIVERSIDAD - LAS FUENTES - SAN GASPAR - (JIUTEPEC)
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=12Ptf-KtQEugrwSSHIrx0BulPLNOs0I05&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 3. JERUSALEN - LOMAS DE CHAMILPA - UNIVERSIDAD - POCHOTAL (JIUTEPEC) */}
            <div className="mt-5 mb-2 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-blue-800 border-t-yellow-600'>
                    3. JERUSALEN - LOMAS DE CHAMILPA - UNIVERSIDAD - POCHOTAL (JIUTEPEC)
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1egKNhe4W4dnH3tE2cqCEEtla952tRxZ5&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 4. UNIVERSIDAD-LA ROSA-JIUTEPEC */}
            <div className="mt-5 mb-2 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-blue-800 border-t-yellow-600'>
                    4. UNIVERSIDAD-LA ROSA-JIUTEPEC
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1AOiKKxKDo42K34IyjWFeq2q9WAXaff2F&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 5. UNIVERSIDAD - LA ROSA - COLONIA FRANCISCO VILLA (JIUTEPEC) */}
            <div className="mt-5 mb-2 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-blue-800 border-t-yellow-600'>
                    5. UNIVERSIDAD - LA ROSA - COLONIA FRANCISCO VILLA (JIUTEPEC)
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1rqJ6t70fgvq3a_iKwQMJpIKO17inRlIS&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
        </div >
    )
}
