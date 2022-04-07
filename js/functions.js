import { plantComponent } from "./component"

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
            petsOption.options[petsOption.options.selectedIndex].value
        ]
        if (selectedOptions.filter(Boolean).length == selectedOptions.length) {
            fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${selectedOptions[0]}&water=${selectedOptions[1]}&pets=${selectedOptions[2]}`)
                .then(request =>request.json())
                .then(request => createComponent(request))
        }
    }   
}

const template = document.querySelector("#plants #selection")

function createComponent(plants){
    console.log("Plants: ", plants)
    plants.forEach(plant => template.innerHTML += plantComponent(plant))
    // plants.forEach(plant => template.innerHTML = plantComponent(plant))
}

