'use client'
import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-7xl mx-auto h-screen flex md:flex-row flex-col-reverse items-center justify-center md:gap-30 gap-10'>
        <div>
            <motion.h1 initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}} className='flex gap-2 text-5xl md:text-7xl mb-3 font-syne font-bold text-purple dark:text-light-purple'>
                Hi there! Olyn here!
            </motion.h1>
            <motion.h1 initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}} className='text-xl sm:text-3xl lg:text-[26px] font-lexend-deca font-extralight text-dark-purple dark:text-darker-purple'>
                Feel free to look around! I got some cool stuff to show you!
            </motion.h1>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 1}} href='#about' className='px-10 py-3 border rounded-full text-white bg-black border-white flex items-center gap-2 dark:bg-transparent font-lexend-deca'>
                    More About Me
                    <Image src={assets.right_arrow_white} alt='arrow' className='w-4'/>
                </motion.a>
            </div>
        </div>
        <Image src={assets.person} alt='icon illustration' className='md:w-[32%] w-[65%]'/>
    </div>
  )
}

export default Header