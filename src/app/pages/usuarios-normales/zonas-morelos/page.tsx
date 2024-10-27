"use client"
import BaseLogo from '@/app/components/BaseLogo'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ButtonBack from '@/app/components/ButtonBack';

export default function ZonasMorelos() {
    return (
        <div className="mt-5 flex flex-col justify-center items-center">
            <BaseLogo />
            <ButtonBack />
            < div className="p-2 flex flex-col gap-4 justify-center items-center text-center rounded-bl-lg rounded-br-lg md:w-[600px]">
                <h1 className='text-[25px] font-extrabold text-cyan-600'>DIVISON DE ZONAS MORELOS</h1>
                <p>Para ver las
                    <b>
                        {" "}RUTAS{" "}
                    </b>
                    de cada zona toca la imagen de la
                    <b>
                        {" "}ZONA{" "}
                    </b>
                    que sea de tu interés (Las zonas ORIENTE y SUR estarán disponibles próximamente).

                </p>
            </div>
            {/* CENTRO */}
            <Link href="/pages/usuarios-normales/zonas-morelos/centro">
                <div className="mt-5 p-4 flex flex-col justify-center items-center text-center bg-pink-300 bg-opacity-30 rounded-xl">
                    <h1 className='text-[25px] font-extrabold text-pink-600 border-b-4 border-t-4 border-pink-600'>ZONA CENTRO</h1>
                    <Image src="/zona_centro.png" alt="mapa_zona_centro" width={300} height={300} />
                    <div className="flex flex-col justify-center items-center text-start">
                        <h2 className='text-[20px] font-semibold text-gray-800'>Las zonas que integran el área CENTRO son:</h2>
                        <ol className='pt-3 grid grid-cols-2 '>
                            <li className='text-pink-700 font-medium'>CUERNAVACA</li>
                            <li className='text-pink-700 font-medium'>JIUTEPEC</li>
                            <li className='text-pink-700 font-medium'>TEMIXCO</li>
                            <li className='text-pink-700 font-medium'>EMILIANO ZAPATA</li>
                            <li className='text-pink-700 font-medium'>XOCHITEPEC</li>
                            <li className='text-pink-700 font-medium'>HUITZILAC</li>
                            <li className='text-pink-700 font-medium'>TEPOZTLÁN</li>
                        </ol>
                    </div>
                </div>
            </Link>
            {/* ORIENTE */}
            <Link href="/pages/usuarios-normales/zonas-morelos/oriente">
                <div className="mt-5 mb-5 p-4 flex flex-col justify-center items-center text-center bg-purple-300 bg-opacity-30 rounded-xl">
                    <h1 className='text-[25px] font-extrabold text-purple-700 border-b-4 border-t-4 border-purple-700'>ZONA ORIENTE</h1>
                    <Image src="/zona_oriente.png" alt="mapa_zona_oriente" width={300} height={300} />
                    <div className="flex flex-col justify-center items-center text-start">
                        <h2 className='text-[20px] font-semibold text-gray-800'>Las zonas que integran el área ORIENTE son:</h2>
                        <ol className='pt-3 grid grid-cols-2 '>
                            <li className='text-purple-800 font-medium'>CUAUTLA</li>
                            <li className='text-purple-800 font-medium'>YECAPIXTLA</li>
                            <li className='text-purple-800 font-medium'>AXOCHIAPAN</li>
                            <li className='text-purple-800 font-medium'>TLAYACAPAN</li>
                            <li className='text-purple-800 font-medium'>OCUITUCO</li>
                            <li className='text-purple-800 font-medium'>ZACUALPAN</li>
                            <li className='text-purple-800 font-medium'>TEMOAC</li>
                            <li className='text-purple-800 font-medium'>CIUDAD AYALA</li>
                            <li className='text-purple-800 font-medium'>TEPALCINGO</li>
                            <li className='text-purple-800 font-medium'>ATLATLAHUCAN</li>
                            <li className='text-purple-800 font-medium'>YAUTEPEC</li>
                            <li className='text-purple-800 font-medium'>TOTOLAPAN</li>
                            <li className='text-purple-800 font-medium'>JANTETELCO</li>
                            <li className='text-purple-800 font-medium'>TLALNEPANTLA</li>
                            <li className='text-purple-800 font-medium'>JONACATEPEC</li>
                            <li className='text-purple-800 font-medium'>TETELA DEL VOLCÁN</li>
                        </ol>
                    </div>
                </div>
            </Link>
            {/* SUR */}

            <Link href="/pages/usuarios-normales/zonas-morelos/sur">
                <div className="mt-5 p-4 flex flex-col justify-center items-center text-center bg-amber-900 bg-opacity-30 rounded-xl">
                    <h1 className='text-[25px] font-extrabold text-amber-900 border-b-4 border-t-4 border-amber-900'>ZONA SUR</h1>
                    <Image src="/zona_sur.png" alt="mapa_zona_sur" width={300} height={300} />
                    <div className="flex flex-col justify-center items-center text-start">
                        <h2 className='text-[20px] font-semibold text-gray-800'>Las zonas que integran el área SUR son:</h2>
                        <ol className='pt-3 grid grid-cols-2 '>
                            <li className='text-amber-900 font-medium'>JOJUTLA</li>
                            <li className='text-amber-900 font-medium'>ZACATEPEC</li>
                            <li className='text-amber-900 font-medium'>AMACUZAC</li>
                            <li className='text-amber-900 font-medium'>PUENTE DE IXTLA</li>
                            <li className='text-amber-900 font-medium'>TETECALA</li>
                            <li className='text-amber-900 font-medium'>TLALTIZAPÁN</li>
                            <li className='text-amber-900 font-medium'>MIACATLÁN</li>
                            <li className='text-amber-900 font-medium'>COATLÁN DEL RÍO</li>
                            <li className='text-amber-900 font-medium'>MAZATEPEC</li>
                            <li className='text-amber-900 font-medium'>TLAQUILTENANGO</li>
                            <li className='text-amber-900 font-medium'>COATETELCO</li>
                            <li className='text-amber-900 font-medium'>XOXOCOTLA</li>
                        </ol>
                    </div>
                </div>
            </Link>
        </div>
    )
}
