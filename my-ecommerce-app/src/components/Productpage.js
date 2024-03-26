import React, {useState, useEffect} from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
//import {list} from './Cart';
import Footer from './footer';


const Productpage = () => {
    //const [cartItems, setCartItems] = useState(list);
    
    //useEffect(() => {
        //const currentCart = localStorage.getItem('cartItems');
        //if(currentCart){
            //setCartItems(JSON.parse(currentCart));
        //}
    //}, []); // this will only run on mount

    //useEffect(() => {
        //localStorage.setItem('cartItems', JSON.stringify(cartItems))
    //}, [cartItems]); // this will run whenever the array of cart items changes

    return(
        <div className = "product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList /></td>
                    <td style={{verticalAlign:'top'}}><Cart /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
};

export default Productpage;