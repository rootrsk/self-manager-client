import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from '../constants/auth'
import store from '../store'
export async function login(data){

}

export async function logout(){

}

export async function authenticateUser(user){
    store.dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user
    })
}
