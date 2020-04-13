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
        countries: action.payload
          .sort((a, b) => {
            if (a.country < b.country) {
              return -1;
            } else return 1;
          })
          .slice(0, 300),
        globalCases: action.payload
          .sort((a, b) => {
            if (a.cases > b.cases) {
              return -1;
            } else return 1;
          })
          .slice(0, 50),
        globalDeaths: action.payload
          .sort((a, b) => {
            if (a.deaths > b.deaths) {
              return -1;
            } else return 1;
          })
          .slice(0, 50),
        globalTests: action.payload
          .sort((a, b) => {
            if (a.tests > b.tests) {
              return -1;
            } else return 1;
          })
          .slice(0, 50),
        globalTestsPerMillion: action.payload
          .sort((a, b) => {
            if (a.testsPerOneMillion > b.testsPerOneMillion) {
              return -1;
            } else return 1;
          })
          .slice(0, 50),
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
        loading:false
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
