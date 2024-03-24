import React from 'react';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import Home from './Home';
//import Products from './Products';
//import Login from './Login';
//import companyLogo from '../../../public/images/logo.png';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: '50px',
        height: '50px',
    },
    navBar: {
        display: 'flex', 
        justifyContent: 'space-between',
        width: '100%'
    },
}

const companyLogo = process.env.PUBLIC_URL + '/images/logo.png';
const Header = () => {
    return(
        <div>
            <div style = {styles.container}>
                <img src = {companyLogo} alt = "Company Logo" style = {styles.logo}></img>
                <p>Company Name</p>
            </div>
            <br></br>
            <div style = {styles.navBar}>
                <a href='/'> Home </a>
                <a href='/Products'> Products </a>
                <a href='/Login'> Login </a>
            </div>
        </div>
    );
};

export default Header;