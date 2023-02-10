const apiKey = "c1a19879607eb06816098f47fc86a589" 

const citySelection = document.querySelector('#user-city')
const searchBtn = document.querySelector('#goBtn');




searchBtn.addEventListener ("click", function(event){
    const fiveDayEl = document.getElementById('fiveDay')
    document.location = `results.html?city=${citySelection.value}`
    console.log(citySelection.value)

    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citySelection.value+'&appid=c1a19879607eb06816098f47fc86a589&units=imperial')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);

     
        event.preventDefault()         


        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=imperial`)
        .then(res=>res.json())
        .then(data=>{        
        
        console.log(data)
      
        for (let i = 0; i < data.list.length; i+=8) {
            const day = data.list[i];

            let divEl = document.createElement('div')
            divEl.classList.add('col')
            

            let cardDivEl = document.createElement('div')
            cardDivEl.classList.add('card')
            cardDivEl.style.width='13rem'

            let heading4El = document.createElement('h4')
            heading4El.classList.add('card-title', 'p-2') 
            heading4El.textContent = dayjs.unix(day.dt).format('MM-DD-YY')
            cardDivEl.append(heading4El)

            let imagesEl = document.createElement('img')
            imagesEl.setAttribute('src', 'http://openweathermap.org/img/wn/' + day.weather[0].icon + '@4x.png' )
            imagesEl.classList.add('card-img-top')
            imagesEl.setAttribute('alt','Weather properties')
            cardDivEl.append(imagesEl)

            let divBodyEl = document.createElement('div')
            divBodyEl.classList.add('card-body')

            let tempEl = document.createElement('p')
            tempEl.classList.add('card-text')
            tempEl.textContent = `Temp: ${day.main.temp.toFixed(0)}°F`
            cardDivEl.append(tempEl)
            

            let windEl = document.createElement('p')
            windEl.classList.add('card-text')
            windEl.textContent=`Wind: ${day.wind.speed} mph`
            cardDivEl.append(windEl)

            let humidEl = document.createElement('p')
            humidEl.classList.add('card-text')
            humidEl.textContent=`Humidity: ${day.main.humidity}%`
            cardDivEl.append(humidEl)

            
            divEl.append(cardDivEl)
            fiveDayEl.append(divEl)
        
        }
        
    })
}) 
})


