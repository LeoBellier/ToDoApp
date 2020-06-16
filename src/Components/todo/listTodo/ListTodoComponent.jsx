import React, { Component } from "react";

class ListTodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, description: 'Learn React', done: false, targetDate: new Date() },
                { id: 2, description: 'Learn Spring', done: false, targetDate: new Date() },
                { id: 3, description: 'Learn Docker', done: false, targetDate: new Date() },
                { id: 4, description: 'Learn AOP', done: false, targetDate: new Date() },
            ]
        }
    }
    render() {
        return (
            <div className="container ">
                <h1>List To Do's</h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Complete?</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(task =>
                                <tr key={task.id} >
                                    <td>{task.description}</td>
                                    <td>{task.done.toString()}</td>
                                    <td>{task.targetDate.toString()}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodoComponent