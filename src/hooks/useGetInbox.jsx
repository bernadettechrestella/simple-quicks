import { useEffect, useState } from "react"
import { getAllPosts, getComments } from "../services/inbox.services"

export const useGetInbox = () => {
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)

    const getPostComments = (postID) => {
        getComments(postID, (data) => {
            setComments(data)
        })
    }

    useEffect(() => {
        setLoading(true)

        getAllPosts((data) => {
            setPost(data)
            setLoading(false)
        })
    }, [])

    return {
        post,
        comments,
        loading,
        getPostComments,
    }
}