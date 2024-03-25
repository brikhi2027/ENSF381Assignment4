import React from 'react';
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
        {productsData.map(function(item) {
            return(
                <ProductItem product = {item} />
            );
        })}

    );
};

export default ProductList;