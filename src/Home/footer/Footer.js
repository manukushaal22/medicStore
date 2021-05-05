import React from 'react';

class Footer extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="options">
                    <div className="flex-container8">
                        <div className="box8">
                            <img src="img/payment.jpg" />
                                <h3 style={{fontWeight: "bolder", paddingLeft: 80, color: "blue"}}>PAYMENT OPTIONS</h3>
                        </div>
                        <div className="box8">
                            <img src="img/freedelivery.png" />
                                <h3 style={{fontWeight: "bolder", paddingLeft: 80, color: "blue"}}>FREE DELIVERY</h3>
                        </div>
                        <div className="box8">
                            <img src="img/service.png" />
                                <h3 style={{fontWeight: "bolder", paddingLeft: 80, color: "blue"}}>24/7 SERVICES</h3>
                        </div>
                    </div>
                </div>
                <br/><br/>


                    <div>
                        <div className="container">
                            <img src="img/final.jpg" style={{width: "100%", height: 450}}/>
                                <div className="top-right1">DEALS OF THE MONTH</div>
                                <div className="top-right2">UPTO 80% OFF</div>
                                <div className="top-right3">
                                    <button>Shop Now</button>
                                </div>
                        </div>
                    </div>
                <footer className="main">
                    <div>
                        <div className="box99">
                            <h2>Information</h2><br/>
                            <div className="content">
                                <ul>
                                    <li>about us</li>
                                    <li>privacy policy</li>
                                    <li>terms and conditions</li>
                                    <li>Delivery Informtaion</li>
                                    <li>Order and Return</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h2>Address</h2>
                        <div className="content">
                            <div className="phone">
                                <i className="fa fa-phone" style={{fontSize:36}}/>
                                <span className="text">+91-9999999999</span>
                            </div>
                            <div className="place">
                                <i className="fas fa-map-marker-alt" style={{fontSize:36}}/>
                                <span className="text">Hyderabad, Telangana</span>
                            </div>
                            <div className="email">
                                <i className="fa fa-envelope" style={{fontSize:24}}/>
                                <span className="text">healthstore@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="box98">
                        <h2>Contact Us</h2><br/>
                        <div className="content">
                            <form action="#">
                                <div className="email">
                                    <div className="text">Email:</div>
                                    <input type="email" required/>
                                </div>
                                <div className="msg">
                                    <div className="text">Suggestion:</div>
                                    <textarea rows="2" cols="19" required/>
                                </div>
                                <div className="botton">
                                    <button style={{backgroundColor: 'white', width: 140, padding: 7}}>Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
