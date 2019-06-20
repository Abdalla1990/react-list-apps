import React from 'react';

const AppsListItem = ({ app, index, onAppImageClick  }) => {
    console.log({ app })
    return ( 
        <div key={index} className="c-plp-product-container">
            <div>{app.name}</div>
            <div className="c-plp-product-image" onClick={() => onAppImageClick(app)}>
                <img className="c-plp-product-image_source" src={app.image}></img>
            </div>
            <div className="c-plp-product-tags_container">
                { app.genres.length && app.genres.map( (genre, index) => (<div key={index}> { genre.name } </div>) ) }
            </div>
        </div>
    );
}



export default AppsListItem;