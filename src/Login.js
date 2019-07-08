import React, { Component } from 'react';

class Login extends Component {

    render(){
        return(
            <div>
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
