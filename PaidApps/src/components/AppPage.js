import React from 'react';
import { connect } from 'react-redux';
import { fetchAppPayload } from '../adapters/apps.adapter';
import { Link } from 'react-router-dom';

const RenderAppDetailsField = ({ field, value, type }) => 
{ return type === 'url' ? 
    <Link  to={value} className="c-pdp-product-description" >{ field }</Link > :
    <span>
      <h3 className="c-pdp-product-title">{ field }</h3>
      <p className="c-pdp-product-description" >{ value }</p>
    </span>
}


const RenderContent = ( { appName , appDetailsFields, appImage, appGenres} ) => (
  <div className="c-pdp-inner">
    <div className="c-pdp-content-container">
      <div className="c-pdp-product-info-container">
        <h2 className="c-pdp-product-title">{appName}</h2>
        {
          appDetailsFields.length &&
          appDetailsFields.map( props => <RenderAppDetailsField  {...props}/> )
        }
      </div>
      <div className="c-pdp-image-container c-pdp-product-carousel" >
        <img className="c-plp-product-image_source" src={appImage}></img>
        <div className="c-plp-product-tags_container">
          {
            appGenres.length && 
            appGenres.map( ({ name, url , id}) => <Link key={id} to={url} >{ name }</Link>)
          }
        </div>
      </div>
    </div>
  </div>
)
const AppPage = ( { appDetails } ) => {
  console.log({ appDetails });
  return ( 
    <div className="c-pdp-container">
    {appDetails === undefined ?
      <div className="c-pdp-product-info-container">
        LOADING 
      </div> :
      RenderContent(appDetails)
  }
  </div>
  )
}

const mapStateToProps = (state, props ) => ({
  appDetails: fetchAppPayload(props.match.params, state),
})
export default connect(mapStateToProps)(AppPage);