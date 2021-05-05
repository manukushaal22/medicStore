import '../Home.css';
import React from 'react';

class ProductBox extends React.Component{

    cartAdd = (name, price) => {
        var cartbutton = document.getElementById('cart-value');
        let cart = JSON.parse(localStorage.getItem("usercart"));
        if(cart === null){
            cart = []
        }
        cartbutton.innerHTML = cart.length + 1;
        let qty = document.getElementById(name);
        if(qty===null){
            qty=1;
        }else{
            qty = qty.value;
        }
        for (let i = 0; i < qty; i++) {
            cart.push({"name":name, "price":price})
        }
        localStorage.setItem("usercart",JSON.stringify(cart))
    }

    render() {
        return (
            <div className="box1">
                <img src={"img/"+this.props.prodImgName} alt={this.props.prodImgName}/>
                <p>{this.props.prodName} ₹{this.props.prodCost}</p>
                <button className="btn1" onClick={() => this.cartAdd(this.props.prodName, this.props.prodCost)}>ADD TO CART</button>
            </div>
        );
    }
}

export default ProductBox;