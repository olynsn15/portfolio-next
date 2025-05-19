'use client'
import { assets, experienceData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const Experiences = () => {
  return (
    <motion.div id='experiences' className='w-full px-[10%] py-25 scroll-mt-20' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
        <motion.h4 className='text-center mb-2 text-lg font-syne text-purple font-medium' initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}}>
            ✦ Experiences ✦
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-syne font-medium text-dark-purple' initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}>
            Roles & Activities
        </motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-lexend-deca' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}>
            A look at some of the fun things I have done
        </motion.p>

        <motion.div className='grid grid-auto-fit-experience gap-6 my-10' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>
          {experienceData.map(({ icon, title, subtitle}, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index} className='border border-gray-400 rounded-lg px-8 py-8 hover-shadow cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white items-center'>
              <div className='flex items-center gap-4'>
                <Image src={icon} alt='service icon' className='w-15 h-auto rounded-xl' />
                <div>
                  <h3 className='text-lg text-black dark:text-white leading-tight font-lexend-deca font-medium'>{title}</h3>
                  <h3 className='text-sm text-gray-600 dark:text-white font-lexend-deca'>{subtitle}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.2}} className='flex justify-center mt-10 font-lexend-deca'>
          <a target='_blank' href='/sample-resume.pdf' rel="noopener noreferrer" className='flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full mx-4 font-ovo text-white dark:border-white/50 bg-black w-fit'>
            Check out my CV!
            <Image src={assets.right_arrow_white} alt='profile image' className='w-5'/>
          </a>
        </motion.div>

    </motion.div>
  )
}

export default Experiences