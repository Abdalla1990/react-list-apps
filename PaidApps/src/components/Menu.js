import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Input from './Input/';
import { connect } from 'react-redux';
import dispatcher from './tools/dispatcher';
import { setSearch } from '../actions/search';

const Menu = ({ dispatch }) => {
  const [ searchValue, setSearchValue] = useState('');
  searchValue !== "" && dispatcher(dispatch, setSearch ,searchValue)
  return ( 
    <div className="c-menu-container">
      <Link to="/" className="c-logo">
        <img src="/Logo.jpg"></img>
      </Link>
      <div className="c-menu-wrapper" >
        <Link to="/" className="category-container">Home</Link>
        <Input label={"Search By Category "} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      </div>
    </div>
  )
}

export default connect()(Menu);