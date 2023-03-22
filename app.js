const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const url = 'http://api.weatherstack.com/current?access_key=4d9b89c03540a35701951668016b3c38&query=37.8267,-122.4233&units=f'

// request function takes two arguments 1st teh object and 2nd the functoin with two arguments error and response
// json :true automatically parse the reponce for us 

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log("Unable to connect to weather service!")
//     }else if(response.body.error){
//         console.log(response.body.error)
//     }else{
//         console.log("It is currently "+response.body.current.temperature +" degrees out. It feels like "+response.body.current.precip+"% degrees out.")
//     } 
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const address = process.argv[2];

console.log(process.argv)

if (!address) {
    console.log("please provide an address")
} else {

    geocode(address, (error, {longitude, latitude, location} = {}) => {

        if (error) { 
            return console.log(error)
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {

            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    }) 
}


// this is called chaing the callbacks  
// test your work and ensure app still