import React from 'react';

const CartItem = (product) => {
    

    //function handleRemoveFromCartButtonClick(event){
        //props.item.count = props.item.count - 1;
        //if (props.item.count === 0){

        //}
    //};
    
    return(
        <div>
           <img src = {product.image} alt = {product.name}></img>
           <p>{product.name}</p>
           <p>Price: ${product.price}</p>
           <p>Quantity: {}</p>
           <p>Total: ${}</p>
           {/*<button onClick = {handleRemoveFromCartButtonClick}>Remove</button>*/}
        </div>
    );
};

export default CartItem;