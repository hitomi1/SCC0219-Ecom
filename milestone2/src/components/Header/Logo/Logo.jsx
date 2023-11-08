import React from "react";
import './Logo.css'

import logo from '../../../assets/Logo.png'

const Logo = ( {size} ) =>
(  
    <img className="img-logo" style={{ width: size }} src={logo}></img>
);


export default Logo;