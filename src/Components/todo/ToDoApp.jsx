import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import ListTodoComponent from './listTodo/ListTodoComponent'
import LoginComponent from './login/LoginComponent'
import HeaderComponent from './header/HeaderComponent'
import FooterComponent from './footer/FooterComponent'
import LogoutComponent from './logout/LogoutComponent'
import WelcomeComponent from './welcome/WelcomeComponent'
import ErrorComponent from './error/ErrorComponent'


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/login" exact component={LoginComponent} />
                        <Route path="/" exact component={LoginComponent} />
                        <AuthenticatedRoute path="/todos" exact component={ListTodoComponent} />
                        <AuthenticatedRoute path="/welcome" exact component={WelcomeComponent} />
                        <Route path="/logout" exact component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        );
    }
}

export default TodoApp; 