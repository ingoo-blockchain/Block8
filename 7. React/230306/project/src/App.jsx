import { useState } from "react"
import { Header } from "./layouts/header"
import { Home, About, Contact, Login } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    const [user, setUser] = useState("")

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser("")
    }

    return (
        <BrowserRouter>
            {/* Header 에 관련된 Routes */}
            <Routes>
                <Route path="*" element={<Header user={user} logout={logout} />} />
            </Routes>

            {/* Content 에 관련된 Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login login={login} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<>페이지를 찾을 수 없습니다.</>} />
            </Routes>

            {/* Footer 에 관련된 Routes */}
        </BrowserRouter>
    )
}

export default App
