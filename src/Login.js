import React from "react";
import { withRouter } from "react-router-dom";
import "./CSS/Dashboard.css";

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>Dashboard Login</h2>
        </header>
        <div>
          <input size="25" placeholder="Emailadresse" />
          <br />
          <input size="25" placeholder="Passwort" type="password" />
        </div>
        <button onClick={() => this.props.history.push("/dashboard")}>
          Log In
        </button>
      </div>
    );
  }
}
const Login = withRouter(LoginComponent);
export default Login;

//history.push
