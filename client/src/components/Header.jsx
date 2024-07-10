import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import { logo, avatar } from '../assets/images'
import { activity, bookmark, calendar, graph, notification } from '../assets/icons'
import { hover } from '../animations'
import { Icon } from '../components'

const Header = () => {
    return (
        <header className='fixed top-0 inset-x-0 p-2 flex justify-center items-center'>
            <div className='w-[99%] h-14 flex items-center justify-between'>
                <div className='w-1/3 h-full flex items-center justify-start gap-10'>
                    <NavLink
                        to={'/'}
                        className='h-full flex-shrink-0'
                    >
                        <img src={logo} alt="logo" className='w-full h-full object-cover'/>
                    </NavLink>
                    <div className='font-bold truncate'>
                        <span className='text-3xl font-bold'>Dashoard</span>
                    </div>
                </div>

                <div className='w-1/3 h-full flex items-center justify-center gap-10'>
                    <div className='w-[70%] h-[80%] bg-lightOverlay border border-borderColor rounded-lg flex justify-center items-center'>
                        <input type="search" placeholder='Global Search' className='bg-transparent py-1 placeholder:text-center'/>
                    </div>
                </div>


                {/* <div className='border flex justify-center items-center'>
                    <input type="search" className='w-full' />
                </div>

                <nav className='flex items-center justify-between gap-2'>
                    <ul className='hidden md:flex justify-center items-center gap-6'>
                        <li>
                            <Icon icon={graph} name={"notification"} isActive={true} />
                        </li>
                        <li>
                            <Icon icon={notification} name={"notification"} isActive={true} />
                        </li>
                        <li>
                            <Icon icon={activity} name={"notification"} isActive={true} />

                        </li>
                        <li>
                            <Icon icon={calendar} name={"notification"} isActive={true} />

                        </li>
                        <li>
                            <Icon icon={bookmark} name={"notification"} isActive={true} />

                        </li>
                    </ul>

                    <div
                        className='w-12 h-12 rounded-full border shadow-md cursor-pointer overflow-hidden flex items-center justify-center'
                    >
                        <motion.img {...hover} src={avatar} alt="" className='w-full h-full object-cover' />
                    </div>
                </nav> */}
            </div>

        </header>
    )
}

export default Header