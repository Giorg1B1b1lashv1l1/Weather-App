//Weather Application
//body
const body = document.getElementsByTagName("body")
//inputs
const input = document.getElementById("input")
const searchBtn = document.getElementById("searchbtn")
const resetBtn = document.getElementById('reset')
//div containers
const weatherCity = document.getElementById("weathertype")
const tempDiv = document.getElementById("temp")

//input




const getWeatherApi = ()=>{
////////////////////////////////////////////API
let inputValue = ""
input.addEventListener("input" , (e)=>{
    inputValue = e.target.value
    console.log(inputValue)
})
    searchBtn.addEventListener("click" , ()=>{
        input.value = ""
        const apiKey = "a350b6c12ecac5746180d1f3956da5b6"
        const api = (`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`)
        let xmlhttp = new XMLHttpRequest
        xmlhttp.open("GET" , api)
        xmlhttp.send()
        xmlhttp.onreadystatechange = ()=>{
            if(xmlhttp.readyState == 4){
                if(xmlhttp.status == 200){
                    let response = JSON.parse(xmlhttp.responseText)    
                    console.log(response.main.temp)
                    if(inputValue== response.name){
                        let h2 = document.createElement("h2")
                        let img = document.createElement("img")
                        let p = document.createElement("p")
                        let weatherType = response.weather[0].main
                        img.src = `gif/${weatherType}.png`
                        h2.innerHTML = response.name
                        p.innerHTML = weatherType
                        weatherCity.appendChild(h2)
                        weatherCity.appendChild(img)
                        weatherCity.appendChild(p)
                        body[0].style.background = `url(gif/${inputValue}.jpg)`
                        body[0].style.backgroundSize = "cover"
                        body[0].style.backgroundPosition = "center"
                        body[0].style.backgroundRepeat = "no-repeat"
                        let h1 = document.createElement("h1")
                        let temp = response.main.temp
                        h1.innerHTML = `${(temp - 273.15).toFixed(1)}°C`
                        tempDiv.appendChild(h1)
                        console.log(inputValue)
                        
                    }
                    
                    
                }
            }
        }
    })
}

getWeatherApi()

resetBtn.addEventListener("click" , ()=>{
    location.reload()
})






























