import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import AuthenticationService from './login/AuthenticationService.js'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return (<div><Route {...this.props} /></div>)
        } else {
            return (<Redirect to="/login"/>)
        }
    }
}

export default AuthenticatedRoute