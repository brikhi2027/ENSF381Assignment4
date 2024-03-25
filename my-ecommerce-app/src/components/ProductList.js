import React, { useState } from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products.js';


const ProductList = () => {
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        image: '',

    });
    return(
        <div>
        {productsData.map(function(item) {
            return(
                <ProductItem product = {item} />
            );
        })}
    </div>
    );
};

export default ProductList;