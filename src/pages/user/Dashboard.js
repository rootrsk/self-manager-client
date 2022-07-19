import React, { useRef, useState } from 'react'
import Input from '../../components/mui/Input'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Home } from '@mui/icons-material';
import { useEffect } from 'react';
import { getApi } from '../../utils/userApi';
import TaskCard from '../../components/user/TaskCard';

function Dashboard() {
    const fetchTask = async()=>{
       const {data,error} = await getApi('/user/tasks')
       setTasks(data.tasks)
       console.log(data,error)
    }
    const [tasks,setTasks] = useState([])
    const [isOverflow,setIsOverflow] = useState(false)
    const [users,setUsers] = useState([])
    const addUser = ()=>{
        setUsers([...users,{name:'Ravi'}])
        if(upperRef.current){
            console.table(ref.current.clientWidth)
        }
        if(ref.current){
            console.table(ref.current.scrollWidth)
        }
        if(upperRef.current && ref.current){
            if (upperRef.current.clientWidth < ref.current.scrollWidth)
            setIsOverflow(true)
        }
        
    }
    const ref = useRef(null)
    const upperRef = useRef(null)
    console.log()
    useEffect(()=>{
        fetchTask()
    },[])
    useEffect(() => {
        if(ref.current){
            console.log(ref.current.offsetWidth)
            ref.current.addEventListener('load', ()=>console.log('changed'));
        }
    }, [ref.current])

    return (    
        <div>
            <h2>Welcome to Dashboard</h2> 
            <TaskCard tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}
export default Dashboard