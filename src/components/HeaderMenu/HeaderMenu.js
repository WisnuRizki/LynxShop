import React from 'react';
import './HeaderMenu.css'
import shopIcon from '../image/shop_icon.png'
import logo from '../image/logo.png'

function HeaderMenu({onRouteChange}){
    return (
        <div className="_headerMenu_">
            <a className="_logoLeft_"><img  src={logo} alt={logo}/></a>
            <a onClick={() => onRouteChange('home')}>Home</a>
            <a onClick={() => onRouteChange('listproduk')}>Shoes</a>
            <a >All Collection</a>
            <a>Contact</a>
            <a onClick={() => onRouteChange('keranjang')}><img src={shopIcon} alt={shopIcon}/></a>
        </div>
    );
}

export default HeaderMenu;