const input = document.querySelector("#input-text");
const button = document.querySelector("#button");
const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#value");
const overcast = document.querySelector(".lead");

button.addEventListener("click", function(){
    
    fetch("http//api.openweathermap.org/data/2.5/weather?q={input.value}&appid={b9357ad960da3b3a26eb3a942faeff0e}")
    .then(res => res.json())
    .then(data => {

        console.log(data);
    //     var tempValue = data['main']['temp'];
    //     var nameValue = data['name'];
    //     var descValue = data['weather'][0]['description'];

    //     cityName .innerHTML = nameValue;
    //     overcast.innerHTML = "Desc - "+descValue;
    //     temperature.innerHTML = "Temp - "+tempValue;
    //     input.value ="";
    // })
})

})