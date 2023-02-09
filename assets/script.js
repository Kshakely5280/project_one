const apiUrl = 'https://api.openbrewerydb.org/breweries?by_city=';
const nextBtn = document.getElementById("btn")
const textCity = document.getElementById("#search-addon")


nextBtn.addEventListener ("click", function () {
const cityName = textCity.value();
console.log(cityName);
console.log("hello");
// event.preventDefault();
displayBreweries(cityName);

});


async function getBreweries(cityName) {
  const response = await fetch(apiUrl + cityName + '&per_page=3');
  const data = await response.json();
  return data;
}



//add event listener for the button
document.getElementById('user-city').value

async function displayBreweries() {
  const city = prompt("Enter the city:");
  const breweries = await getBreweries(city);
  for (const brewery of breweries) {
    console.log(`Name: ${brewery.name}`);
    console.log(`Address: ${brewery.street}, ${brewery.city}, ${brewery.state}`);
    console.log(`Phone: ${brewery.phone}`);
    console.log(`Website: ${brewery.website_url}`);
    console.log("---");

    // document.getElementById('Name').innerHTML = lengthOfName;
    // document.getElementById('Address').innerHTML = lengthOfAdress;
    // document.getElementById('Phone').innerHTML = lengthOfPhone;
    // document.getElementById('Website').innerHTML = lengthOfWebsite;
  }
}

displayBreweries();