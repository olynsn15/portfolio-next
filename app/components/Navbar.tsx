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
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-center z-50 ${isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20' : ''}`}>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent'}`}>
            <li><a className='font-ovo' href='#top'>Home</a></li>
            <li><a className='font-ovo' href='#about'>About</a></li>
            <li><a className='font-ovo' href='#services'>Services</a></li>
            <li><a className='font-ovo'href='#work'>My Work</a></li>
            <li><a className='font-ovo' href='#contact'>Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={assets.menu_black} alt='menu icon' className='w-6 dark:hidden'/>
                <Image src={assets.menu_white} alt='menu icon' className='w-6 hidden'/>
            </button>
        </div>

        {/* RESPONSIVE MENU */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt='close icon' className='w-5 cursor-pointer dark:hidden'/>
                <Image src={assets.close_white} alt='close icon' className='w-5 cursor-pointer'/>
            </div>
            <li><a className='font-ovo' onClick={closeMenu} href='#top'>Home</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#about'>About</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#services'>Services</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#work'>My Work</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar