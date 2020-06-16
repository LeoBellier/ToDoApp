import React, { Component } from "react";
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            hasLoginSuccess: false
        }

        this.handlerChange = this.handlerChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handlerChange(event) {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked(event) {
        if (this.state.username === 'leo' && this.state.password === 'password') {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome`)
        } else {
            console.log('Failed')
            this.setState({
                hasLoginFailed: true,
                hasLoginSuccess: false
            })
        }
    }
    render() {
        return (
            <div className="Login">
                {this.state.hasLoginFailed && <div className="alert alert-warning">invalid creds</div>}
                <div>
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handlerChange} />
                </div>
                <div>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handlerChange} />
                </div>
                <button className="btn btn-success" onClick={this.loginClicked} >Login</button>

            </div>
        )
    }
}   
export default LoginComponent