import React from 'react';
import {connect} from 'react-redux';
import { buildAppsDataProps } from '../adapters/apps.adapter';
import dispatcher from './tools/dispatcher';
import AppsListItem from './AppsListItem';

const DynamicPage = ({ apps, history }) => {

  const handleProductClick = app => {
    history.push(`/apps/${app.id}`);
  }

  return ( 
    <div className="div-container home-wrapper">
      <div className="c-plp-products-container">

        {apps.length === 0 && <div>LOADING</div>}

        {apps.map( (app, index) => (
          <AppsListItem app={app} index={index}  onAppImageClick={handleProductClick}/>
        ))}

      </div>
    </div>
  );
}

const mapStateToProps = ({ appsData = { results : [] } }) => ({
  apps: buildAppsDataProps(appsData),
})

export default connect(mapStateToProps)(DynamicPage)