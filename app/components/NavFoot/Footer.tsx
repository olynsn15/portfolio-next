import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='h-full text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Carolyn Santana. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href='https://github.com/olynsn15'>GitHub</a></li>
                <li><a target='_blank' href='instagram.com/olyn.sna'>Instagram</a></li>
                <li><a target='_blank' href='https://www.linkedin.com/in/carolyn-santana15/'>LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer