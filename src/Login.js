import React, { Component } from 'react';
import "./Login.css";

class Login extends Component {

    render(){
        return(
            <div className="Login">
                <div className="Login-textfields">
                    <input size="25" placeholder="Emailadresse"></input><br />
                    <input size="25" placeholder="Passwort" type="password"></input>
                </div>
                    <button className="Login-button">Log In</button>
            </div>
        );
    }
}
export default Login;
