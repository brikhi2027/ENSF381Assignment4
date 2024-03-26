import React, {useState} from 'react';
import Cart from './Cart';

const productStyles = {
    productImage: {
        width: '200px',
        height: 'auto',
    },
};

const ProductItem = ({product, addToCart}) => {
    const [showProductDescription, setShowProductDescription] = useState(false);
    
    const [cartItems, setCartItems] = useState([]);

    const handleShowDetails = () => {
        setShowProductDescription(true);
    }

    const handleHideDetails = () => {
        setShowProductDescription(false);
    }

    const handleAddToCartButtonClick = (product) => {
        addToCart(product);
        const isInCart = cartItems.findIndex(item => item.id === product.id);

        if (isInCart !== -1){
            const newCart = [...cartItems]
            newCart[isInCart].quantity += 1;
            newCart[isInCart].total += product.price;
            setCartItems(newCart);
        }
        else{
            setCartItems([...cartItems, {...product, quantity: 1, total: product.price }]);
        }
    };

    return(
        <div id={product.id}>
           <img src = {product.image} alt = {product.name} style = {productStyles.productImage}></img>
           <div onMouseEnter = {handleShowDetails} onMouseLeave = {handleHideDetails}>
                <p>{product.name}</p>
                {showProductDescription && <p>{product.description}</p>}
           </div>
           <p>Price: ${product.price}</p>
           <button onClick = {handleAddToCartButtonClick}>Add to Cart</button>

        </div>
    );
};

export default ProductItem;