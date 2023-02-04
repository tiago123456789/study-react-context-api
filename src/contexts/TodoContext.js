import React, { createContext, useState } from "react"

const TodoContext = createContext();

export function TodoContextProvider({ children }) {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [taskComplete, setTaskComplete] = useState(false)

    const addNewTask = (event) => {
        event.preventDefault();
        setTasks([...tasks, task])
        setTask("")
    }

    const removeTask = (position) => {
        let registers = [...tasks];
        registers.splice(position, 1)
        setTasks(registers)
    }

    const updateTask = (position) => {
        setTaskComplete(true)
        setTimeout(() => {
            setTaskComplete(false)
        }, 5000)
        let registers = [...tasks];
        registers.splice(position, 1)
        setTasks(registers)
    }

    return (
        <TodoContext.Provider
            
            value={{
                updateTask,
                removeTask,
                addNewTask,
                setTask,
                tasks,
                task,
                taskComplete
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;