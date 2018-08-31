const request = require('request');
var getWeather = (lat,lng,callback) => {
    request({
    url:`https://api.darksky.net/forecast/c203238587fe3ef4f34aee27788a2ab3/${lat}, ${lng}`,
    json: true
}, (error, response,body) => {
    if(error){
        console.log('unable ot connect to google servers');
    } else if(response.statusCode === 400){
        console.log('Unable to fetch weather');
    } else if(response.statusCode === 200){
        console.log(body.currently.temperature);
    } else {
        console.log('oops!! something is wrong');
    }
});
}


module.exports.getWeather = getWeather;