import React, { useState } from 'react'

import { Login, Signup } from '../components'
import { Route, Routes, Link } from 'react-router-dom'

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>
    )
}

export default Auth