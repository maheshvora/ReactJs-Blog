import React from 'react'
import Logo from '../Logo'
import './style.css';
import Card from '../UI/Card';
import Navbar from '../Navbar';

/**
* @author Mahesh Vora
* @function Header
**/

const Header = (props) => {
  return(
    <div>
      <Card>
        <div style={{padding:'25px 0'}}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
   )

 }

export default Header;