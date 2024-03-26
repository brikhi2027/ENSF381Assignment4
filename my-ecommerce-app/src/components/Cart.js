import React, { useState } from 'react';
import CartItem from './CartItem.js';



const Cart = (cartItem) => {
    const [list, setList] = useState([]);
    
    function addToList(){
        const newList = list.concat({ cartItem });
        setList(newList);
    }

    function calculateCartTotal(){
        const totalPrice = list.reduce((accumulator, item) => {
            return accumulator + (item.quantity * item.price);
        },0);
        return totalPrice;
    }

    let totalPrice = calculateCartTotal();
    return(
        <div>
        {list.map(function(item) {
            return(
                <CartItem cartItem = {item} />
            );
        })}
        
        <p>Total (in cart): $ {totalPrice}</p>
    </div>
    );
};

export default Cart;