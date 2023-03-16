import {Route, Routes} from 'react-router-dom'
import {BoardList, BoardWrite, BoardView} from '../pages'

export const BoardRouter = () => {
    return <Routes>
        <Route path="" element={<BoardList/>} />
        <Route path="write" element={<BoardWrite/>} />
        <Route path="view/:id" element={<BoardView/>} />
    </Routes>
}