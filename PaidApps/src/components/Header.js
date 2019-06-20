import React from 'react';

import Phone from 'react-icons/lib/md/phone';
import Email from 'react-icons/lib/md/email';


const Header  = () => {
  return ( 
    <div className="c-header">
      <div className="c-header_container">
        <ul className="c-header_contact--container">
          <li> 
            <Email className="c-header_svg" /> 
            <div>info@barigallery.com</div>
          </li>
          <li> 
            <Phone className="c-header_svg" />
            <div>+14389228758</div> 
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;