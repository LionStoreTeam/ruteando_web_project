import React from 'react'
import HomePage from './pages/HomePage'
import BaseLogo from './components/BaseLogo'

export default function Home() {
  return (
    <main className='home p-5 flex flex-col h-[calc(100vh)] content-center items-center text-center'>
      <BaseLogo />
      <HomePage />
    </main>
  )
}
