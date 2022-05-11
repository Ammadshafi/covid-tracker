import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const Home = () => {
  const [Global, setGlobal] = useState([]);
  useEffect(() => {
    const Api = async () => {
      const Global = await fetch("https://disease.sh/v3/covid-19/all");
      const GlobalData = await Global.json();
      setGlobal(GlobalData);
      console.log(GlobalData);
    };
    Api();
  }, []);

  return (
    <>
      <Navbar />
      <div className="row my-4  justify-content-center ">
        <div
          className="col-10 d-flex  text-center p-2 my-4 justify-content-center "
          style={{ flexWrap: "wrap" }}
        >
          <h1 className="text-center my-4  p-4 text-danger shadow col-8 col-md-10 col-sm-10">
            Global Data Covid 19
          </h1>
        </div>
        <div className="border p-4 col-lg-3 mx-2 shadow fw-bold my-4 col-md-10 col-sm-10">
          <Card name="Active Cases" pro={Global.active} />
        </div>
        <div className="border  p-4 col-lg-3 mx-2 shadow  fw-bold my-4 col-md-10 col-sm-10">
          <Card name="Today Cases" pro={Global.todayCases} />
        </div>

        <div className="border col-lg-3  p-4 mx-2 shadow fw-bold my-4 col-md-10 col-sm-10">
          <Card name="Today Death" pro={Global.todayDeaths} />
        </div>
        <div className="border col-lg-3  p-4 mx-2 shadow fw-bold my-4 col-md-10 col-sm-10">
          <Card name="Today Recover" pro={Global.recovered} />
        </div>
        <div className="border col-lg-3  p-4 mx-2 shadow fw-bold my-4 col-md-10 col-sm-10 ">
          <Card name="Today Death" pro={Global.todayRecovered} />
        </div>
      </div>
    </>
  );
};

export default Home;
