import decode from 'jwt-decode';

//authentication for user and token
class AuthService {
    getProfile(){ //gets the users profile
        return decode(this.getToken());
    }

    loggedIn(){ //logs in a user
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token){
        const decoded = decode(token);
        if(decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    getToken(){
        return localStorage.getItem('id_token'); //id from local storage
    }

    login(idToken){ //to be accessed in Login.jsx
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout(){
        localStorage.removeItem('id_token');
        window.location.reload();
    }
}

export default new AuthService();
