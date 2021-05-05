import './Login.css';
import React from 'react';

class Login extends React.Component{

    login = () => {
        let uname = document.getElementById("uname").value;
        let pwd = document.getElementById("pwd").value;
        let userObj = localStorage.getItem(uname);
        if(userObj === null){
            alert("user doesnt exist");
            return;
        }
        userObj = JSON.parse(userObj);
        if(pwd !== userObj.pwd){
            alert("wrong pwd");
            return;
        }
        localStorage.setItem("signedInUser", uname);
        if(userObj.role === "user"){
            window.location.href ="home";
        }
        if(userObj.role === "admin"){
            alert("Hi Admin!");
        }
        if(userObj.role === "delivery"){
            alert("Hi Delivery Partner!");
        }
    }

    render() {
        return (
            <div>
                <div className="formlgn">
                    <h1>LOGIN</h1>
                    <input type="text" placeholder="username" id="uname"/>
                    <input type="password" name="pwd" placeholder="Password" id="pwd"/>
                    <br/><br/>
                    <button onClick={this.login} className="btnlgn">Login</button>
                </div>
            </div>
        );
    }
}

export default Login;
