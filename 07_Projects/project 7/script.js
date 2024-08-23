const apiKey = '3508001efdd330f925be2cf30cec5737';
const city = 'Vadodara';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


document.addEventListener('DOMContentLoaded', () => {
    fetchTemperature();
    document.getElementById('refresh').addEventListener('click', fetchTemperature);
});

function fetchTemperature() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            document.getElementById('temperature').innerText = `${temperature} °C`;
        })
        .catch(error => {
            console.error('Error fetching the temperature:', error);
            document.getElementById('temperature').innerText = 'Error fetching temperature';
        });
}
