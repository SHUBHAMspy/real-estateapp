import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/SearchContext'
import './style.css'

const PropertyList = () => {
  const {properties,favourites,addToFavourites,removeFromFavourites } = useContext(GlobalContext)
  
  const isFavourite = (property) => {
    const value = favourites.find((favourite) => favourite.id === property.id)
    console.log(value);
    return value
  }

  return (
    <div className='container'>
      <div className='property-main'>
        <h2 className="title">New Properties</h2>
        <div className="property-grid">

          {
            properties.map((property,index) => {
              return (
                <Link to='/' key={property.id}>
                  <div className="showcase" >
                    <div className="showcase-banner">
                      <img src={property.image} alt={property.name} width="300" className="property-img "/>
                      
                      
                      {/* {attributes.tag && <p className={`showcase-badge angle ${attributes.tag === 'New' ? 'pink' : 'black'}`}>{attributes.tag}</p>} */}
                      <div className="showcase-actions">
                        <button 
                          className= "btn-action"
                          onClick={() => {
                          if(isFavourite(property)) removeFromFavourites(property)
                          else addToFavourites(property)
                        }}>
                          {
                            isFavourite(property) 
                              ? <ion-icon name="heart-outline"></ion-icon>
                              : <ion-icon name="heart" ></ion-icon> 
                          }
                        </button>
                        <button className="btn-action">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        
                        
                      </div>
                    </div>
                    <div className="showcase-content">
                      <Link to={`/category/${property.id}`} className="showcase-category">{property.type}</Link>
                      <Link to={`/property/${property.id}`}>
                        <h2 className="showcase-title">{property.name} </h2>
                        
                        <div className="showcase-location">
                          <ion-icon name="location-outline"></ion-icon>{property.address}
                        </div>
                      </Link>
              
                      <div className="price-box">
                        <p className="price">{`$${property.price}`}</p>
                        {/* <del>$75.00</del> */}
                      </div>
                      <div className='features'>
                        <p>{property.surface}</p>
                        <p>{property.bedrooms} beds</p>
                        <p>{property.bathrooms} bathrooms</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PropertyList