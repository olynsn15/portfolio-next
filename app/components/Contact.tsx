import React from 'react'
import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.div id='contact' className='w-full px-[12%] py-10 scroll-mt-20' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
        <motion.h4 className='text-center mb-2 text-lg font-ovo' initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}}>
            Get in Touch
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo' initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}}>
            Connect with me!
        </motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}>
            Welcome to my web development portfolio! Explore a collection of projects showcasing
            my expertise in front-end development.
        </motion.p>
    </motion.div>
  )
}

export default Contact