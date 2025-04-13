import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <header style={headerStyle}>
            <div style={leftSectionStyle}>
                <h1 style={{ margin: '0', color:"rgb(241, 18, 33)" }}>Pizzeria</h1>
                <Link to="/"><img src="/image/PizzeriaLogo.png" alt="Logo" style={logoStyle} /> </Link>
                <nav style={navStyle}>
                    <Link style={linkStyle} to="/Pizzalist">Order Pizza</Link>
                    <Link style={linkStyle} to="/CreateOwn">Build your Pizza</Link>
                </nav>
            </div>
            <div style={rightSectionStyle}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <Link to="/cart" style={{ marginRight: '8px', backgroundColor:"orange", color:"white" }}>Shopping - {cartItems.length}</Link>
                
            </div>
        </header>
    );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'black', 
    
};

const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
};

const logoStyle = {
    height: '50px', 
    marginLeft: '10px',
    marginRight: '20px',
};

const navStyle = {
    display: 'flex',
    gap: '15px', 
};

const linkStyle = {
    textDecoration: 'none',
    color: "antiquewhite", 
};

const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-evenly',
    backgroundColor:'orange',
    color:"white",
    height:"40px",
    width:"160px",
};

export default Header;
