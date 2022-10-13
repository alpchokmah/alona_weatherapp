import React, { useState, useEffect } from "react";
import { Paper, Box, Typography } from "@mui/material";

import {
  getLocationBasedOnPosition,
  getForecastBasedOnLocationKey,
} from "./api/apiRequest";

import bgImage from "../assets/bg_mountaingraphic.png";
import WeatherCard from "./WeatherCard";

const WeatherForecast = () => {
  const [displayLocation, setDisplayLocation] = useState("");
  const [forecastData, setForecastData] = useState([]);

  const defaultLocation = async (position) => {
    try {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      const apiLocationData = await getLocationBasedOnPosition(lat, long);
      if (apiLocationData) {
        setDisplayLocation(apiLocationData.locationName);
        let locationKey = apiLocationData.locationKey;
        let apiData = await getForecastBasedOnLocationKey(locationKey);
        setForecastData(apiData.DailyForecasts);
      }
    } catch (error) {
      console.log("defaultLocation -->> ", error);
    }
  };

  const getCurrentCity = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(defaultLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getCurrentCity();
  }, []);

  const styles = {
    mainPaper: {
      padding: "50px",
      margin: "auto",
      height: 1000,
      width: "80%",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      justifyContent: "center",
    }
  };

  return (
    <Paper elevation={3} style={styles.mainPaper}>
      <div style={{ height: "20px" }}>&nbsp;</div>
      <Typography variant="h4" gutterBottom>
        {displayLocation}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "25%",
            height: 712,
            opacity: 0.9,
            padding: 5,
            margin: "auto",
          },
        }}
      >
        <WeatherCard
          dataSource={
            forecastData && forecastData.length > 0 ? forecastData[0] : ""
          }
        />
        <WeatherCard
          dataSource={
            forecastData && forecastData.length > 0 ? forecastData[1] : ""
          }
        />
        <WeatherCard
          dataSource={
            forecastData && forecastData.length > 0 ? forecastData[2] : ""
          }
        />
      </Box>
    </Paper>
  );
};

export default WeatherForecast;
