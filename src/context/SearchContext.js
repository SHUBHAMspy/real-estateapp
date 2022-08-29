import { createContext, useEffect, useReducer, useState } from "react";
import { propertiesData } from "../data";
import AppReducer from "./AppReducer";

const INITIAL_STATE = {
  city: 'Location (any)',
  dates: [],
  propertyType:'Property type (any)',
  priceRange : 'Price range (any)',
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [],

};

// create context
export const GlobalContext = createContext(INITIAL_STATE);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const [properties, setProperties] = useState(propertiesData);
  const [cities, setCities] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state]);

  useEffect(() => {
    // return all countries
    const allCountries = properties.map((property) => {
      return property.country;
    });

    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCities(uniqueCountries);
  }, []);

  useEffect(() => {
    // return only countries
    const allProperties = propertiesData.map((property) => {
      return property.type;
    });

    // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // set countries state
    setPropertyTypes(uniqueProperties);
  }, []);
  
  const addToFavourites = (property) => {
    dispatch({type: "ADD_TO_FAVOURITES",payload: property})
  };
  
  const removeFromFavourites = (property) => {
    dispatch({type: "REMOVE_FROM_FAVOURITES",payload: property})
  };
  
  return (
    <GlobalContext.Provider value={{
      city: state.city,
      dates: state.dates,
      priceRange: state.priceRange,
      propertyType: state.propertyType,
      favourites: state.favourites,
      loading: state.loading,
      properties,
      addToFavourites,
      removeFromFavourites
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}


