'use client'
import { assets, workData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const Project = () => {
  return (
    <motion.div id='project' className='w-full px-[12%] py-15 scroll-mt-20 items-center' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
        <motion.h4 className='text-center mb-2 text-lg font-syne text-purple font-medium' initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}}>
            ✦ My Portfolio ✦
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-syne font-medium' initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}}>
            Latest Projects
        </motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-lexend-deca' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}>
            Explore a collection of projects I did throughout my college years
        </motion.p>

        <div className="grid grid-auto-fit-works gap-6 my-10 items-center justify-center">
            {workData.map((project, index) => (
                <motion.div whileHover={{ scale: 1.01 }} key={index} className="w-full rounded-2xl border border-gray-600 p-6 backdrop-blur-sm bg-transparent transition hover-shadow cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white">
                    <div className="relative w-full md:h-[350px] h-[250px] rounded-2xl overflow-hidden mb-6">
                        <Image src={project.bgImage} alt={project.title} fill className="object-cover"/>
                    </div>
                    <h2 className="text-black text-2xl font-syne font-semibold mb-2">{project.title}</h2>
                    <p className="text-gray-600 text-sm text-justify font-lexend-deca">{project.description}</p>
                    <div className="flex items-center justify-between mt-7">
                        <div className='flex items-center'>
                            {project.icons.map((icon, index) => (
                                <div key={index} className="border border-gray-400 rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{transform: `translateX(-${5 * index + 2}px)`,}}>
                                    <Image src={icon} alt='icons' className='p-2'/>
                                </div>
                            ))}
                        </div>
                        <a target='_blank' href={project.link}>
                            <div className='flex gap-2'>
                                Github
                                <Image src={assets.github} alt='github icon'/>
                            </div>
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className='flex justify-center mt-10 font-lexend-deca'>
            <a target='_blank' href='https://github.com/olynsn15' className='flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full mx-4 font-ovo text-white dark:border-white/50 bg-black w-fit'>
                My Other Works
                <Image src={assets.right_arrow_white} alt='profile image' className='w-5'/>
            </a>
        </div>


        {/* <motion.div className='grid grid-auto-fit-works my-10 gap-5 dark:text-black' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.9}}>
            {workData.map((project, index) => (
                <motion.div whileHover={{scale: 1.05}} transition={{duration: 0.3}} key={index} style={{backgroundImage: `url(${project.bgImage})`}} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>
                    <div className='bg-white w-12/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div> */}
    </motion.div>
  )
}

export default Project