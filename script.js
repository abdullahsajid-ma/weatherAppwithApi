/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
const btn = document.getElementById('btn')
// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
  //HINT: Use template literals to create a url with input and an API key
  const response = await fetch(URL)
  const data = await response.json()
  return data
  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
   getWeatherData(city).then(data => showWeatherData(data))
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById('city-input').value = ""
  document.getElementById('city-name').innerHTML = weatherData.name
  document.getElementById('weather-type').innerHTML = weatherData.weather[0].main
  document.getElementById('temp').innerHTML = weatherData.main.temp
  document.getElementById('min-temp').innerHTML = weatherData.main.temp_min
  document.getElementById('max-temp').innerHTML = weatherData.main.temp_max
}






// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fbd9e9dbd6mshe0e8cdc73b02908p107338jsna77db41aa7ee',
// 		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
// 	}
// };

// btn.onclick = () => fetch(`https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2022-08-14T00%3A00%3A00&aggregateHours=24&location=${input.value}&endDateTime=2022-08-15T00%3A00%3A00&unitGroup=us&contentType=json&shortColumnNames=0`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));