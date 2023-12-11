import axios from "axios"

export const getAllPosts = async (callback) => {
    try {
        const res = await axios.get("https://dummyjson.com/posts/user/1")
        callback(res.data.posts)
    } catch (error) {
        console.log(error)
    }
};

export const getComments = async (postID, callback) => {
    try {
        const res = await axios.get(`https://dummyjson.com/comments/post/${postID}`)
        callback(res.data.comments)
    } catch (error) {
        console.log(error)
    }
}