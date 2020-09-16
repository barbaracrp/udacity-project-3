// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express'); //importando o express

// Start up an instance of app
const app = express(); // servidor express

const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false })); // para entender urls que trazem parametros
app.use(bodyParser.json()); // para entender requisicóes json

// Cors for cross origin allowance
const cors = require('cors'); // package q permite browser e server conversar um com o outro
app.use(cors());              // sem secutity interrupcoes

// Initialize the main project folder
// allows us to write server-side code that can them connect to client-side code wich would be in a folder called website
app.use(express.static('website')); //pointed our app to the folder that we want them to look at.(connects our server-side code (server.js) to our client side code (website)folder)

// Setup Server
const port = 3000;
const server = app.listen(port, listening); //fala pro server qual porta e callback func

function listening(){
  console.log('server running');
  console.log(`running on localhost: ${port}`);
};

//GET route
app.get('/', sendData);

function sendData(request, response){
  res.send()
};

//POST route
app.post('/add', addData);
function addData(req, res){
  res.send('POST received');
}