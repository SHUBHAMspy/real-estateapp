export default (state, action) => {
  
  console.log(action.payload);
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        city: action.payload,
      };
    case "ADD_DATE":
      return {
        ...state,
        date: action.payload
        
      };
    case "ADD_PRICERANGE":
      return {
        ...state,
        price: action.payload
        
      };
    case "ADD_PROPERTYTYPE":
      return {
        ...state,
        propertyType: action.payload
        
      };
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites,action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter(
          (favourite) => favourite.id !== action.payload.id
        ),
        
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};