import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/SearchContext'
// import './style.css'

const Favourites = () => {
  const {favourites,addToFavourites,removeFromFavourites } = useContext(GlobalContext)
  
  const isFavourite = (property) => {
    const value = favourites.find((favourite) => favourite.id === property.id)
    console.log(value);
    return value
  }

  return (
    <div className='container'>
      <div className='property-main'>
        <h2 className="title">Favourites</h2>
        <div className="property-grid">

          {
            favourites.map((favourite,index) => {
              return (
                <Link to='/' key={favourite.id}>
                  <div className="showcase" >
                    <div className="showcase-banner">
                      <img src={favourite.image} alt={favourite.name} width="300" className="property-img "/>
                      
                      
                      {/* {attributes.tag && <p className={`showcase-badge angle ${attributes.tag === 'New' ? 'pink' : 'black'}`}>{attributes.tag}</p>} */}
                      <div className="showcase-actions">
                        <button 
                          className= "btn-action"
                          onClick={() => {
                          if(isFavourite(favourite)) removeFromFavourites(favourite)
                          else addToFavourites(favourite)
                        }}>
                          {
                            isFavourite(favourite) 
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
                      <Link to={`/category/${favourite.id}`} className="showcase-category">{favourite.type}</Link>
                      <Link to={`/properties/${favourite.id}`}>
                        <h2 className="showcase-title">{favourite.name} </h2>
                        
                        <div className="showcase-location">
                          <ion-icon name="location-outline"></ion-icon>{favourite.address}
                        </div>
                      </Link>
              
                      <div className="price-box">
                        <p className="price">{`$${favourite.price}`}</p>
                        {/* <del>$75.00</del> */}
                      </div>
                      <div className='features'>
                        <p>{favourite.surface}</p>
                        <p>{favourite.bedrooms} beds</p>
                        <p>{favourite.bathrooms} bathrooms</p>
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

export default Favourites