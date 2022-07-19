import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import taskReducer from './reducers/task'
const store = configureStore({
    reducer:{
        userAuth: authReducer,
        task: taskReducer
    }
})
export default store