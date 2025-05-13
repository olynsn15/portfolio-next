import { assets, images, techStack } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Stack from './Stack'

const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
        <motion.h4 className='text-center mb-2 text-lg font-ovo' initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
            Introduction
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo' initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}>
            About Me
        </motion.h2>
        <motion.div className='flex flex-col lg:flex-row flex-wrap items-center gap-20 my-10 sm:gap-16' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}}>
            <motion.div className='w-80 sm:w-115 rounded-3xl max-w-none' initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}}>
                <Stack
                    randomRotation={false}
                    sensitivity={200}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 200, height: 200 }}
                    cardsData={images}
                />
            </motion.div>
            <motion.div className='flex-1' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.8}}>
                <p className='mb-10 font-ovo text-base sm:text-lg leading-relaxed'>
                    I’m an enthusiastic undergraduate student majoring in Mobile Application and Technology.
                    My academic journey has shaped me into a collaborative and growth-minded individual, always eager to learn, share, and support others.
                    Through various learning and community-building experiences, I’ve developed a love for contributing to meaningful projects, mentoring others, and continuously expanding my knowledge in tech and design.
                </p>

                <motion.h4 className='my-6 text-gray-700 font-ovo dark:text-white/80' initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 1.3}}>
                    My Tech Stack
                </motion.h4>

                <motion.ul className='flex flex-wrap items-center gap-3 sm:gap-5' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 1.5}}>
                    {techStack.map((tool, index) => (
                        <motion.li whileHover={{scale: 1.05}} key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover-shadow dark:border-white dark:hover-shadow-white dark:hover:bg-dark-hover/50'>
                            <Image src={tool} alt='tools' className='w-5 sm:w-7'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About