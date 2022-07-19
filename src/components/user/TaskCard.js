import { Divider } from '@mui/material'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

function TaskCard({tasks,setTasks}){
    const removeTask = (task_id)=>{
        console.log(task_id)
        const filteredArray = tasks.filter((task)=>{
            return task._id.toString() != task_id.toString()
        })
        console.log(filteredArray)
        setTasks(filteredArray)
    }
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
        }
        const container = {
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                delayChildren: 0
              }
            }
        }
          
          
    return (
        <div 
            className='task-card' 
            variants={container}
            initial="hidden"
            animate="show"
        >
            {
                tasks.map((task,index)=>{
                    return (
                        <AnimatePresence key={index+1}>
                        <motion.li 
                            key={index+1}
                            style={{display:'flex'}} 
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            onClick={()=>removeTask(task._id)}
                        >
                            <input 
                                type="checkbox" 
                                onChange={(e)=>console.log(e.target.value)} 
                            />
                            <p key={index} className='task-card-title'>
                                {task.title}
                            </p>
                        </motion.li> 
                        </AnimatePresence> 
                    )
                })
            }
            <Divider  />    
        </div>
    )
}

export default TaskCard