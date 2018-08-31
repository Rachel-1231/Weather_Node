const request = require('request');
var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/c203238587fe3ef4f34aee27788a2ab3/${lat},${lng}`,
        json:true
    }, (error, response, body)=> {
        if(error) {
            callback('Unable to connect to server');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather!')
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }

    });
};
module.exports.getWeather = getWeather;