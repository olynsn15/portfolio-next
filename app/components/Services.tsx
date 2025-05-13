import { experienceData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
        <motion.h4 className='text-center mb-2 text-lg font-ovo' initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}}>
            Experiences
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo' initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}>
            Roles & Activities
        </motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}>
            A look at some of the fun things I have done
        </motion.p>

        <motion.div className='grid grid-auto-fit-experience gap-6 my-10' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>
          {experienceData.map(({ icon, title, subtitle, description }, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover-shadow cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white'>
              <div className='flex items-center gap-4 mb-5'>
                <Image src={icon} alt='service icon' className='w-15 h-auto rounded-xl' />
                <div>
                  <h3 className='text-lg text-gray-700 dark:text-white leading-tight'>{title}</h3>
                  <h3 className='text-sm text-gray-700 dark:text-white'>{subtitle}</h3>
                  </div>
                  </div>
                  <ul className='list-disc pl-5 text-sm text-gray-600 leading-5 text-justify dark:text-white/80'>
                    {description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
            </motion.div>
          ))}
        </motion.div>
    </motion.div>
  )
}

export default Services