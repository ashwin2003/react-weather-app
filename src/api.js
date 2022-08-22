export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "22fff0cf9cmshd09694365975f05p18ef8ejsne80199ba601e", // enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "c4a76282817f2187fa963fe3f4bb389a"; // enter your key from openweather API

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//   },
// };

// fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
