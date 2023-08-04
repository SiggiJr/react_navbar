import { useState } from 'react';
import './Navbar.scss'
import { useLocation } from 'react-router-dom';

import { NavLink } from "react-router-dom";

const Navbar = () => {

  // const path = useLocation().pathname

  return ( 
    <nav className='navbar'>
      {/* <Link to={"/"} style={{backgroundColor: path === "/" ? "aquamarine" : "aqua"}}>Speisekarte</Link>
      <Link to={"/kontakt"} style={{backgroundColor: path === "/kontakt" ? "aquamarine" : "aqua"}}>Kontakt</Link>
      <Link to={"/oeffnungszeiten"} style={{backgroundColor: path === "/oeffnungszeiten" ? "aquamarine" : "aqua"}}>Öffnungszeiten</Link>
      <Link to={"/galerie"} style={{backgroundColor: path === "/galerie" ? "aquamarine" : "aqua"}}>Galerie</Link> */}
      <NavLink to={"/"} className={(object) => {
        console.log(object);
        return object.isActive ? "active" : ""
      }}>Speisekarte</NavLink>
      <NavLink to={"/kontakt"} className={({isActive}) => isActive ? "active" : ""}>Kontakt</NavLink>
      <NavLink to={"/oeffnungszeiten"} className={({isActive}) => isActive ? "active" : ""}>Öffnungszeiten</NavLink>
      <NavLink to={"/galerie"} className={({isActive}) => isActive ? "active" : ""}>Galerie</NavLink>
    </nav>
  );
}

export default Navbar;