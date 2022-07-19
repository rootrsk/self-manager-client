import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/home/Homepage'
import GeneralRouer from './routes/GeneralRouer'
import UserRouter from './routes/UserRouter'
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<GeneralRouer />} /> 
                    <Route path='/app/*' element={<UserRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App