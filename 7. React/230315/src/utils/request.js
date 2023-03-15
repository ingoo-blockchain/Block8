import axios from 'axios'

const request = axios.create({
    baseURL:'http://localhost:3005',
    withCredentials:true,
    headers: {
        'Content-type':'application/json'
    }
})

export default request