//my 2 api key acount username is : nihaltowfiq and towfiqnihal.
//icon changing issue is uncomplete;

document.querySelector(".btn-danger").addEventListener('click', function(){
    const enterCity = document.getElementById('enter-city').value;
    inputCity(enterCity);
});
function inputCity(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f997433ea9afaaf321a42960718d3c44`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const cityName = data.name;
            document.getElementById('city-name').innerText = cityName;
            const temp = data.main.temp;
            const tempConvert = temp - 273.15;
            document.getElementById('temperature').innerText = tempConvert;
            console.log(tempConvert)
            const weatherCondition = data.weather[0].main;
            console.log(weatherCondition)
            document.getElementById('weather-condition').innerText = weatherCondition;
            
            // problem
            //document.getElementById('icon').src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png";
        });
};