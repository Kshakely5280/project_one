window.onload = function() {
  const apiUrl = 'https://api.openbrewerydb.org/breweries?by_city=';
  const searchBtn = document.querySelector("button");
  const searchInput = document.querySelector("input");



function populateCard(brewery) {
  const breweryResults = document.getElementById ("brewery-results")
  
  const cardCol = document.createElement ("div")
  const card = document.createElement("div");

  const cardName = document.createElement("h5")
  const cardImg = document.createElement("img")
  const cardAddress = document.createElement("p")
  const cardPhone = document.createElement("p")
  const cardWebsite = document.createElement("a")
  
  cardImg.src = "./assets/images/monica-di-loxley-pJLmctCUmW0-unsplash.jpg"


  const nameText = document.createTextNode(brewery.name)
  const addressText = document.createTextNode(brewery.street + "," + brewery.state)
  // make the address copy instantly from clicking on it
  const phoneText = document.createTextNode(brewery.phone)
  //make the phone # show up with dashes
  const websiteText = document.createTextNode(brewery.website_url)

  console.log(brewery);

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
// cardImg.append(img)
cardPhone.append(addressText)
cardAddress.append(phoneText)
cardWebsite.append(websiteText)
}

  searchBtn.addEventListener("click", function() {
    localStorage.setItem("city", searchInput.value);
    const city = localStorage.getItem("city");
    console.log("fetch");
    
    // let text = document.getElementById("text").innerText;
  
    fetch(apiUrl + city)
      .then(response => response.json())
      .then(data => {
        const breweries = data.slice(0, 3)
        breweries.forEach((brewery, i) => {
          console.log(brewery);
          populateCard(brewery)
          //clear previous
        });
      })
      .catch(error => console.error(error));
    });
    //return;
  };
  