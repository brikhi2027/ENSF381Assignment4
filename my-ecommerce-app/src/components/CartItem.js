import React from 'react';
import ProductItem from './ProductItem';

    

const CartItem = ({product, removeFromCart}) => {
    
    //function handleRemoveFromCartButtonClick(event){
        //props.item.count = props.item.count - 1;
        //if (props.item.count === 0){

        //}
    //};

    //const handleRemoveFromCartButtonClick = (product) => {
        //removeFromCart(product);
        //setTotalPrice(totalPrice - product.price);
        //setCount(count - 1);
    //}
    
    return(
        <div>
            <ProductItem product = {product} />
            {/*<button onClick = {handleRemoveFromCartButtonClick}>Remove</button>*/}
           {/*<img src = {product.image} alt = {product.name}></img>
           <p>{product.name}</p>
           <p>Price: ${product.price}</p>
           <p>Quantity: {}</p>
           <p>Total: ${}</p>
           {/*<button onClick = {handleRemoveFromCartButtonClick}>Remove</button>*/}
        </div>
    );
};

export default CartItem;