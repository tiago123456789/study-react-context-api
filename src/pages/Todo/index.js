import React from "react"
import {
    Container, Row
} from "reactstrap"
import ListTasks from "../../components/ListTasks"
import MessageTaskDone from "../../components/MessageTaskDone"
import TaskForm from "../../components/TaskForm"

export default () => {

    return (
        <Container>
            <Row>
                <MessageTaskDone />
                <br />
                <br />
                <TaskForm />
            </Row>
            <br />
            <ListTasks/>
        </Container>

    )
}