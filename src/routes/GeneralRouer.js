import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/home/Homepage'
import Login from '../pages/home/Login'

function GeneralRouer() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default GeneralRouer