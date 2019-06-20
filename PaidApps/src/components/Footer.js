import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Twitter from 'react-icons/lib/io/logo-twitter';
// import Facebook from 'react-icons/lib/io/logo-facebook'
import Arrow from 'react-icons/lib/md/arrow-drop-down';

class Menu  extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        accounts : [{name: "My Account"}, {name: "My Orders"}, {name: "Account Details"}, {name: "Forgot Password"}],
        help : [{name: "Helpful Links"}, {name: "Printing Sizes"}, {name: "Return Policy"}, {name: "Usage Policy"}, {name: "Privacy Policy"}, {name: "About Us"}, {name: "Contact Us"}],
        contact : [{name:"Stay up to date"}, {name:"   Name"}, {name:"   Email"}, {name:"Subscripe"}]
      }
    }
    componentDidUpdate() {
        
    }
    // handleMouseOver = key => this.handleMenuItemClick(key);
    // handleMouseLeave = () => this.handleMenuItemClick();
    render(){
			return ( 
        <div className="c-footer-container">
          <Link  to="/" className="c-logo">
            <img src="/logo.jpg"></img>
          </Link>
          
          <div className="c-footer-nav-wrapper" >
            <div className="c-footer-accounts-container">
              <p className="c-footer-nav-title">{this.state.accounts[0].name}</p>
              <div className="c-footer-nave-item-container">{ this.state.accounts.map((account, index) => index === 0 ? null :
                <a className="c-footer-nave-item">{account.name}</a>
                )}
              </div>
            </div>
            <div className="c-footer-help-container">
              <p className="c-footer-nav-title">{this.state.help[0].name}</p>
              <div className="c-footer-nave-item-container">{ this.state.help.map((helpItem, index) => index === 0 ? null :
                <a className="c-footer-nave-item">{helpItem.name}</a>
                )}
              </div>
            </div>
          </div>
          <div className="c-footer-contact-us-form">
            <p className="c-footer-contact-us-title">{this.state.contact[0].name}</p>
            <div className="c-footer-contact-us-item-container">{ this.state.contact.map((contactFormItem, index) => index === 0  || index === 3 ? null :
              <input className="c-footer-contact-us-item" placeholder={contactFormItem.name} />
              )}
            </div>
            <button className="c-footer-contact-us-button" >{this.state.contact[3].name}</button>
          </div>
				</div>
			)
    }
}

export default connect()(Menu)