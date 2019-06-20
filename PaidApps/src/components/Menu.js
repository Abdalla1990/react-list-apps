import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Search from 'react-icons/lib/md/search';

const Menu = () => {
  const [ searchValue, setSearchValue] = useState('');
  return ( 
    <div className="c-menu-container">
      <Link to="/" className="c-logo">
        <img src="/Logo.jpg"></img>
      </Link>
      <div className="c-menu-wrapper" >
        <Link to="/" className="category-container">Home</Link>
        <div className="category-container">
          <Search className="c-header_svg" />
          <input placeholder={"Search By Category "} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        </div>
        
      </div>
    </div>
  )
}

export default Menu