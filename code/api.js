function make_request(url, callback) {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => callback(data))
}

function random_cat_api(callback) {
    make_request("https://api.thecatapi.com/v1/images/search", callback)
}

function random_dog_api(callback) {
    make_request("https://dog.ceo/api/breeds/image/random", callback)
}

// latitute and longitude
// latiture and longitude for Montpellier is 43.610769, 3.876716
function get_current_weather(lat, lon, callback) {
    make_request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=811047b194123d4a5ab580a437b933aa`, callback)
}

function get_random_photo(callback) {
    make_request("https://picsum.photos/200/300", callback)
}