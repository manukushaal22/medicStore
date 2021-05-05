import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

class Header extends React.Component{

    constructor(props) {
        super(props);
    }

    logout = () => {
        localStorage.setItem("signedInUser", null)
    }

    render() {
        let username;
        if (localStorage.getItem("signedInUser") !== null && localStorage.getItem("signedInUser") !== "null")
            username = localStorage.getItem("signedInUser");
        let cart = JSON.parse(localStorage.getItem("usercart"));
        if(cart === null){
            cart = []
        }
        return (
            <nav className="navbar">
                <div className="logo">
                    <img src="img/healthstore.png" alt={"healthstore"} />
                </div>
                <div className="search">
                    <input list="heroes" type="text" id="searchBar"  placeholder="🔍 search medicines.." />
                        <datalist id="heroes"/>
                </div>
                <div className="signout">
                    <a href="#" id="userHello">{username}</a>
                    <Link to="cart">Cart(<span id="cart-value">{cart.length}</span>)</Link>
                    <Link onClick={this.logout} to="login">Logout</Link>
                </div>
            </nav>
        );
    }
}

export default Header;
