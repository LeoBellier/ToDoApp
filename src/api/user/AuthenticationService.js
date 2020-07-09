class AuthenticationService {
    registerSuccessfulLogin(id, username, password) {
        if (id === null) id = 0
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('authenticateId', id);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('authenticateId');
    }
    getLogeduser() {
        return sessionStorage.getItem('authenticatedUser');
    }
    getLogeduserId() {
        return sessionStorage.getItem('authenticateId');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        return user === null ? false : true;
    }
}

export default new AuthenticationService()