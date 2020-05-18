var path = require('path')
const express = require('express')
var bodyParser = require('webpack-body-parser')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,

});

// textapi.sentiment({
//     'text': 'formText'
// }, function(error, response) {
//     if (error === null) {
//         console.log(response);
//     }
// });



const app = express()

//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)


// designates what port the app will listen to for incoming requests
//assign port number as 8082
const port = 8082;
app.listen(port, function() {
    console.log(`running on localhost:${port}`)
})


app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        // res.sendFile(path.resolve('src/client/views/index.html'))
})



// app.get('/test', function(req, res) {
//     res.send(mockAPIResponse)
// })

//using SDK to post data
app.post('/sentimentData', (req, res) => {

    textapi.sentiment({
            'url': req.body.text
        },
        function(error, response) {
            if (error === null) {
                console.log(response);
                res.send(response);
            }
        });






});