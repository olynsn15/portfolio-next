import { assets, serviceData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
        <motion.h4 className='text-center mb-2 text-lg font-ovo' initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
            What I Offer
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo' initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}>
            My Services
        </motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}>
            I am a frontend developer from California, USA with 10 years of experience in multiple 
            companies like Microsoft, Tesla and Apple.
        </motion.p>

        <motion.div className='grid grid-auto-fit gap-6 my-10 ' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.9}}>
            {serviceData.map(({icon, title, description, link}, index) => (
                <motion.div whileHover={{scale: 1.05}} key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover-shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white'>
                    <Image src={icon} alt='service icon' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more 
                        <Image src={assets.right_arrow} alt='right arrow' className='w-4 dark:hidden'/>
                        <Image src={assets.right_arrow_bold_dark} alt='right arrow' className='w-4 hidden'/>
                    </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services