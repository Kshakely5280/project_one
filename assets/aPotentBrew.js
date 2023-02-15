window.onload = function() {
  const apiUrl = 'https://api.openbrewerydb.org/breweries?by_city=';
  const searchBtn = document.querySelector("button");
  const searchInput = document.querySelector("input");

  function populateCard(brewery) {

    const imageFileNames = [
      "brew1.jpg",
      "brew2.jpg",
      "brew3.jpg",
      "brew4.jpg",
      "brew5.jpg"
    ];

    const breweryResults = document.getElementById ("brewery-results")
  
    const cardCol = document.createElement("div")
    const card = document.createElement("div");
  
    const cardName = document.createElement("h5")
    const cardImg = document.createElement("img")
    const cardAddress = document.createElement("p")
    const cardPhone = document.createElement("p")
    const cardWebsite = document.createElement("a")
  
    if (typeof populateCard.index === 'undefined') {
      populateCard.index = 0;
    } else {
      populateCard.index = (populateCard.index + 1) % imageFileNames.length;
    }
    const index = populateCard.index;
    cardImg.src = "./assets/images/" + imageFileNames[index];
  
    const nameText = document.createTextNode(brewery.name ?? "")
    const addressText = document.createTextNode(brewery.street ? brewery.street + "," + brewery.state : brewery.state ?? "")

    const rawPhone = brewery.phone ?? "";
    const formattedPhone = rawPhone.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3"
    );
    const phoneText = document.createTextNode(formattedPhone ?? "");

    const websiteText = document.createTextNode(brewery.website_url ?? "")

    cardWebsite.href = brewery.website_url ?? `${websiteText}`;
    cardWebsite.target = "_blank";
    if (cardWebsite.textContent === true) {
      cardWebsite.textContent;
    }
  
    console.log(brewery);
  
    cardCol.className = "col"
    card.className = "brewcards card"
    cardName.className = "card-title"

    cardImg.className = "img-top"

  
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