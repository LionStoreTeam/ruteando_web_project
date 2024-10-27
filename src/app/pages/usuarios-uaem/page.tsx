"use client"
import BaseLogo from '@/app/components/BaseLogo'
import React from 'react'
import UaemUsersComponent from './Uaem_users_page'
import ButtonBack from '@/app/components/ButtonBack'

export default function UaemUsersPage() {
    return (
        <div className='p-5 flex flex-col justify-center items-center'>
            <BaseLogo />
            <ButtonBack />
            <UaemUsersComponent />
        </div>
    )
}
