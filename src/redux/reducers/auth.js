import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from '../constants/auth'

const initState = {
    user:null,
    isAutheticated:false,
    isLoading: false,
    error:null
}

const authReducer = (state=initState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: true,
                isAutheticated: true,
                user:action.payload,
                error:null
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
                isAutheticated:false,
                user:null,
                error:action.payload
            }
        default:
            return initState
    }
}

export default authReducer