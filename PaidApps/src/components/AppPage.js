import React from 'react';
import { connect } from 'react-redux';
import { fetchAppPayload } from '../adapters/apps.adapter';
import { Link } from 'react-router-dom';

const RenderAppDetailsField = ({ field, value }) => (
  <span>
    <h2 className="c-pdp-product-title">{ field }</h2>
    <p className="c-pdp-product-description" >{ value }</p>
  </span>
);

const AppPage = ( { appDetails } ) => {
  console.log({ appDetails });
  const { appName , appDetailsFields, appImage, appGenres} = appDetails;
  return ( 
    <div className="c-pdp-container">
  {
    appDetailsFields !== undefined ?
    (<div className="c-pdp-inner">
      <div className="c-pdp-content-container">
        <div className="c-pdp-product-info-container">
          <h2 className="c-pdp-product-title">{appName}</h2>
          {
            appDetailsFields.map( ({field, value }) => <RenderAppDetailsField  field={field} value={value}/> )
          }
          
        </div>
        <div className="c-pdp-image-container c-pdp-product-carousel" >
          <img className="c-plp-product-image_source" src={appImage}></img>
          <div className="c-pdp-product-description">
            {
              appGenres.map( ({ name, url , id}) => <Link key={id} to={url} className="c-pdp-product-description" >{ name }</Link>)
            }
          </div>
        </div>
      </div>
    </div>) :
    (
      <div className="c-pdp-product-info-container">
        LOADING 
      </div>
    )
  }
  </div>
  )
}


const mapStateToProps = (state, props ) => ({
  appDetails: fetchAppPayload(props.match.params, state),
})
export default connect(mapStateToProps)(AppPage);