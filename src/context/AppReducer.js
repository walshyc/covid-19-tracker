export default (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY":

      return {
        ...state,
        nation: action.payload,
      };
    case 'GET_COUNTRIES':
        return {
            ...state,
            countries: action.payload
        }
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
