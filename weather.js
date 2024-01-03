const apikey = "33f1e4e740a15a756c741d8575f4bc0c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const but=document.querySelector('button');
but.addEventListener('click',()=>{
    const val=document.querySelector('input').value;
    async function checkWeather(){
        const response = await fetch(apiURL+`&q=${val}&`+`&appid=${apikey}`);
        var data = await response.json();
        if(response.status=='404'){
            document.querySelector('.err').style.display='block';
            document.querySelector('.weather').style.display='none';
        }else{
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=data.main.temp+"°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
        document.querySelector('.wind').innerHTML=data.wind.speed + "km/hr";
        document.querySelector('.weather').style.display='block';
        document.querySelector('.err').style.display='none';
        if(data.weather[0].main=='Clouds'){
            document.querySelector('.weather-icon').src="images/clouds.png";
        }else if(data.weather[0].main=='Rain'){
            document.querySelector('.weather-icon').src="images/rain.png";
        }else if(data.weather[0].main=='Clear'){
            document.querySelector('.weather-icon').src="images/clear.png";
        }else if(data.weather[0].main=='Drizzle'){
            document.querySelector('.weather-icon').src="images/drizzle.png";
        }else if(data.weather[0].main=='Mist'){
            document.querySelector('.weather-icon').src="images/mist.png";
        }
    
    }
  }  checkWeather();
})



