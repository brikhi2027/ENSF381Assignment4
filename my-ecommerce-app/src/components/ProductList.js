import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products.js';


const ProductList = () => {
    return(
        {productsData.map(function(item) {
            return(
                <ProductItem product = {item} />
            );
        })}

    );
};

export default ProductList;