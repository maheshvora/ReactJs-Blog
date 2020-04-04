import React, { useState } from 'react';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searhed');

    }


    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/post">Posts</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
            </form>
            
        </div>
    </div>
   )

 }

export default Navbar