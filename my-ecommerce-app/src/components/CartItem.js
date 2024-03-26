import React, {useState} from 'react';
import ProductItem from './ProductItem';

    

const CartItem = ({product, removeFromCart}) => {
    const [cartItem, setCartItem] = useState({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: '1',
        total: product.price,

    });

    const handleRemoveFromCartButtonClick = (cartItem) => {
        cartItem.quantity -= 1;
        cartItem.total -= cartItem.price;
        if (cartItem.quantity === 0){
            //removeCartItem(cartItem);
        }
    };
    
    return(
        <div id = {cartItem.id}>
           <img src = {cartItem.image} alt = {cartItem.name}></img>
           <p>{cartItem.name}</p>
           <p>Price: ${cartItem.price}</p>
           <p>Quantity: {cartItem.quantity}</p>
           <p>Total: ${cartItem.total}</p>
           <button onClick = {handleRemoveFromCartButtonClick}>Remove</button>
        </div>
    );
};

export default CartItem;