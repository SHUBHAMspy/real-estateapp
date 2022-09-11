import { useContext, useState } from "react";
import { GlobalContext } from "../../context/SearchContext";
import './style.css';

function SearchBar() {
  const {countries,country,addCity,priceRange,propertyType} = useContext(GlobalContext)
  const [cityIsOpen, setCityIsOpen] = useState(false);
  const [dateIsOpen, setDateIsOpen] = useState(false);
  const [priceIsOpen, setPriceIsOpen] = useState(false);
  const [propertyIsOpen, setPropertyIsOpen] = useState(false);
  console.log(countries);
  return (
    <div className="search-bar ">
      <div className="search-filter">
        <div className="search-dropdown-btn" onClick={() => setCityIsOpen(!cityIsOpen)}>
          <div>
            <div className='search-text'>{country}</div>
            <div className='label-text'>Select your place</div>
          </div>
          {cityIsOpen 
            ? <ion-icon name="chevron-up-outline" className="remove-icon" ></ion-icon>
            : <ion-icon name="chevron-down-outline" className="add-icon"  ></ion-icon>
          }
          <div className="search-dropdown-content">
            { 
              countries.map((country,index) => (
                <p key={index} className="content-item">{country}</p>
              ))
            }
          </div>
        </div>
        <div className="search-dropdown-btn" onClick={() => setDateIsOpen(!dateIsOpen)}>
          <div>
            <div className='search-text'>India</div>
            <div className='label-text'>Select your Date</div>
          </div>
          {dateIsOpen 
            ? <ion-icon name="chevron-up-outline" className="remove-icon" ></ion-icon>
            : <ion-icon name="chevron-down-outline" className="add-icon"  ></ion-icon>
          }
          
        </div>
        <div className="search-dropdown-btn" onClick={() => setPriceIsOpen(!priceIsOpen)}>
          <div>
            <div className='search-text'>Price(any)</div>
            <div className='label-text'>Select your price</div>
          </div>
          {priceIsOpen 
            ? <ion-icon name="chevron-up-outline" className="remove-icon" ></ion-icon>
            : <ion-icon name="chevron-down-outline" className="add-icon"  ></ion-icon>
          }
        </div>
        <div className="search-dropdown-btn" onClick={() => setPropertyIsOpen(!propertyIsOpen)}>
          <div>
            <div className='search-text'>Property(any)</div>
            <div className='label-text'>Select your property</div>
          </div>
          {propertyIsOpen 
            ? <ion-icon name="chevron-up-outline" className="remove-icon" ></ion-icon>
            : <ion-icon name="chevron-down-outline" className="add-icon"  ></ion-icon>
          }
          <div className="search-dropdown-content">
            { 
              
              countries.map((country,index) => (
                <div className="content-item">{country}</div>
              ))
            }
          </div>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
