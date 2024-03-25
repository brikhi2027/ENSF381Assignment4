import React, { useState } from 'react';
import CartItem from './CartItem.js';


const Cart = (cartItem) => {
    const cartList = [];
    const [list, setList] = React.useState(cartList);
    
    const newList = list.concat({ cartItem });
    setList(newList);
    
    const totalPrice = list.reduce((accumulator, item) => {
        return accumulator + (item.quantity * item.price);
    },0);
        

    return(
        <div>
        {cartList.map(function(item) {
            return(
                <CartItem cartItem = {item} />
            );
        })}
        <p>Total (in cart): $ {totalPrice}</p>
    </div>
    );
};

export default Cart;