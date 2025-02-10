import requests

url = "https://us1.locationiq.com/v1/nearby"
API_KEY = "pk.e01c10885217ca8ee2ba000e54ac5478"

def GetNearbyStores(lat, lon, radius):
    data = {
        'key': API_KEY,
        'lat': str(lat),
        'lon': str(lon),
        'tag': 'supermarket',
        'radius': int(radius),
        'format': 'json'
    }
    response = requests.get(url, params=data)

    print(response.text)

GetNearbyStores('42.358990', '-71.058632', 1000) # Stores within 1 km of Boston