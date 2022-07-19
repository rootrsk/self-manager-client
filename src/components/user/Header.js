import { IconButton } from '@mui/material'
import React from 'react'
import { RiMenu2Fill, RiMenuFoldFill } from 'react-icons/ri'
function Header({setCollapsed,collapsed}) {
    return (
        <div className='user-header'>
            <div>
            <IconButton
                onClick={()=>setCollapsed(!collapsed)}
            >
                {
                    collapsed?
                    <RiMenu2Fill style={{fontSize:22}}  />:
                    <RiMenuFoldFill style={{fontSize:22}}  />
                }
                
            </IconButton>
            </div>
            <div>

            </div>
            
        </div>
    )
}

export default Header