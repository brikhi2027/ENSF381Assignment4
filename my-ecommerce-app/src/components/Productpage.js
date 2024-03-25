import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './footer';


const Productpage = () => {
    return(
        <div className = "product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList /></td>
                    <td style={{verticalAlign:'top'}}><Cart /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
};

export default Productpage;