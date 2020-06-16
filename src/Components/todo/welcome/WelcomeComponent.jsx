import React, { Component } from 'react'
import AuthenticationService from '../login/AuthenticationService.js'
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {AuthenticationService.getLogeduser} You can Manage your todos <Link to="/todos">here</Link>
                </div>
            </div>
        )
    }
}
export default WelcomeComponent