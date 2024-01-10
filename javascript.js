let weather = {
    apiKey: "57b6f11a58d3a44619f12b68c62a87ae",
    fetchWeather: function(city)
    {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data)
    {
        const{name} =data;
        const{icon , description}=data.weather[0];
        const{temp , humidity}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector("#city").innerHTML=`Weather in ${name}`;
        document.querySelector("#temperature").innerHTML=`${temp}°C`;
        document.querySelector("#icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector("#description").innerHTML=`${description}`;
        document.querySelector("#humidity").innerHTML=`Humidity: ${humidity}%`;
        document.querySelector("#windSpeed").innerHTML=`Windspeed: ${speed}km/h`;
        document.querySelector(".weather").classList.remove("loading");
    },

    search: function()
   {
       this.fetchWeather(document.querySelector('.inputtag').value);
   }
};

document.querySelector(".btn").addEventListener('click', function(){
   weather.search();     
});

document.querySelector('.inputtag').addEventListener("keyup" , function(event){
    if(event.key == "Enter")
    {
        weather.search();
    }
});

weather.fetchWeather('Bhopal');