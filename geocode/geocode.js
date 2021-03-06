const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodeedAddress = encodeURIComponent(address)

    request({url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeedAddress}`,
json: true},

(error, response, body) => {
    if(error){
        callback('unable ot connect to google servers');
    } else if(body.status === 'ZERO_RESULTS'){
        callback('Unable to find that address');
    } else if(body.status === 'OK'){
        callback(undefined, {
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng
        });
    }
});
};
module.exports.geocodeAddress = geocodeAddress;