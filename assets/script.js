const apiUrl = 'https://api.openbrewerydb.org/breweries?by_city=';
// const name = document.getElementById=()
const searchBtn = document.querySelector("button");
const searchInput = document.querySelector("input");

  searchBtn.addEventListener("click", function() {
    localStorage.setItem("city", searchInput.value);
    const city = localStorage.getItem("city");

    fetch(apiUrl + city)
      .then(response => response.json())
      .then(data => {
        console.log(data.slice(0, 3));
        const brewskiTime = data.slice(0, 3)
        for (let i = 0; i < data.list.length; i += 8) {
          const Name = data.list[i].brewery.name;
          const Address = data.list[i].brewery.street + data.list[i].brewery.state;
          const Phone = data.list[i].brewery.phone;
          const Website = data.list[i].brewery.website_url;
        }
        // Use the data to display the breweries in the selected city
      })
      .catch(error => console.error(error));
  });

// nextBtn.addEventListener ("click", function () {
// const cityName = textCity.value();
// console.log(cityName);
// console.log("hello");
// const response = fetch(apiUrl + cityName + '&per_page=3');
// const data = response.json();
// return data;
// });

//make a button appear igf the website extists

// function breweryInfo(cityname) {
//   fetch(`https://api.openbrewerydb.org/breweries?by_city=${searchInput.value}`)
//   .then(response => response.json())
//   .then(data => {
//     for (let i = 0; i < data.list.length; i += 8) {
//       const Name = data.list[i].brewery.temp;
//       const Address = data.list[i].brewery.icon;
//       const Phone = data.list[i].brewery.speed;
//       const Website = data.list[i].brewery.humidity;
//       todayC.textContent = cityname + " " + today.format('MMM DD, YYYY [at] hh:mm a')
//       todayT.textContent = "Temp: " + temperature + "°F"
//       todayW.textContent = "Wind: " + windSpeed + "MPH"
//       todayH.textContent = "Humidity: " + humidity  + "%"
//       console.log(`Day ${(i / 8) + 1}:`);
//       console.log(`${icon}`);
//       console.log(`Temperature: ${temperature}°F`);
//       console.log(`Wind Speed: ${windSpeed} mph`);
//       console.log(`Humidity: ${humidity}%`);
//       console.log('');
//     }
//   })
//   .catch(error => console.error(error));
  
// }


// event.preventDefault();
// displayBreweries(cityName);



// async function getBreweries(cityName) {
//   const response = await fetch(apiUrl + cityName + '&per_page=3');
//   const data = await response.json();
//   return data;
// }



// //add event listener for the button
// document.getElementById('user-city').value

// async function displayBreweries() {
//   const city = prompt("Enter the city:");
//   const breweries = await getBreweries(city);
//   for (const brewery of breweries) {
//     console.log(`Name: ${brewery.name}`);
//     console.log(`Address: ${brewery.street}, ${brewery.city}, ${brewery.state}`);
//     console.log(`Phone: ${brewery.phone}`);
//     console.log(`Website: ${brewery.website_url}`);
//     console.log("---");

//     // document.getElementById('Name').innerHTML = lengthOfName;
//     // document.getElementById('Address').innerHTML = lengthOfAdress;
//     // document.getElementById('Phone').innerHTML = lengthOfPhone;
//     // document.getElementById('Website').innerHTML = lengthOfWebsite;
//   }
// }

// displayBreweries();