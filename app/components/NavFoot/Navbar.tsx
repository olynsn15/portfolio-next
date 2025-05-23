"use client"
import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef<HTMLUListElement | null>(null);

    const openMenu = () => {
        if(sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)'
        }
    }

    const closeMenu = () => {
        if(sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50){
                setIsScroll(true)
            }
            else{
                setIsScroll(false)
            }
        })
    }, [])


  return (
    <>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex md:justify-center justify-end z-50 ${isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20' : ''}`}>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 cursor-pointer ${isScroll ? '' : 'bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent'}`}>
            <li><a className='font-lexend-deca' href='#top'>Home</a></li>
            <li><a className='font-lexend-deca' href='#about'>About</a></li>
            <li><a className='font-lexend-deca' href='#experiences'>Experiences</a></li>
            <li><a className='font-lexend-deca' href='#project'>Projects</a></li>
            <li><a className='font-lexend-deca' href='#contact'>Contact Me</a></li>
        </ul>

        <div className='flex items-end gap-4'>

            <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                <Image src={assets.menu_black} alt='menu icon' className='w-6 dark:hidden'/>
                <Image src={assets.menu_white} alt='menu icon' className='w-6 hidden dark:flex'/>
            </button>
        </div>

        {/* RESPONSIVE MENU */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-bg-purple transition duration-500 dark:bg-dark-hover dark:text-white'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt='close icon' className='w-5 cursor-pointer dark:hidden'/>
                <Image src={assets.close_white} alt='close icon' className='w-5 cursor-pointer hidden dark:flex'/>
            </div>
            <li><a className='font-lexend-deca' onClick={closeMenu} href='#top'>Home</a></li>
            <li><a className='font-lexend-deca' onClick={closeMenu} href='#about'>About</a></li>
            <li><a className='font-lexend-deca' onClick={closeMenu} href='#experiences'>Experiences</a></li>
            <li><a className='font-lexend-deca' onClick={closeMenu} href='#project'>Projects</a></li>
            <li><a className='font-lexend-deca' onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar