import React, {useState} from 'react';


const ProductItem = (product) => {
    const [showProductDescription, setShowProductDescription] = useState(false);

    const handleShowDetails = () => {
        setShowProductDescription(true);
    }

    const handleHideDetails = () => {
        setShowProductDescription(false);
    }

    //function handleAddToCartButtonClick(){
        //add code to handle the add to cart button click
    //}

    return(
        <div>
           <img src = {product.image} alt = {product.name}></img>
           <div onMouseEnter = {handleShowDetails} onMouseLeave = {handleHideDetails}>
                <p>{product.name}</p>
                {showProductDescription && <p>{product.description}</p>}
           </div>
           <p>Price: {product.price}</p>
           {/*<button onClick = {handleAddToCartButtonClick}>Add to Cart</button>*/}

        </div>
    );
};

export default ProductItem;