const request = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
})

export default request
