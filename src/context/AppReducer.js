export default (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return {
        ...state,
        nation: action.payload,
        // irlCounties: action.secondPayload,
        irlStats: action.thirdPayload,
        loading: false,
      };
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload
          .sort((a, b) => {
            if (a.country < b.country) {
              return -1;
            } else return 1;
          })
          .slice(0, 300),
        loading: false,
      };
    case "GET_GLOBAL":
      return {
        ...state,
        global: action.payload,
        loading: false,
      };
    case "GET_GLOBAL_HISTORY":
      return {
        ...state,
        globalHistory: action.payload,
        loading: false,
      };
    case "GET_COUNTRIES_HISTORY":
      return {
        ...state,
        countriesHistory: action.payload,
        loading: false,
      };
    case "GET_COUNTRY_HISTORY":
      return {
        ...state,
        countryHistory: action.payload,
        loading: false,
      };
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
