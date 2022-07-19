import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
function Input(props) {
    console.log(props)
    if(props && props.primary) return <PrimaryInput {...props} />
    if(props && props.secondary) return <SecondaryInput {...props} />
    return <PrimaryInput {...props} />
}

function PrimaryInput(props){
    return (
        <TextField 
            sx={sx}
            {...props}
            InputProps={props.starticon ? {
                    startAdornment: (
                        <InputAdornment position="start">
                            {props.starticon}
                        </InputAdornment>
                    )
                }:props.endicon ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            {props.endicon}
                        </InputAdornment>
                    )
                }: null
            }
        />
    )
}

function SecondaryInput(props){
    return <TextField {...props} />
}
const sx={
    marginTop:1,
    marginBottom:1
}
export default Input