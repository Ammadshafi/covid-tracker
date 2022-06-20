import React from "react";
import { Chart, registerables } from "chart.js";
import { Doughnut, Line, Scatter, Bar } from "react-chartjs-2";
Chart.register(...registerables);

const Charts = ({lable,cases,deaths}) => {
  return (
    <Line
      data={{
        labels: lable,
        
        datasets: [
          {
            label: "cases",
            data: cases,
            borderColor: "yellow",
            tension: 1,
            fill: true,
          },
          {
            label: "deaths",
            data:deaths,
            borderColor: "red",
            tension: 1,
            fill: true,
          },
       
        ],
      }}
    />
  );
};

export default Charts;
