window.onload = function() {
  const apiUrl = 'https://api.openbrewerydb.org/breweries?by_city=';
  const searchBtn = document.querySelector("button");
  const searchInput = document.querySelector("input");

function populateCard(brewery) {

  const breweryResults = document.getElementById ("brewery-results")

  const cardCol = document.createElement ("div")
  const card = document.createElement("div");

  const cardName = document.createElement("h4")
  const cardImg = document.createElement("img")
  const cardAddress = document.createElement("p")
  const cardPhone = document.createElement("p")
  const cardWebsite = document.createElement("a")

  // cardImg.src = "./assets/images/brew1.jpg"

  const nameText = document.createTextNode(brewery.name ?? "")
  const addressText = document.createTextNode(  brewery.street ? brewery.street + "," + brewery.state : brewery.state ?? "")
  const phoneText = document.createTextNode(brewery.phone ?? "")
  const websiteText = document.createTextNode(brewery.website_url ?? "")

cardCol.className = "col"
card.className = "brewcards card"
cardName.className = "card-title"
cardImg.className = "card-img-top"

card.append(cardName)
card.append(cardImg)
card.append(cardAddress)
card.append(cardPhone)
card.append(cardWebsite)

cardCol.append(card)
breweryResults.append(cardCol)

cardName.append(nameText)
cardPhone.append(addressText)
cardAddress.append(phoneText)
cardWebsite.append(websiteText)
}
searchBtn.addEventListener("click", function() {
  
    localStorage.setItem("city", searchInput.value);
    const city = localStorage.getItem("city");
    document.getElementById("brewery-results").innerHTML = "";
    
    fetch(apiUrl + city)
    
    .then(response => response.json())
    .then(data => {
      const breweries = data.slice(0, 3)
      breweries.forEach((brewery, i) => {
        populateCard(brewery)
      });
    })
      .catch(error => console.error(error));
    });

  };
  