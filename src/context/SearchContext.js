const INITIAL_STATE = {
  city: undefined,
  dates: [],
  propertyType:undefined,
  priceRange : undefined,
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [],

};

// create context
export const GlobalContext = createContext(INITIAL_STATE);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state]);
  
  
  return (
    <GlobalContext.Provider value={{
      city: state.city,
      dates: state.dates,
      priceRange: state.priceRange,
      propertType: state.propertType,
      favourites: state.favourites,
      loading: state.loading,
      addHeadlines,
      addSources,
      addToFavourites,
      removeFromFavourites,
      addNewsToRead
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}


