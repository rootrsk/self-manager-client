import axios from 'axios'
export async function getApi(url){
    try {
        const response = await axios.get(url)
        if (response.data && response.data.error){
            return {
                error:response.data.error,
                data:null
            }
        }
        if (response.data){
            return{
                error:null,
                data:response.data
            } 
        }
    } catch (error) {
        return {
            error:'Something went wrong',
            data :null,
            message:'Try Checking your internet connection.'
        }
    }
}

export async function postApi(url,data){
    try {
        const response = await axios.post(url,data)
        if (response.data && response.data.error){
            return {
                error:response.data.error,
                data:null
            }
        }
        if (response.data){
            return{
                error:null,
                data:response.data
            } 
        }
    } catch (error) {
        return {
            error:'Something went wrong',
            data :null,
            message:'Try Checking your internet connection.'
        }
    }
}