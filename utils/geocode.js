const request = require('request')

const geocode = (address, callback) => {


    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmlkaGFuc2h1IiwiYSI6ImNsMmo2MHA5ajAwaTczanFwbTF5aWxmaGEifQ.5FjxWz_zpG1iLNaYlrjcfw&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the loaction services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find locations. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode

