import axios from "axios"

export const getAllTask = async (callback) => {
    try {
        const res = await axios.get("https://dummyjson.com/todos/user/1")
        callback(res.data.todos)
    } catch (error) {
        console.log(error)
    }
}