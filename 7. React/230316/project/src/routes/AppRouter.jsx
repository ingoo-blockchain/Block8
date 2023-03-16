import { Routes, Route} from 'react-router-dom'
import {Home, Counter, Login} from '../pages'
import {BoardRouter} from './BoardRouter'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/board/*" element={<BoardRouter />} />
        </Routes>
    )
}

