import React from "react";
import { Paper, Typography, Grid, Divider } from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness1Icon from "@mui/icons-material/Brightness1";

import { displayTimeFormat, displayDateFormat } from "../components/common";

const WeatherCard = (props) => {
  const { dataSource } = props;
  let weatherIconName = "";
  let weatherIcon = dataSource && dataSource.Day ? dataSource.Day.Icon : false;

  weatherIconName =
    weatherIcon && weatherIcon <= 9 ? "0" + weatherIcon : weatherIcon;

  return (
    <Paper elevation={0} sx={{}}>
      {dataSource ? (
        <div>
          <Typography variant="overline" gutterBottom>
            {displayDateFormat(dataSource.Date)}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {dataSource.RealFeelTemperature.Minimum.Phrase} {" to "}{" "}
            {dataSource.RealFeelTemperature.Maximum.Phrase}
          </Typography>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="h3" component="h2">
                {dataSource.Temperature.Maximum.Value} &deg;
                {dataSource.Temperature.Maximum.Unit}
              </Typography>
              <Typography variant="h4" component="h2">
                {dataSource.Temperature.Minimum.Value} &deg;
                {dataSource.Temperature.Minimum.Unit}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img
                src={`${process.env.REACT_APP_WEATHER_ICON}${weatherIconName}-s.png`}
                loading="lazy"
              />
            </Grid>
            <Grid item xs={12}>
              <Divider light />
              <br></br>
              <Typography variant="subtitle2" gutterBottom>
                DAY
              </Typography>
              <Typography variant="body2" display="block" gutterBottom>
                {dataSource.Day.LongPhrase}
                <br></br>
                <br></br>
                <LightModeIcon
                  fontSize="small"
                  sx={{ marginBottom: "-4px" }}
                />{" "}
                {displayTimeFormat(dataSource.Sun.Rise)} |{" "}
                <WbTwilightIcon
                  fontSize="small"
                  sx={{ marginBottom: "-4px" }}
                />{" "}
                {displayTimeFormat(dataSource.Sun.Set)}
              </Typography>
              <br></br>
              <Divider light />
              <br></br>
              <Typography variant="subtitle2" gutterBottom>
                NIGHT
              </Typography>
              <Typography variant="body2" display="block" gutterBottom>
                {dataSource.Night.LongPhrase}
                <br></br>
                <br></br>
                <Brightness1Icon
                  fontSize="small"
                  sx={{ marginBottom: "-4px" }}
                />{" "}
                {displayTimeFormat(dataSource.Moon.Rise)} |{" "}
                <DarkModeIcon fontSize="small" sx={{ marginBottom: "-4px" }} />{" "}
                {displayTimeFormat(dataSource.Moon.Set)}
              </Typography>
            </Grid>
          </Grid>
        </div>
      ) : (
        ""
      )}
    </Paper>
  );
};

export default WeatherCard;
