"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Ruta_15() {
    const router = useRouter();

    const handleRegresar = () => {
        router.back();
    }
    return (
        <div className="flex flex-col justify-center items-center text-center">
            < div className="p-2 flex flex-row w-full gap-6 justify-center items-center text-center bg-orange-600 bg-opacity-15 rounded-bl-lg rounded-br-lg">
                <h1 className='text-[25px] font-extrabold text-orange-600 border-b-4 border-b-orange-600'>RUTA 15</h1>
                <Image src="/ruta_15.png" alt='image_ruta_15' width={100} height={100} className='border-b-4 border-b-black' />
            </div>
            <button className='m-5 p-2 rounded-xl text-white bg-orange-500'
                onClick={handleRegresar}
            >
                Regresar
            </button>
            {/* 1. COL. PORVENIR-CIUDAD CHAPULTEPEC-CHAMILPA-UNIVERSIDAD*/}
            <div className="mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-orange-600 border-t-black'>
                    1. COL. PORVENIR-CIUDAD CHAPULTEPEC-CHAMILPA-UNIVERSIDAD
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1mPyj-xoswm0n7OhtFuaKqdi53wPpnNYl&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 2. COL. PORVENIR-COL. MORELOS-STA. MARTHA-CHAMILPA-UNIVERSIDAD */}
            <div className="mt-5 mb-5 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-orange-600 border-t-black'>
                    2. COL. PORVENIR-COL. MORELOS-STA. MARTHA-CHAMILPA-UNIVERSIDAD
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1pPR-tKvblMdprYPjNYmtZmMeqdXN_P9M&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
            {/* 3.- PORVENIR-COL. MORELOS-STA. MARIA-C.C.A.L.M.- CHAMILPA-UNIVERSIDAD */}
            <div className="mt-5 mb-2 flex flex-col gap-4 justify-center items-center text-center">
                <h1 className='text-[25px] font-semibold border-t-4 border-b-4 border-orange-600 border-t-black'>
                    3.- PORVENIR-COL. MORELOS-STA. MARIA-C.C.A.L.M.- CHAMILPA-UNIVERSIDAD
                </h1>
                <iframe src="https://www.google.com/maps/d/embed?mid=1FwcskMEWhp5ppvP_tA-H9vrvJOaGEYzF&ehbc=2E312F" width={320} height={400}></iframe>
            </div>
        </div >
    )
}
