import './Login.css';
import Login from "./Login";
import React from 'react';
import Register from "./Register";

class Switcher extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true
        };
    }

    renderLogin = () => {
        this.setState({showLogin: true});
    }

    renderRegister = () => {
        this.setState({showLogin: false});
    }

    checkLoginStatus = () => {
        if(localStorage.getItem("signedInUser") !== null && localStorage.getItem("signedInUser") !== "null") {
            alert("You are already logged in!");
            window.location.href = "home";
        }
    }

    render() {
        this.checkLoginStatus()
        let tab = null;
        if(this.state.showLogin)
            tab = <Login/>;
        else
            tab = <Register />;
        let selectedCss = {
            backgroundColor: "#ff9900",
            color: "white"
        }
        let unselectedCss = {
            backgroundColor: "transparent",
            color: "#ff9900"
        }
        return (
            <div className="wrapperlgn">
                <div className="login-pagelgn">
                    <div className="tabPanelgn">
                        <button onClick={this.renderLogin} style={this.state.showLogin ? selectedCss : unselectedCss}>Login</button>
                    </div>
                    <div className="tabPanelgn">
                        <button onClick={this.renderRegister} style={!this.state.showLogin ? selectedCss : unselectedCss}>Register</button>
                    </div>
                    {tab}
                </div>
            </div>
        );
    }
}

export default Switcher;
