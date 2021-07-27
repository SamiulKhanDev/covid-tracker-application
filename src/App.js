import "./App.css";
import {
  Select,
  MenuItem,
  FormControl,
  Card,
  CardContent,
} from "@material-ui/core";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import StatesDeath from "./StatesDeath";
import Recovered from "./Recovered";
import "leaflet/dist/leaflet.css";
import Table from "./Table";
import Cases from "./Cases";
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import Graph from "./Graph";
import useFetchObj from "./useFetchObj";

const url = "https://disease.sh/v3/covid-19/countries";

function App() {
  const [mapCenter, setMapCenter] = useState({
    lat: 22.494106567553764,
    lng: 88.12139706029839,
  });
  const [casesType, setCasesType] = useState("cases");
  const [zoom, setZoom] = useState(2);
  const { countries, loading } = useFetch(url);
  const [defaultItem, setDefaultItem] = useState("Global");
  const [mainUrl, setMainUrl] = useState("https://disease.sh/v3/covid-19/all");
  const obj = useFetchObj(mainUrl);
  const onCountryChange = async (e) => {
    setDefaultItem(e.target.value);
    const mainUrl =
      e.target.value == "Global"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${e.target.value}`;
    setMainUrl(mainUrl);
  };

  useEffect(() => {
    if (obj.hasOwnProperty("countryInfo")) {
      setMapCenter({ lat: obj.countryInfo.lat, lng: obj.countryInfo.long });
      setZoom(3);
    } else {
      setMapCenter({ lat: 22.494106567553764, lng: 88.12139706029839 });
      setZoom(3);
    }
  }, [obj]);

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50vh" }}
      >
        <h1>Loading content.....</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1 style={{ marginLeft: "5px", fontSize: "15px", color: "red" }}>
            COVID-19 TRAKER BY SAMIUL KAHN
          </h1>
          <FormControl className="app__dropdown">
            <Select
              style={{ marginRight: "5px", color: "red", borderColor: "red" }}
              variant="outlined"
              value={defaultItem}
              onChange={onCountryChange}
            >
              <MenuItem value="Global">Global</MenuItem>
              {countries.map((countryParam) => {
                const { _id, countryInfo, country } = countryParam;
                return (
                  <MenuItem key={_id} value={countryInfo.iso2}>
                    {country}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="app__states">
          <Cases
            onClick={(e) => setCasesType("cases")}
            title="Covid Cases"
            todayCases={obj.todayCases}
            cases={obj.cases}
            active={obj.active}
          />
          <Recovered
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            todayRecovered={obj.todayRecovered}
            recovered={obj.recovered}
          ></Recovered>
          <StatesDeath
            onClick={(e) => setCasesType("deaths")}
            title="Death"
            death={obj.deaths}
            todayDeaths={obj.todayDeaths}
          />
        </div>
        <Map
          color={casesType}
          countries={countries}
          center={mapCenter}
          zoom={zoom}
        />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>live cases in all the countries</h3>
          <Table countries={countries} />
          <h3>WorldWide new {casesType}</h3>
          <Graph mainUrl={mainUrl} casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
