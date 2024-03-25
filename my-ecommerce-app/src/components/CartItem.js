import React from 'react';

const CartItem = (props) => {
    

    //function handleRemoveFromCartButtonClick(event){
        //props.item.count = props.item.count - 1;
        //if (props.item.count === 0){

        //}
    //};
    
    return(
        <div>
           <img src = {props.item.image} alt = {props.item.name}></img>
           <p>{props.item.name}</p>
           <p>Price: ${props.item.price}</p>
           <p>Quantity: {props.item.count}</p>
           <p>Total: ${props.item.total}</p>
           {/*<button onClick = {handleRemoveFromCartButtonClick}>Remove</button>*/}
        </div>
    );
};

export default CartItem;