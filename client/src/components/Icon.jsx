import React from 'react'
import { motion } from 'framer-motion'

import { click } from '../animations'

const Icon = ({ icon, name, isActive }) => {
    return (
        <motion.div
            {...click}
            className='cursor-pointer'
        >
            <span className='flex'>
                <img src={icon} alt={name || 'icon'} className='w-6 h-6' />
            </span>
        </motion.div>
    )
}

export default Icon
