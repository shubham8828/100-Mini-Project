const apiKey = "759970069edd7ca186407cdc2e0bec7c";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        
        const searchBox = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button")
        const weatherIcon=document.querySelector(".weather-icon");

        async function checkWeather(city){

            const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
            
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                var data = await response.json();

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".country").innerHTML = data.sys.country;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
            document.querySelector(".feelsLike").innerHTML =
      data.main.feels_like + "°C";
    document.querySelector(".visibility").innerHTML = data.visibility + " m";

    const timezoneOffset = data.timezone;
    document.querySelector(".sunrise").innerHTML = formatTime(
      data.sys.sunrise,
      timezoneOffset
    );
    document.querySelector(".sunset").innerHTML = formatTime(
      data.sys.sunset,
      timezoneOffset
    );


            if(data.weather[0].main=="Clouds") {
                weatherIcon.src="images/clouds.png";
            }
            else if(data.weather[0].main=="Clear") {
                weatherIcon.src="images/clear.png";
            }
            else if(data.weather[0].main=="Rain") {
                weatherIcon.src="images/rain.png";
            }
            else if(data.weather[0].main=="Drizzle") {
                weatherIcon.src="images/drizzle.png";
            }
            else if(data.weather[0].main=="Mist") {
                weatherIcon.src="images/mist.png";
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
            }

         }
    
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        });

        function formatTime(timestamp, timezoneOffset) {
            // Create a new date object, adjusting for the timezone offset
            const date = new Date((timestamp + timezoneOffset) * 1000);
          
            // Extract hours and minutes
            const hours = date.getUTCHours();
            const minutes = "0" + date.getUTCMinutes();
          
            // Format the time
            const formattedTime = hours + ":" + minutes.substr(-2);
          
            return formattedTime;
          }

          