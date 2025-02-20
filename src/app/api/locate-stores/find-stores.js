
const url = "https://us1.locationiq.com/v1/nearby"
const API_KEY = "pk.e01c10885217ca8ee2ba000e54ac5478"

export async function GetStores () {
    
    console.log("Getting location...");
    
    var coords;
    
    try 
    {
        coords = await GetLocation();
    } 
    catch (error) 
    {
        console.log(error);
    }

    console.log(coords);

    var params = {
        'lat': String(coords.lat),
        'lon': String(coords.lon),
        'tag': 'supermarket',
        'radius': parseInt(5000), //TODO: allow user to change radius
        'format': 'json'
    };
    
    console.log("Waiting for response...");

    const response = await fetch(BuildURL(params), {method: "GET"});
    
    console.log("Response retrieved!")

    return await response.json();
}

function BuildURL (params) 
{
    let output = url;
    output += "?key=" + API_KEY;
    output += "&lat=" + params.lat;
    output += "&lon=" + params.lon;
    output += "&lat=" + params.lat;
    output += "&tag=" + params.tag;
    output += "&radius=" + params.radius;
    output += "&format=" + params.format;

    return output;
}

//We want to get the user's accurate location
function GetLocation() 
{
    var coordinates = {lat : 0, lon : 0};

    return new Promise( (resolve, reject) =>
        navigator.geolocation.getCurrentPosition(
            (position) => resolve({lat : position.coords.latitude, lon : position.coords.longitude}),
            (error) => reject("Geolocation unsuccessful."),
            {enableHighAccuracy : true, timeout : 10000, maximumAge : 0}));

}

//GET('42.358990', '-71.058632', 1000) // Stores within 1 km of Boston