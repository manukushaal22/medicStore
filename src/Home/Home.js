import './Home.css';
import React from 'react';
import ProductGroup from "./productGroup/ProductGroup";
import OfferList from "./offerList/OfferList";
import Categories from "./categories/Categories";
import SlideShow from "./slideShow/SlideShow";
import NavBar from "./navBar/NavBar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import data from './database';

class Home extends React.Component{

    checkLoginStatus = () => {
        if(localStorage.getItem("signedInUser") === null || localStorage.getItem("signedInUser") === "null") {
            alert("Please Login first!")
            window.location.href = "login";
        }
    }

    render() {
        this.checkLoginStatus();
        return (
            <div>
                <Header />
                <NavBar />
                <SlideShow imgList={data.slideShowImgs}/>
                <Categories dataList={data.categoryList}/>
                <OfferList imgList={data.offerImgNames}/>
                <ProductGroup groupId={"topselling"} groupName={"Best Selling"} productList={data.bestSellers} />
                <ProductGroup groupId={"arrivals"} groupName={"New Arrivals"} productList={data.arrivals} />
                <Footer />
            </div>
        );
    }
}

export default Home;
