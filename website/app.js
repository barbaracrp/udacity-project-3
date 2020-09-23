/* Global Variables */
const apiKey = 'a82c4918f2869662cc8ea686a459d73f';
const baseURL = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

//Adds an event listener to an existing HTML button from DOM using Vanilla JS.
//In the file app.js, the element with the id of generate should have an addEventListener() method called on it,
//with click as the first parameter, and a named callback function as the second parameter.

document.getElementById('generate').addEventListener('click', performAction);

function performAction() {
  const zip = document.getElementById('zip').value;
  getWeather(zip).then((weatherData) => {
    const feelings = document.getElementById('feelings').value;
    const data = {
      date: newDate,
      temp: weatherData.main.temp,
      feelings,
    };
    postData('/add', data).then(() => {
      updateUI();
    });
  });
}

//Integrating OpenWeatherMap API
//The personal API Key for OpenWeatherMap API is saved in a named const variable.
//The API Key variable is passed as a parameter to fetch() .
//Data is successfully returned from the external API.
const getWeather = async (zip) => {
  const url = `${baseURL}zip=${zip},us`;
  const response = await fetch(url);
  try {
    const weatherData = await response.json();
    return weatherData;
  } catch(error) {
    console.log("error", error);
  }
}


//POST
//The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
const postData = async (url = '', data = {}) => {
  console.log(data)
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  }catch(error) {
    console.log('error', error);
  }
}

//GET
//There should be an asynchronous function to fetch the data from the app endpoint
const getAppData = async () => {
  const response = await fetch('/all');
  try {
    const appData = await response.json();
    return appData;
  } catch(error) {
    console.log("error", error);
  }
}


//Dynamically Update UI
//Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
//existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.
const updateUI = async() => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData.tempEntry[0].date;
    const tempCelsius = allData.tempEntry[0].temp - 273.15;
    document.getElementById('temp').innerHTML = tempCelsius.toFixed(2);
    document.getElementById('content').innerHTML = allData.tempEntry[0].feelings;
  } catch(error) {
    console.log('error', error);
  }
}