import { plantStaffFavoriteComponent, plantComponent, test } from "./component"

const sun_values = [
    "no",
    "low",
    "high"
]
const water_values = [
    "regularly",
    "daily",
    "rarely"
]
const pets_values = [
    true,
    false
]


window.onload = () => {

    const sunOption = document.getElementById('select-sunlight')
    const waterOption = document.getElementById('select-wateringcan')
    const petsOption = document.getElementById('select-pets')

    sunOption.innerHTML += sun_values.map((option, index) => `<option value="${option}">${sun_values[index]}</option>`)
    waterOption.innerHTML += water_values.map((option, index) => `<option value="${option}">${water_values[index]}</option>`)
    petsOption.innerHTML += pets_values.map((option, index) => `<option value="${option}">${pets_values[index] ? "yes" : "no"}</option>`)

    
    const selects = document.querySelectorAll(".select-action")
    selects.forEach(element => element.addEventListener("change", changeSelect))
    
    function changeSelect() {
        const selectedOptions = [
            sunOption.options[sunOption.options.selectedIndex].value,
            waterOption.options[waterOption.options.selectedIndex].value,
            Boolean(petsOption.options[petsOption.options.selectedIndex].value)
        ]
        console.log("selectedOptions: ", selectedOptions.filter(Boolean))
        if (selectedOptions.filter(Boolean).length == selectedOptions.length) {
            const req =  fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${selectedOptions[0]}&water=${selectedOptions[1]}&pets=${selectedOptions[2]}`)
                .then(request =>request.json())
                .then(request => createComponent(request))

        }
    }   
}

const template = document.getElementById("plants")

const plant = {
    imgUrl: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png",
    name: "Euphorbia eritrea",
    price: 25,
    sun: "high",
    water: "rarely",
    toxicity: false,
}

template.innerHTML = plantStaffFavoriteComponent(plant)

function createComponent(plants){
    console.log("ready to create: ", plants)
}

const sun = {
    "high": "high-sun", 
    "low": "low-sun", 
    "no": "no-sun" 
}
const water = {
    "regularly": "2-drops",
    "rarely": "1-drop"
}
const toxicity = {
    "pet": false,
    "toxic": true
}
