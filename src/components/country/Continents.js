import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
export const Continents = () => {
  const { continents, getCountries, changeButton, currentBtn, resetNation } = useContext(GlobalContext);

  const handleClick = (e) => {
    getCountries(e.target.value);
    resetNation()
    changeButton(e.target.value)
  };

  

  return (
    <div className="card mb-3 bg-light mt-5">
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <h6 className="text-primary">Select a region:</h6>
          </div>
          <div className="col-12 ">
            <button
              style={{ fontSize: ".7em" }}
              value="All"
              onClick={handleClick}
              className={currentBtn === "All" ? "btn btn-primary btn-block m-1" : "btn btn-outline-primary btn-block m-1"}
            >
              Worldwide
            </button>
          </div>
          {continents.map((c) => {
            return (
              <div key={c} className="col-6 col-md-4">
                <button
                  style={{ fontSize: ".65em" }}
                  value={c}
                  onClick = {handleClick}
                  className={currentBtn === c ? "btn btn-primary btn-block m-1" : "btn btn-outline-primary btn-block m-1"}
                >
                  {c === "Australia/Oceania" ? "Oceania" : c}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
