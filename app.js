const request = require('request')

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

// Geocoding is the process of taking the address
// converting that to the Address -> Lat/Long -> Weather

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmlkaGFuc2h1IiwiYSI6ImNsMmo2MHA5ajAwaTczanFwbTF5aWxmaGEifQ.5FjxWz_zpG1iLNaYlrjcfw&limit=1'

// only one of the value out of error and response is going to get populated out of both the values 

// request({ url: geocodeUrl, json: true }, (error, response) => {
//     if(error){
//         console.log("unable to connect to the geocoding services")
//     }else if(response.body.features.length === 0){
//         console.log("Unable to find the loaction. Try another search")
//     }else{
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1];
//         console.log(latitude + "," + longitude)
//     }
// }) 

const geocode = (address, callback) => {


    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmlkaGFuc2h1IiwiYSI6ImNsMmo2MHA5ajAwaTczanFwbTF5aWxmaGEifQ.5FjxWz_zpG1iLNaYlrjcfw&limit=1'

    request({url : url , json : true}, (error, response) => {
        if(error){
            callback('Unable to connect to the loaction services!', undefined)
        }else if( response.body.features.length === 0){
            callback('Unable to find locations. Try another search.', undefined)
        }else{
            callback(undefined, {
                latitude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1],
                location: response.body.features[0].place_name
            } )
        }
    })
}

geocode('12WHat', (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})
