import { Routes, Route } from 'react-router-dom'
import {Main, Counter} from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    )
}