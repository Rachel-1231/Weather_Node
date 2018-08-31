const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather.js/weather');
const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string:true
        }
    })
    
    .help()
    .alias('help','h')
    .argv;

    geocode.geocodeAddress(argv.address, (errorMessage,results) =>{
        if (errorMessage){
            console.log(errorMessage);
        }else{
            console.log(results.address);
            weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) =>{
                if(errorMessage){
                    console.log(errorMessage);
                }else{
                    console.log(`its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
                }
            });
        }
    });
    weather.getWeather();
/*geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else {
        console.log(JSON.stringify(results,undefined,2))
    }
});

/*const request = require('request');
request({
    url:`https://api.darksky.net/forecast/c203238587fe3ef4f34aee27788a2ab3/12.9662156,-77.60679979999999`,
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

*/