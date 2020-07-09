import React, { Component } from "react";
import AuthenticationService from '../../../api/user/AuthenticationService.js'
import TaskService from '../../../api/todo/TaskService.js'

class ListTodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: ''
        }
        this.refreshTask = this.refreshTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }
    componentWillUnmount() {


    }

    shouldComponentUpdate(nextProps, nextState) {

        return true
    }
    
    componentDidMount() {
        this.refreshTask()
    }
    
    refreshTask() {
        TaskService.getTasks(AuthenticationService.getLogeduserId())
            .then(
                res => {
                    this.setState({
                        todos: res.data
                    })
                }
            );
    }
    
    removeTask(id) {
        TaskService.deleteTask(id)
            .then(task => console.log(task))
        this.refreshTask()
    }
    
    updateTask(id) {
        TaskService.updateTask(id).then()

    }

    render() {
        return (
            <div className="container ">
                <h1>List To Do's</h1>
                <h1>{this.state.message}</h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Complete?</th>
                                <th>date</th>
                                <th>Update</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(task =>
                                <tr key={task.id} >
                                    <td>{task.description}</td>
                                    <td>{task.done.toString()}</td>
                                    <td>{task.targetDate.toString()}</td>
                                    <td><button className="btn btn warning" onClick={() => this.updateTask(task.id)}>Update</button></td>
                                    <td><button className="btn btn warning" onClick={() => this.removeTask(task.id)}>Delete</button></td>
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