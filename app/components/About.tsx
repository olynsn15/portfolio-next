'use client'
import { techStack } from '@/public/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import BounceCards from './UI/BounceCards'

const About = () => {
    const [containerWidth, setContainerWidth] = useState(500)
    const [transformStyles, setTransformStyles] = useState([
        "rotate(5deg) translate(-170px)",
        "rotate(-5deg) translate(-60px)",
        "rotate(7deg) translate(50px)",
        "rotate(-4deg) translate(170px)"
    ])

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth

            // Update container width
            if (width < 640) {
                setContainerWidth(300)
                setTransformStyles([
                    "rotate(3deg) translate(-80px)",
                    "rotate(-3deg) translate(-30px)",
                    "rotate(3deg) translate(40px)",
                    "rotate(-3deg) translate(80px)"
                ])
            } else if (width < 1024) {
                setContainerWidth(400)
                setTransformStyles([
                    "rotate(4deg) translate(-100px)",
                    "rotate(-4deg) translate(-40px)",
                    "rotate(5deg) translate(40px)",
                    "rotate(-4deg) translate(100px)"
                ])
            } else {
                setContainerWidth(500)
                setTransformStyles([
                    "rotate(7deg) translate(-170px)",
                    "rotate(-5deg) translate(-60px)",
                    "rotate(7deg) translate(50px)",
                    "rotate(-4deg) translate(170px)"
                ])
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <motion.div id='about' className='w-full px-[10%] py-15 scroll-mt-20' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
            <motion.h4 className='text-center mb-2 text-lg font-syne text-purple font-medium' initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
                ✦ Introduction ✦
            </motion.h4>
            <motion.h2 className='text-center text-5xl font-syne font-medium text-dark-purple' initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}>
                About Me
            </motion.h2>
            <motion.div className='flex flex-col lg:flex-row flex-wrap items-center my-12 lg:gap-30 gap-5' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}}>
                <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}}>
                    <BounceCards
                        className="custom-bounceCards"
                        containerWidth={containerWidth}
                        containerHeight={250}
                        animationDelay={1}
                        animationStagger={0.08}
                        easeType="elastic.out(1, 0.5)"
                        transformStyles={transformStyles}
                        enableHover={true}
                    />
                </motion.div>
                <motion.div className='flex-1' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.8}}>
                    <p className='mb-10 font-lexend-deca text-base sm:text-lg leading-relaxed text-justify font-extralight'>
                        I’m an enthusiastic Mobile Application and Technology undergraduate, passionate about learning, collaboration, and growth. I enjoy contributing to meaningful projects, mentoring, and expanding my skills in tech and design.
                    </p>

                    <motion.h4 className='my-6 text-gray-600 font-syne dark:text-white/80' initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 1.3}}>
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
