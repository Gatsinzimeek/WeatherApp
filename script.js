const searchBtn = document.querySelector('.search-btn');
const inputData = document.querySelector('#Input');
const date = document.querySelector('#Display-date');
const cloudImg = document.querySelector('#pic');
const degree = document.querySelector('#degree');
const cityName = document.querySelector('.city');
const humidity = document.querySelector('.hum');
const wind = document.querySelector('.wind');

const ApiKey = "3141955b270bce71ae514dd9316e2df1";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let info = "";
async function GetWeatherData (inputdat){
	    info = inputdat;	
		const res = await fetch(ApiUrl + `&appid=${ApiKey}`+ `&q=${info}`);
		var data = await res.json();
		cityName.innerHTML = data.name;
		degree.innerHTML = Math.round(data.main.temp);	
		humidity.innerHTML = data.main.humidity;
		wind.innerHTML = Math.round(data.wind.speed);	
		if (data.weather[0] === 'Clouds') {
			cloudImg.src = 'images/clouds.png';
		}else if (data.weather[0] === 'Clear') {
			cloudImg.src = 'images/clear.png';
		}else if (data.weather[0] === 'Rain') {
			cloudImg.src = 'images/rain.png';
		}else if (data.weather[0] === 'Drizzle') {
			cloudImg.src = 'images/drizzle.png';
		}else if (data.weather[0] === 'Mist') {
			cloudImg.src = 'images/mist.png';
		}else{
			cloudImg.src = 'images/snow.png';
		}
}

searchBtn.addEventListener('click', (e) =>{
	GetWeatherData(inputData.value);
	inputData.value = '';
});

let currentDate = new Date();
date.innerHTML = currentDate;

