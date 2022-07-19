import { getApi } from '../../utils/userApi'
import {
    TASK_FETCH_REQUEST,
    TASK_FETCH_SUCCESS,
    TASK_FETCH_FAILURE,
} from '../constants/task'
export async function fetchTask(){
    const {data,error} = await getApi('/user/tasks')
}