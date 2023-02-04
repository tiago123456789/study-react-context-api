import React, { useContext } from "react"
import {
   Toast, ToastHeader, ToastBody
} from "reactstrap"
import TodoContext from "../../contexts/TodoContext"


export default () => {
    const { taskComplete } = useContext(TodoContext)

    return (
        <Toast isOpen={taskComplete}>
                    <ToastHeader>
                        Task Done!!!!
                    </ToastHeader>
                    <ToastBody>
                        Task complete with success!
                    </ToastBody>
                </Toast>
    )
}