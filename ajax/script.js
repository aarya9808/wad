function getData(){
const city = document.getElementById("cityInput").value;
const result = document.getElementById("resultDiv");

resultDiv.innerhtml= "Loading..."

fetch('data.json')
  .then(response=> {if(!response.ok){
           throw new Error("Network down");
        }
      return response.json();
})
.then(weatherData => {
     if(weatherData[city]){

const data = weatherData[city];
resultDiv.innerHTML= `
<p>City: ${city}</p>
<p>Temp: ${data.temperature} c</p>
<p> Humidity: ${data.humidity} </p>
<p> Condition: ${data.condition}</p>

`;}

else{
resultDiv.innerHTML = `<p>Error fetching weather data. </p>`;
}
})
.catch(error => {
resultDiv.innerHTML = `<p>Error fetching weather data </p>`;
console.error(error);
});
}

