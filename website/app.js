/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = 'a82c4918f2869662cc8ea686a459d73f'
const zip = document.getElementById('zip').value;
const content = document.getElementById('feelings').value;
let url = baseURL + zip + apiKey

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction() {

}




//Adds an event listener to an existing HTML button from DOM using Vanilla JS.

//In the file app.js, the element with the id of generate should have an addEventListener() method called on it,
//with click as the first parameter, and a named callback function as the second parameter.

