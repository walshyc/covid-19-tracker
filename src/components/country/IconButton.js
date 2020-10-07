import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
export const IconButton = ({ c }) => {
  const { setCountry, getCountryHistory, getCountriesHistory, nation } = useContext(
    GlobalContext
  );
  const handleChange = (e) => {
    setCountry(e.target.value);
    getCountryHistory(e.target.value);
    getCountriesHistory();
  };
  return (
    <button
      type="button"
      className={c.icon === nation.countryInfo.iso2.toLowerCase() ? "btn btn-primary btn-block m-1" : "btn btn-outline-primary btn-block m-1"}
      onClick={handleChange}
      value={c.icon}
    >
      <div className="row">
        <div className="col">
          <span
            style={{ verticalAlign: "bottom" }}
            className={`flag-icon flag-icon-${c.icon} flag-icon-lg`}
          ></span>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span style={{fontSize: ".6vw"}} className="d-none d-md-block mt-1">{c.name}</span>
        </div>
      </div>
    </button>
  );
};
