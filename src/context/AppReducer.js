export default (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return {
        ...state,
        nation: action.payload,
        loading: false,
      };
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
      case "GET_GLOBAL":
        return {
          ...state,
          global: action.payload,
          loading: false
        }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

// const countries = res.data.Countries;
// let countriesArr = [];
// countriesArr.push('HELLO')
// countries.map((country) => {
//   const countryName = country.Country;
//   countriesArr.push(countryName);
