import React, {useState} from 'react';
import Cart from './Cart';

const ProductItem = (product) => {
    const [showProductDescription, setShowProductDescription] = useState(false);
    const [count, setCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleShowDetails = () => {
        setShowProductDescription(true);
    }

    const handleHideDetails = () => {
        setShowProductDescription(false);
    }

    const handleAddToCartButtonClick = (product) => {
        Cart(product);
        setCartItems([...cartItems, product]);
        setTotalPrice(totalPrice + product.price);
        setCount(count + 1);
    }

    return(
        <div id={product.id}>
           <img src = {product.image} alt = {product.name}></img>
           <div onMouseEnter = {handleShowDetails} onMouseLeave = {handleHideDetails}>
                <p>{product.name}</p>
                {showProductDescription && <p>{product.description}</p>}
           </div>
           <p>Price: {product.price}</p>
           {<button onClick = {handleAddToCartButtonClick}>Add to Cart</button>}

        </div>
    );
};

export default ProductItem;