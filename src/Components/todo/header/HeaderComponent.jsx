import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import AuthenticationService from '../../../api/user/AuthenticationService.js'

class HeaderComponent extends Component {
    render() {
        let isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <Link to="/" className="text-light">LeoTODO</Link>
                    </div>
                    
                        <ul className="navbar-nav">
                            {isUserLoggedIn && <li><Link className="nav-link" to="/Welcome">Home</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/todos">ToDos</Link></li>}
                        </ul>
                        
                    
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout} >Logout</Link></li>}
                    </ul>

                </nav>
            </header>

        )
    }
}

export default withRouter(HeaderComponent);