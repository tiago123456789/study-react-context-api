import React, { useContext } from "react"
import {
    Table, Button
} from "reactstrap"
import TodoContext from "../../contexts/TodoContext"

export default () => {
    const { tasks, removeTask, updateTask } = useContext(TodoContext)

    return (
        <Table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => {
                            return (
                                <tr>
                                    <td>{task}</td>
                                    <td>
                                        <Button color="primary" onClick={() => updateTask(index)}>Done</Button>&nbsp;
                                        <Button color="danger" onClick={() => removeTask(index)}>Remove</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
    )
}