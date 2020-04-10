import React, { Component } from "react";
import moment from 'moment';
import "./App.css";
import Navbar from "./components/Navbar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "Ireland",
      cases: "",
      deaths: "",
      recovered: "",
      newCases:"",
      newDeaths: "",
      newRecovered: "",
      lastUpdated: ""
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://api.covid19api.com/summary`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const countries = result.Countries;
        countries.map((nation) => {
          if (nation.Country === "Ireland") {
            const date = moment(nation.Date).format('ddd do MMM Y')
            this.setState({
              cases: nation.TotalConfirmed,
              deaths: nation.TotalDeaths,
              recovered: nation.TotalRecovered,
              newCases:nation.NewConfirmed,
              newDeaths: nation.NewDeaths,
              newRecovered: nation.NewRecovered,
              lastUpdated: date
            });
          }
        });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <h3 className="pt-3 pb-1">Covid-19 Tracker</h3>
            <div className="card bg-light mb-3">
              <div className="card-header bg-primary text-light">Ireland</div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cases
                    <span className="badge badge-primary badge-pill">
                      {this.state.cases}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Deaths
                    <span className="badge badge-primary badge-pill">
                      {this.state.deaths}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Recovered
                    <span className="badge badge-primary badge-pill">
                      {this.state.recovered}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    New Cases since {this.state.lastUpdated}
                    <span className="badge badge-primary badge-pill">
                      {this.state.newCases}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Deaths since {this.state.lastUpdated}
                    <span className="badge badge-primary badge-pill">
                      {this.state.newDeaths}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Recovered since {this.state.lastUpdated}
                    <span className="badge badge-primary badge-pill">
                      {this.state.newRecovered}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
