import {
    TASK_FETCH_REQUEST,
    TASK_FETCH_SUCCESS,
    TASK_FETCH_FAILURE,
} from '../constants/task'

const initState = {
    tasks:[],
    isLoading: false,
    error:null
}

const taskReducer = (state=initState, action) => {
    switch (action.type) {
        case TASK_FETCH_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case TASK_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: true,
                tasks:action.payload,
                error:null
            }
        case TASK_FETCH_FAILURE:
            return {
                ...state,
                isLoading:false,
                tasks:[],
                error:action.payload
            }
        default:
            return initState
    }
}

export default taskReducer