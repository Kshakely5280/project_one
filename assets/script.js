const apiUrl = 'https://api.openbrewerydb.org/breweries?by_city=';

async function getBreweries(city) {
  const response = await fetch(apiUrl + city + '&per_page=3');
  const data = await response.json();
  return data;
}

document.getElementById('output').innerHTML = lengthOfName;

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