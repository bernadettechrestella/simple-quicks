import { useEffect, useState } from "react"
import { getAllTask } from "../services/task.services"

export const useGetTask = () => {
    const [task, setTask] = useState([])

    useEffect(() => {
        getAllTask((data) => {
            setTask(data)
        })
    }, [])

    return {
        task,
    }
}