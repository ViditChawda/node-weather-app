const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4d9b89c03540a35701951668016b3c38&query=' + latitude + ',' + longitude + '&units=f';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("unable to get the required sirvices", undefined);
        } else if (response.body.error) {
            callback('Unable to find the location', undefined )
        } else {
            callback(undefined,'Clear throughout the day. It is current' + response.body.current.temperature +'degress out. There is a '+ + ' chance of rain') 
        }
    })

}

module.exports = forecast