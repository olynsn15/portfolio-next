import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion, scale, spring } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
            <Image src={assets.profile_img} alt='profile image' className='rounded-full w-32'/>
        </motion.div>
        <motion.h1 initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}} className='flex items-end gap-2 text-5xl md:text-7xl mb-3 font-syne font-bold'>
            Hi there! 
            <span className='text-purple'>Olyn</span>
            here!
        </motion.h1>
        <motion.h1 initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}} className='text-2xl sm:text-4xl lg:text-[30px] font-'>
            Feel free to look around! I got some cool stuff to show you!
        </motion.h1>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1}} href='#about' className='px-10 py-3 border rounded-full text-white bg-black border-white flex items-center gap-2 dark:bg-transparent font-lexend-deca'>
                More About Me
                <Image src={assets.right_arrow_white} alt='profile image' className='w-4'/>
            </motion.a>
        </div>
    </div>
  )
}

export default Header