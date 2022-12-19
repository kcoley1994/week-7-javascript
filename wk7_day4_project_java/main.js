const form_data = document.querySelector('#form-data')
// console.log(form_data)
form_data.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(event)
    const city  = document.querySelector('#city-data').value
    console.log(city)
    const state = document.querySelector('#state-data').value
    console.log(state)
    
    
    const api_key = 'b75a08d2005495693a8c1ed7b7d479fa'
    
    const get_key = async () =>{
        const response =await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&appid=${api_key}`)
        const data = await response.json()
        const lat = data[0]['lat']
        const lon= data[0]['lon']
        const response2 =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
        const data2 = await response2.json()
        console.log(data2)
        const forecast = data2.weather[0].description
        console.log(forecast)
        const humidity =data2.main.humidity
        console.log(humidity)
        const high = Math.round((data2.main.temp_max -273.15) * 9/5 + 32)
        console.log(high)
        const low = Math.round((data2.main.temp_min -273.15) * 9/5 + 32)
        console.log(low)
        
        const city_state = document.createElement('h4')
        city_state.innerText = city+',' + ' ' + state
        const card = document.querySelector('.mb-1')
        card.removeChild(card.firstChild)
        
        card.append(city_state)

        const city_humidity = document.createElement('strong')
        city_humidity.innerText = humidity+'%'
        card_humidity = document.querySelector('.humidity')
        card_humidity.removeChild(card_humidity.firstChild)
        
        card_humidity.append(city_humidity)
        
        

        const city_high = document.createElement('strong')
        city_high.innerText = high+'°F'
        card_high = document.querySelector('.high')
        card_high.removeChild(card_high.firstChild)
        card_high.append(city_high)

        const city_low = document.createElement('strong')
        city_low.innerText = low+'°F'
        card_low = document.querySelector('.low')
        card_low.removeChild(card_low.firstChild)
        card_low.append(city_low)
        
        const city_forecast =document.createElement('strong')
        city_forecast.innerText = forecast
        card_forecast = document.querySelector('.forecast')
        card_forecast.removeChild(card_forecast.firstChild)
        card_forecast.append(city_forecast)


    }
    get_key()
    
    
})



