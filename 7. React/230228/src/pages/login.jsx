import React, { useState, useEffect } from "react"

// useState

const LoginBox = ({ name }) => {
    console.log(name)
    // state = { isLogin: true}
    const [isLogin, setIsLogin] = useState(false)

    const handleLogin = () => {
        setIsLogin(!isLogin)
    }

    useEffect(() => {
        console.log("ComponentDidMount")
    }, []) // componentDidMount

    useEffect(() => {
        console.log(isLogin, "ComponentDidUpdate")
    }, [isLogin])

    console.log("Component 재실행")

    return (
        <div>
            <button onClick={handleLogin}>{isLogin ? "로그아웃" : "로그인"}</button>
        </div>
    )
}

// class LoginBox extends Component {
//     state = {
//         isLogin: false,
//     }

//     handleLogin() {
//         this.setState({
//             isLogin: !this.state.isLogin,
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={() => this.handleLogin()}>{this.state.isLogin ? "Logout" : "Login"}</button>
//             </div>
//         )
//     }
// }

export default LoginBox
