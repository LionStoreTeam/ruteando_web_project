"use client"
import BaseLogo from "@/app/components/BaseLogo"
import ButtonBack from "@/app/components/ButtonBack"
import Image from "next/image"

export default function ZonaOrientePage() {
    return (
        <div className="p-2 flex flex-col h-[calc(100vh)] justify-center items-center text-center">
            <ButtonBack />
            <div className="p-2 w-full h-full flex flex-col justify-center items-center bg-slate-500 bg-opacity-30 blur-[2px]">
                <BaseLogo />
                <h1 className='text-[25px] font-extrabold text-purple-800'>ZONA ORIENTE</h1>
                <h1 className='text-[25px] font-extrabold text-black'>CONTENIDO DISPONIBLE PRÓXIMAMENTE</h1>
                <Image src="/zona_oriente.png" alt="mapa_zona_oriente" width={300} height={300} />
            </div>
        </div>
    )
}
