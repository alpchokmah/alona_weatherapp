export const getReportByLocation = async () => {};

export const getCountries = async () => {
  try {
    //http://dataservice.accuweather.com/locations/v1/cities/search

    // http://dataservice.accuweather.com/locations/v1/countries/

    const locationURL = process.env.REACT_APP_LOCATION_API;
    const apiKey = process.env.REACT_APP_API_KEY;

    const apiURLCountries = `${locationURL}/countries?apikey=${apiKey}`;

    console.log(apiURLCountries);

    const countriesList = await fetch(apiURLCountries).then((response) =>
      response.json()
    );

    console.log(countriesList);
  } catch (error) {
    console.log("getCountries -->> ", error);
  }
};

export const getLocationBasedOnPosition = async (lat, long) => {
  try {
    let locationID = 0;
    let locationName = "";
    const geopositionURL = process.env.REACT_APP_GEOPOSITION_API;
    const apiKey = process.env.REACT_APP_API_KEY;

    const searchQuery = `q=${lat},${long}`;

    const apiURL = `${geopositionURL}search?${searchQuery}&apikey=${apiKey}`;

    console.log(apiURL);

    const apiResult = await fetch(apiURL).then((response) => response.json());

    if (apiResult) {
      locationID = apiResult.Key;
      locationName =
        apiResult.EnglishName + ", " + apiResult.ParentCity.EnglishName;
    }

    console.log(apiResult);

    return { locationKey: locationID, locationName: locationName };
  } catch (error) {
    console.log("getCityBasedOnPosition -->> ", error);
  }
};

export const getForecastBasedOnLocationKey = async (locationKey) => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const forecasetURL = process.env.REACT_APP_FORECAST5DAYS;

    const apiURL = `${forecasetURL}/${locationKey}?apikey=${apiKey}&details=true`;
    console.log(apiURL);
    const apiResult = await fetch(apiURL).then((response) => response.json());
    console.log(apiResult);
    return apiResult;
  } catch (error) {
    console.log("getForecastBasedOnLocationKey -->> ", error);
  }
};
