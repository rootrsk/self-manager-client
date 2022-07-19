import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Drawer from '../components/mui/Drawer'
import Aside from '../components/user/Aside'
import Header from '../components/user/Header'
import Login from '../pages/home/Login'
import Dashboard from '../pages/user/Dashboard'
import Expense from '../pages/user/Expense'
import Health from '../pages/user/Health'
import Profile from '../pages/user/Profile'
import Task from '../pages/user/Task'

function UserRouter() {
    const user = useSelector(state=>state.userAuth.user)
    const [collapsed, setCollapsed] = useState(false);
    console.log(user)
    if (!user){
        return <Login />
    }
    return (
        <div style={{
            display:'flex',
            height:'100vh'
        }}>
            <Aside 
                collapsed={collapsed} 
                style={{
                    height:'100vh'
                }}
                />
            <div
                style={{
                    flex:1,
                    overflowY:'scroll'
                }}
            >
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <div
                    style={{
                        padding:'20px'
                    }}
                >
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard /> } />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/expense' element={<Expense />} />
                        <Route path='/health' element={<Health />} />
                        <Route path='/task' element={<Task />} />
                    </Routes> 
                </div>
                
            </div>
        </div>
    )
}

export default UserRouter