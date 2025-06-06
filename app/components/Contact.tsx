'use client'
import React from 'react'
import { motion } from "motion/react"
import { contactData } from '@/public/assets/assets'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='flex items-center justify-center w-full py-25 scroll-mt-20'>
      <motion.div id='contact' className='w-[80%] px-[12%]' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
        <motion.h4 className='text-center mb-2 text-lg font-syne text-purple dark:text-darker-purple font-medium' initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}}>
            ✦ My Contacts ✦
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-syne font-medium text-dark-purple dark:text-light-purple' initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}}>
            Connect with me!
        </motion.h2>
        <motion.p className='text-center max-w-4xl mx-auto mt-5 mb-12 font-lexend-deca' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}>
            Even though I am not looking for any opportunities at the moment, you are always welcome to say hello!
        </motion.p>

        <motion.div className='grid grid-auto-fit-contact justify-center gap-4 my-10' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>
          {contactData.map(({ icon, darkIcon, name, link }, index) => (
            <a key={index} target='_blank' href={link}>
              <motion.div whileHover={{ scale: 1.05 }} className='border border-purple dark:border-light-purple rounded-lg px-8 py-8 hover-shadow cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white'>
                <div className='flex items-center justify-center gap-4'>
                  <Image src={icon} alt='service icon' className='w-10 h-auto rounded-xl dark:hidden' />
                  <Image src={darkIcon} alt='service icon' className='w-10 h-auto rounded-xl hidden dark:flex' />
                  <h3 className='text-md text-purple dark:text-light-purple leading-tight font-lexend-deca font-medium'>{name}</h3>
                </div>
            </motion.div>
            </a>
          ))}
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Contact