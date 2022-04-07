const nonSunImg = require('../images/icons/no-sun.svg')
const lowSunImg = require('../images/icons/low-sun.svg')
const highSunImg = require('../images/icons/high-sun.svg')
const oneDropImg = require('../images/icons/1-drop.svg')
const twoDropImg = require('../images/icons/2-drops.svg')
const threeDropImg = require('../images/icons/3-drops.svg')
const petDropImg = require('../images/icons/pet.svg')
const toxicDropImg = require('../images/icons/toxic.svg')

export const plantComponent = (plant) => `
    <div class="plant ${plant.staff_favorite ? 'staff-favorite' : ""}">
        ${plant.staff_favorite ? '<div class="staff-favorite-mark"> <span>✨ Staff Favorite</span></div>' : ""}
        <img src="${plant.url}" alt="PlantType">
        <div class="plant-info">
            <div class="plant-type">
                <h4>${plant.name}</h4>
            </div>
            <div class="plant-specs">
                <span class="price">$${plant.price}</span>
                <div class="plant-specs-icon">
                    <img src="${plant.toxicity ? toxicDropImg : petDropImg}" alt="${plant.toxicity ? 'Toxicity' : 'PetFriendly'}">
                    <img src="${sun(plant.sun)}" alt="SunLevel">
                    <img src="${water(plant.water)}" alt="WaterFrequency">
                </div>
            </div>
        </div>
    </div>
`
const sun = (sunLevel) =>{
    if (sunLevel == "high") return highSunImg 
    if (sunLevel == "low") return lowSunImg 
    return nonSunImg
}
const water = (WaterFrequency) =>{
    if (WaterFrequency == "daily") return threeDropImg 
    if (WaterFrequency == "regularly") return twoDropImg 
    return oneDropImg
}