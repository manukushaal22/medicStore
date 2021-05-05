import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

function Cart(){

    const forceUpdate = useForceUpdate();

     let cartAdd = (name, price) => {
        let cart = JSON.parse(localStorage.getItem("usercart"));
        if(cart === null){
            cart = []
        }
        let qty = document.getElementById(name);
        if(qty===null){
            qty=1;
        }else{
            qty = qty.value;
        }
        for (let i = 0; i < qty; i++) {
            cart.push({"name":name, "price":price})
        }
        localStorage.setItem("usercart",JSON.stringify(cart));
    }

    let cartRemove = (name) => {
        let cart = JSON.parse(localStorage.getItem("usercart"));
        if(cart === null){
            return;
        }
        let idx=-1;

        for (let i = 0; i < cart.length; i++) {
            if(cart[i].name === name){
                idx=i;
                break;
            }
        }
        if (idx > -1) {
            cart.splice(idx, 1);
        }
        localStorage.setItem("usercart",JSON.stringify(cart));
    }

    let orderNow = () => {
        let cart = JSON.parse(localStorage.getItem("usercart"));
        //let store = JSON.parse(localStorage.getItem("storeItems"));
        if(cart === null || cart.length===0){alert("cart empty");return;}
        // if(store === null || store.length === 0){alert("store empty!");return;}
        let user = JSON.parse(localStorage.getItem(localStorage.getItem("signedInUser")));
        // let file = document.getElementById("myFile").value;
        let order = {"user": user, "cart": cart}
        let orderList = JSON.parse(localStorage.getItem("orderList"));
        if (orderList === null) {
            orderList = [];
        }
        orderList.push(order);
        localStorage.setItem("orderList", JSON.stringify(orderList));
        // for (let i = 0; i < cart.length; i++) {
        //     for (let j = 0; j < store.length; j++) {
        //         if(cart[i].name === store[j].name){
        //             store[j].qty = store[j].qty -1;
        //             break;
        //         }
        //     }
        // }
        localStorage.setItem("usercart", null);
        // localStorage.setItem("storeItems", JSON.stringify(store));
        alert("Order Successful!")
        window.location.href="home";
    }

    let getCartData = () => {
        cartData = localStorage.getItem('usercart')
        if(cartData !== null && cartData !== 'null'){
            cartData = JSON.parse(cartData);
        } else {
            cartData = [];
        }
    }

    const classes = makeStyles();
    let cartData;
    return (
        <div className="cartDiv">
            <button className="btn1"><Link to="home" style={{color:"white", height:"100%", width:"100%"}}>Home</Link></button>
            <h1>CART<i className="fas fa-shopping-cart"/></h1>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Remove</TableCell>
                                <TableCell align="right">Add</TableCell>
                            </TableRow>
                        </TableHead>
                        {
                            getCartData()
                        }
                        <TableBody>
                            {!cartData || cartData.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right"><button onClick={() => {cartRemove(row.name);forceUpdate();}}>Remove</button></TableCell>
                                    <TableCell align="right"><button onClick={() => {cartAdd(row.name, row.price);forceUpdate();}}>Add</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <button className="btn1" onClick="clearCart()">Clear cart</button>
            <button type="button" className="btn1" onClick={()=>{orderNow();forceUpdate()}} id="order"> Order Now</button>
            {/*<input type="file" id="myFile" name="filename" onClick="uploadPres()"/>*/}
            {/*    <img src="#" alt="Preview" width="500" height="600" id="imgg"/>*/}
        </div>
    );
}

export default Cart;
