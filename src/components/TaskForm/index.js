import React, { useContext } from "react"
import {
    Form, Input, Label,
    Button
} from "reactstrap"
import TodoContext from "../../contexts/TodoContext"

export default () => {
    const { task, setTask, addNewTask } = useContext(TodoContext)

    return (
        <Form>
            <Label>New task:</Label>
            <Input
                value={task}
                onChange={(event) => setTask(event.target.value)} />
            <Button color="primary" onClick={addNewTask}>Save</Button>
        </Form>
    )
}