import { Routes, Route } from 'react-router-dom'
import { Main, Counter } from './pages'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    )
}
