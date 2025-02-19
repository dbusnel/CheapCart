
const url = "https://us1.locationiq.com/v1/nearby"
const API_KEY = "pk.e01c10885217ca8ee2ba000e54ac5478"

export async function GetStores (lat, lon, radius) {
    
    var params = {
        'lat': String(lat),
        'lon': String(lon),
        'tag': 'supermarket',
        'radius': parseInt(radius),
        'format': 'json'
    };
    
    const response = await fetch(BuildURL(params), {method: "GET"});
    
    console.log(BuildURL(params))
    console.log(await response.json());
    //console.log(response.json());
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

//GET('42.358990', '-71.058632', 1000) // Stores within 1 km of Boston