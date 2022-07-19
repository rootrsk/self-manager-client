import { AccountBalanceRounded } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '../../components/mui/Button'
import Input from '../../components/mui/Input'
import { authenticateUser } from '../../redux/actions/auth'
import { postApi } from '../../utils/userApi'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'
function Login() {
    const [id, setId] = useState('rsb')
    const [password,setPassword] = useState('rsb')
    const [loading,setLoading] = useState(false)
    const loginHandler = async()=>{
        setLoading(true)
        const{data,error} = await postApi('/user/login',{id,password})
        setLoading(false)
        if(data){
            console.log(data)
            axios.defaults.headers.common['Authorization'] = data.token
            authenticateUser(data.user)
            
        }
        console.log(error)
    }
    useEffect(()=>{

    },[])
    return (    
        <div className='login-page'>
            <div className='login_left-div'>

            </div>
            <div className='login_left-div2'>
                <h2>Sign In Your Account</h2>
                <Input
                    label='Username'
                    starticon={<PersonIcon />}
                    fullWidth
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                />
                <Input
                    label='Password'
                    starticon={<LockIcon />}
                    fullWidth
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <Button 
                    onClick={loginHandler}
                    variant='contained'
                    fullWidth
                    loadingbutton
                    loading={loading}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login