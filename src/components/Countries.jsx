import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

import "../../src/App.css";

const Countries = () => {
  const [countryName, setCountryName] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const [flag, setflag] = useState([]);

  const [select, setselect] = useState("pakistan");
  useEffect(() => {
    const Api = async () => {
      const fetchCountryName = await fetch(
        "https://disease.sh/v3/covid-19/countries"
      );
      const fetchCountryInfo = await fetch(
        `https://disease.sh/v3/covid-19/countries/${select}`
      );
      const countryName = await fetchCountryName.json();
      const countryData = await fetchCountryInfo.json();
      setCountryName(countryName);
      setflag(countryData.countryInfo.flag);
      setCountryInfo(countryData);
    };

    Api();
  }, [select]);

  return (
    <>
      <div>
        <Navbar state={setselect} />
        <div className="container">
          <div
            className="container my-4 row text-center "
            style={{ flexWrap: "wrap" }}
          >
            <div
              className="col-sm-12 shadow col-12 col-md-6 d-flex my-4 text-center align-item-center"
              style={{ height: "60px", justifyContent: "space-around" }}
            >
              <h1>{countryInfo.country}</h1>
              <img
                src={flag}
                alt=""
                className="position-relative end-0 shadow mx-2 my-1"
                style={{ width: "100px", height: "50px" }}
              />
            </div>
            <div className=" float-end col-lg-6 col-md-6 col-sm-12 col-12 my-4">
              <ul
                className="shadow"
                style={{
                  height: "60px",
                  listStyleType: "none",
                  overflow: "auto",
                }}
              >
                {countryName.map((country) => (
                  <li
                    className="bg-dark text-light fw-bold shadow "
                    onClick={() => setselect(country.country)}
                  >
                    {country.country}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row container justify-content-center">
          <div className="border p-4 col-lg-2 mx-2 shadow fw-bold my-4 col-md-10 col-sm-10">
            <Card name="Active Cases" pro={countryInfo.active} />
          </div>
          <div className="border  p-4 col-lg-2 mx-2 shadow  fw-bold my-4 col-md-10 col-sm-10">
            <Card name="Cases" pro={countryInfo.cases} />
          </div>

          <div className="border col-lg-2  p-4 mx-2 shadow fw-bold my-4 col-md-10 col-sm-10">
            <Card name="Today Death" pro={countryInfo.deaths} />
          </div>
          <div className="border col-lg-2  p-4 mx-2 shadow fw-bold my-4 col-md-10 col-sm-10">
            <Card name="Recovered" pro={countryInfo.recovered} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
