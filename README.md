# alona_weatherapp
Weather App using Accuweather API

How to install and run this app

##
Clone the source on your computer

##
Install the necessary packages, use the following command to install the packages using npm
  > npm install

##
Create .env file on the root of your folder and add the following variables
  REACT_APP_API_KEY = "ADD YOUR OWN API KEY HERE"  
  REACT_APP_API_URL = http://dataservice.accuweather.com  
  REACT_APP_API_VERSION = v1  
  REACT_APP_LOCATION_API = http://dataservice.accuweather.com/locations/v1  
  REACT_APP_GEOPOSITION_API = http://dataservice.accuweather.com/locations/v1/cities/geoposition/  
  REACT_APP_FORECAST5DAYS = http://dataservice.accuweather.com/forecasts/v1/daily/5day  
  REACT_APP_WEATHER_ICON = https://developer.accuweather.com/sites/default/files/  

  Note: All values must not have quotations on them. Also make sure to add .env to your gitignore file

##
Run the app by using the following command
  > npm start