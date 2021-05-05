import React from 'react';

class NavBar extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="midnav">
                <a href="#topselling">MEDICINES</a>
                <a href="#">Sanitary</a>
                <a href="#">Covid-Essentials</a>
                <a href="#">NOTIFICATION</a>
            </div>
        );
    }
}

export default NavBar;
