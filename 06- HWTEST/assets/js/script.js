function displayResults(data){
    console.log(data)
    // TODO print out weather data
    document.querySelector("#city-name").textContent
}

function handleSearchClick() {  
    var city = document.querySelector("input").value; 
    var APIKey ="77528d0fc6d278acad268e1d507644da";
    var queryURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    fetch(queryURL)
        .then(response => response.text('h3')) 
        .then(data => displayResults(data))

  
}


document.querySelector("#add-city").addEventListener("click", handleSearchClick)

