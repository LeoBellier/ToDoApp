import React, { Component } from 'react'
import AuthenticationService from '../../../api/user/AuthenticationService.js'
import TaskService from '../../../api/todo/TaskService.js'
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: ''
        }
        this.handlerSuccesfulResponse = this.handlerSuccesfulResponse.bind(this);
        this.handlerErrorResponse = this.handlerErrorResponse.bind(this)
    }
    render() {
        return (
            <div className="container">
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {AuthenticationService.getLogeduser} You can Manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    <button onClick={this.retriveWelcomeMessage} className="btn btn-success">
                        Get Welcome Message
                    </button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </div>
        )
    }

    handlerSuccesfulResponse(response) {
        let list = response.data
        const firsObj = list
        this.setState({
            welcomeMessage: firsObj

        })
    }

    handlerErrorResponse(response) {
        
        this.setState({
            welcomeMessage: response.error.data.message

        })
        console.log(response)
    }

    retriveWelcomeMessage() {
        TaskService.getTasks()
            .then(response => this.handlerSuccesfulResponse(response))
            .catch(error => this.handlerSuccesfulResponse(error))
    }

    retriveTask(id) {
        TaskService.getTask(id).then(
            response => this.handlerSuccesfulResponse(response)
        )
    }
}
export default WelcomeComponent