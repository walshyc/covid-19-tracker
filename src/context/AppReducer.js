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
        countries: action.payload[0]
          .sort((a, b) => {
            if (a.country < b.country) {
              return -1;
            } else return 1;
          })
          .slice(0, 300),
        iconData: action.payload[0]
          .sort((a, b) => {
            if (a.cases < b.cases) {
              return -1;
            } else return 1;
          })
          .slice(0, 11),
        continents: action.payload[1],
        continent: action.payload[2],
        loading: false,
      };
    case "FILTER_COUNTRIES":
      return {
        ...state,
        filteredCountries: action.payload,
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
    case "CHANGE_INDEX":
      return {
        ...state,
        chartIndex: action.payload,
      };
    case "CHANGE_BTN":
      return {
        ...state,
        currentBtn: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "RESET_NATION":
      return {
        ...state,
        nation: { countryInfo: { iso2: "" }, country: "" },
        loading: false,
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
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
