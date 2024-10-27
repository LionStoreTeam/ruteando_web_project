"use client"
import BaseLogo from "@/app/components/BaseLogo";
import NormalUsersComponentZonaCentro from "./Normal_users__centropage";
import ButtonBack from "@/app/components/ButtonBack";

export default function ZonaCentroPage() {
    return (
        <div className="mt-5 flex flex-col justify-center items-center">
            <BaseLogo />
            <ButtonBack />
            <NormalUsersComponentZonaCentro />
        </div>
    )
}
