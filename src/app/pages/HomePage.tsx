"use client"
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="mt-5 p-2 flex flex-col">
            <div className="p-2 flex flex-col justify-center items-center gap-6">
                <div className="p-2 flex flex-col md:w-[600px] text-[10px] hover:scale-110 transition-all ease-linear duration-300">
                    <p>La denominación{" "}
                        <b>
                            <i>
                                RUTA (Red Urbana de Transporte Articulado)
                            </i>
                        </b>{" "}
                        es asignada para algunos caminones de <i> Trasporte Ciudadano</i> en el estado de Morelos, ejemplo: {" "}
                        <i>
                            RUTA 1, RUTA 13, RUTA 20.
                        </i>
                    </p>
                </div>
                <div className="p-2 flex flex-col bg-blue-300 bg-opacity-20 rounded-md hover:scale-110 transition-all ease-linear duration-300 md:w-[600px]">
                    <h1>Si eres
                        <b>
                            {" "}Usuario{" "}
                        </b>
                        perteneciente a la
                        <b>
                            {" "}UAEM{" "}
                        </b>
                        Presiona el botón de <i>Mostrar RUTAS UAEM </i>
                        para ver las RUTAS que se dirigen o salen de la UAEM Campus Chamilpa.
                    </h1>
                    <div className="p-2 flex justify-center items-center">
                        <Image src="https://www.uaem.mx/vida-universitaria/identidad-universitaria/images/uaem-logo.png" alt="uaem_logo" width={120} height={120} />
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <Link href="/pages/usuarios-uaem" className="p-2 rounded-md bg-blue-900 text-white hover:bg-blue-700 transition-all ease-linear"
                        >
                            Mostrar RUTAS UAEM
                        </Link>
                    </div>
                </div>
                <div className="p-2 flex flex-col bg-cyan-300 bg-opacity-20 rounded-md md:w-[600px] hover:scale-110 transition-all ease-linear duration-300">
                    <h1>Si eres
                        <b>
                            {" "}Usuario Normal{" "}
                        </b>
                        Presiona el botón de <i>Mostrar Todas las RUTAS </i>
                        para ver todas las RUTAS de la entidad separada por áreas.
                    </h1>
                    <div className="p-2 flex justify-center items-center">
                        <Image src="https://static-00.iconduck.com/assets.00/user-group-illustration-2048x1508-3m8qw8mc.png" alt="users_home_logo" width={120} height={120} />
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <Link href="/pages/usuarios-normales/zonas-morelos" className="p-2 rounded-md bg-cyan-300 hover:bg-cyan-400 transition-all ease-linear"
                        >
                            Mostrar Todas las RUTAS
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;