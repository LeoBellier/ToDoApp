class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }
    getLogeduser() {
        return sessionStorage.getItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        return user === null ? false : true;
    }
}

export default new AuthenticationService()