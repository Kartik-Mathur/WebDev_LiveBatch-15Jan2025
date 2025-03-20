let apiKey = '68eb9a82e650df54c98feebbf88e20d7';
let button = document.querySelector('button');
let input = document.querySelector('input');

geoURL = (city) => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
}

weatherURL = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
}

button.addEventListener('click', () => {
    let url = geoURL(input.value); // For getting latitute and longitute of a city this url is needed
    axios.get(url)
        .then(res => {
            let data = res.data[0];
            let lat = data.lat;
            let lon = data.lon;

            return { lat, lon }
        })
        .then(data => {
            let lat = data.lat;
            let lon = data.lon;
            let url = weatherURL(lat, lon);
            console.log(url)

            axios.get(url)
                .then(res => {
                    let data = res.data;
                    console.log(data);
                })

        })
        .catch(err => {
            console.log(err);
        })
})