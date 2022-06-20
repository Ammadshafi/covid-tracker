import "./App.css";
import { Api } from "./Services/Api";
import { useEffect, useState } from "react";
import logo from "./assets/images/logo.png";
import { Grid, Paper, TextField, Box, Typography, Button } from "@mui/material";
import DataCard from "./components/DataCard";
import Charts from "./components/Chart";
import chartApi from "./Services/ChartApi";
import world from "./assets/images/world.png";

function App() {
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [chartData, setChartData] = useState({});
  const [flag, setflag] = useState("");
  const [lable, setlable] = useState([]);
  const [cases, setcases] = useState([]);
  const [deaths, setdeaths] = useState([]);
  const [recovered, setrecovered] = useState([]);

  const submit = () => {
    if (!input) {
      alert("please Enter the country name");
    } else {
      setSearch(input);
      setInput("");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await Api(search);
      setdata(data);
      setLoading(false);

      setflag(data.countryInfo.flag);
    };
    const fetchChart = async () => {
      const data = await chartApi(search);
      setChartData(data);
      if (search == "") {
        setlable(Object.keys(data.cases));
        setcases(Object.values(data.cases));
        setdeaths(Object.values(data.deaths));
        // setrecovered(Object.values(data.recovered));
      } else {
        // setlable([1,2,3,4])
        setlable(Object.keys(data.timeline.cases));

        setcases(Object.values(data.timeline.cases));
        setdeaths(Object.values(data.timeline.deaths));
        // setrecovered(Object.values(data.timeline.recovered));
      }

      console.log(data);
    };
    fetchData();

    fetchChart();
  }, [search]);

  return (
    <Grid container mt={10}>
      <Grid item xs={12} container>
        <Grid item xs={12} lg={6} md={6} sm={6} textAlign="center">
          <img src={logo} alt="Logo" className="logo shadow" />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={6} mt={4}>
          <Box
            display={"flex"}
            alignItems={"center"}
            textAlign={"center"}
            justifyContent="center"
          >
            <TextField
              id="outlined-basic"
              label="Enter Country Name"
              variant="filled"
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Box ml={2}>
              <Button variant="contained" onClick={submit}>
                submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent={"center"}>
        <Grid item xs={12} sm={10} md={8} lg={5} mt={2}>
          {search === "" ? (
            <Box
              display="flex"
              className="shadow text-main"
              alignItems="center"
            >
              <img src={world} className="flag" alt="worldimg" />
              <Typography variant="h4" ml={1}    textAlign={"center"} justifyContent={"center"} >
                Global data
              </Typography>
            </Box>
          ) : (
            <Box
              display="flex"
              className="shadow text-main"
              alignItems="center"
            >
              <img src={flag} className="flag" alt="flag" />
              <Typography variant="h4" ml={1}>
                {data.country}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        flexWrap={"wrap"}
        display="flex"
        justifyContent={"space-evenly"}
        mt={5}
      >
        <Grid item xs={10} lg={2} md={6} sm={6} mt={5} className="bg-main">
          <DataCard heading={"active"} data={data.active} />
        </Grid>
        <Grid item xs={10} lg={2} md={6} sm={6} mt={5} className="bg-main">
          <DataCard heading={"cases"} data={data.cases} />
        </Grid>
        <Grid item xs={10} lg={2} md={6} sm={6} mt={5} className="bg-main">
          <DataCard heading={"deaths"} data={data.deaths} />
        </Grid>
        <Grid item xs={10} lg={2} md={6} sm={6} mt={5} className="bg-main">
          <DataCard heading={"recovered"} data={data.recovered} />
        </Grid>
      </Grid>
      <Grid item xs={12} mt={2}>
        <Charts
          lable={lable}
          cases={cases}
          deaths={deaths}
        />
      </Grid>
    </Grid>
  );
}

export default App;
