
const form_data = document.querySelector('#form-data')
// console.log(form_data)
form_data.addEventListener('submit', (event) =>{
    event.preventDefault()
    // console.log(form_data)
    // console.log(event)
    // option 1
    // const name =event['path'][0][0]['value']
    // option 2
    const name  = document.querySelector('#poke-data').value
    //option 1
//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     .then((response) => {
//         return response.json() 
//     })
//     .then((data) => {
//         console.log(data)
//     })
    // new option 
    const pokemon_data = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        // console.log(data)
        const pokemon_name= await data['name']
        const pokemon_image = await data['sprites']['front_shiny']
        
        const poke_name =document.createElement('h1')
        poke_name.innerText = pokemon_name
        const card = document.querySelector('.card')
        card.append(poke_name)

        const poke_img = document.createElement('img')
        poke_img.setAttribute('src',pokemon_image)
        card.append(poke_img)

    }
pokemon_data()

})
