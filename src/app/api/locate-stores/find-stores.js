
const url = "https://us1.locationiq.com/v1/nearby"
const API_KEY = "pk.e01c10885217ca8ee2ba000e54ac5478"

export async function GET(lat, lon, radius) {
    var params = {
        'key': API_KEY,
        'lat': str(lat),
        'lon': str(lon),
        'tag': 'supermarket',
        'radius': int(radius),
        'format': 'json'
    };
    
    const response = await fetch(url, {
        method: "GET",
        headers: params
        });

    console.log(response.json());
}

//GetNearbyStores('42.358990', '-71.058632', 1000) // Stores within 1 km of Boston