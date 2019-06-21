import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Input from './Input/';
import { connect } from 'react-redux';
import dispatcher from './tools/dispatcher';
import { setSearch } from '../actions/search';

const Menu = ({ dispatch }) => {
  const [ searchValue, setSearchValue] = useState('');
  dispatcher(dispatch, setSearch ,searchValue)
  return ( 
    <div className="c-menu-container">
      <div className="c-menu-wrapper" >
        <Input label={"Search By Category "} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      </div>
    </div>
  )
}

export default connect()(Menu);