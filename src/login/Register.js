import './Login.css';
import React from 'react';

class Register extends React.Component{

    register = () => {
        console.log("started")
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        let phn = document.getElementById("phn").value;
        let addr = document.getElementById("addr").value;
        let uname = document.getElementById("uname").value;
        let pwd = document.getElementById("pwd").value;
        let role = document.querySelector("input[name=role]:checked").value
        let user = localStorage.getItem(uname);
        if(user !== null){
            alert("user already exists");
            return;
        }
        let userObj = {"fname": fname, "lname": lname, "email": email, "phn": phn, "addr": addr, "uname": uname, "pwd": pwd, "role": role}
        console.log(JSON.stringify(userObj))
        localStorage.setItem(uname, JSON.stringify(userObj))
        alert("Registration Successful!");
    }

    render() {
        return (
            <div>
                <form className="formlgn">
                    <h1>REGISTRATION</h1>
                    <input type="text" placeholder="First Name" id="fname" required/>
                    <input type="text" placeholder="Last Name" id="lname" required/>
                    <input type="email" placeholder="Email-ID" id="email" required/>
                    <input type="number" placeholder="Phone Number" id="phn" required/>
                    <input type="text" placeholder="Address" id="addr" required/>
                    <input type="text" placeholder="Username" id="uname" required/>
                    <input type="password" placeholder="Password" id="pwd" required/>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "white"}}>
                        <div>
                            <input type="radio" id="user" name="role" value="user"/>
                            <label htmlFor="user">user</label>
                        </div>
                        <div>
                            <input type="radio" id="admin" name="role" value="admin"/>
                            <label htmlFor="admin">admin</label>
                        </div>
                        <div>
                            <input type="radio" id="delivery" name="role" value="delivery"/>
                            <label htmlFor="delivery">delivery</label>
                        </div>
                    </div>
                    <br/>
                    <button onClick={this.register} className="btnlgn">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;
