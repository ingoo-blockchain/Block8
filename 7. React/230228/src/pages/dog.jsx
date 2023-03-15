import React, { useState, useEffect } from "react"
import axios from "axios"

const Dog = () => {
    const [loadding, setLoadding] = useState(true)
    const [dog, setDog] = useState("")

    const getDogImage = async () => {
        setLoadding(true)
        const response = await axios.get("https://dog.ceo/api/breeds/image/random")
        // {"message":"https:\/\/images.dog.ceo\/breeds\/bluetick\/n02088632_2207.jpg","status":"success"}
        setDog(response.data.message)
        setLoadding(false)
    }

    useEffect(() => {
        getDogImage()
    }, [])

    console.log("component 재실행!!!")

    return (
        <div>
            {loadding ? "Loadding..." : <img src={dog} />}
            <button onClick={getDogImage} disabled={loadding && "disabled"}>
                새로고침
            </button>
        </div>
    )
}

export default Dog

// React.createElement()

// https://dog.ceo/api/breeds/image/random
// {"message":"https:\/\/images.dog.ceo\/breeds\/bluetick\/n02088632_2207.jpg","status":"success"}
