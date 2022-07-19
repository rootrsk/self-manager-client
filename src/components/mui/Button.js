import React from 'react';
import MuiButton from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

function Button(props) {
    if(props && props.primary) return <PrimaryButton {...props} />
    if(props && props.secondary) return <SecondaryButton {...props} />
    return <PrimaryButton {...props} />
}

function PrimaryButton(props){
    if(props.loadingbutton) return <LoadingButton sx={sx} {...props} />
    return <MuiButton sx={sx} {...props} />
}

function SecondaryButton(props){
    if(props.loadingbutton) return <LoadingButton {...props} />
    return <MuiButton {...props}/>
}
const sx={
    marginTop:2,
    marginBottom:2
}
export default Button