

export const plantStaffFavoriteComponent = (plant) => `
        <div class="plants-content">
        <img src="images/illustrations/pick.png" alt="HandWithPlant">
        <h3>Our picks for you</h3>
        <div class="plants-wrapper">
            <div class="plant staff-favorite">
                <div class="staff-favorite-mark">
                    <span>✨ Staff Favorite</span>
                </div>
                <div class="plant-image">
                    <img src="${plant.imgUrl}" alt="PlantType">
                </div>
                <div class="plant-info">
                    <div class="plant-type">
                        <h4>${plant.name}</h4>
                    </div>
                    <div class="plant-specs">
                        <span class="price">$${plant.price}</span>
                        <div class="plant-specs-icon">
                            <img src="/images/icons/${plant.toxicity}" alt="PetFriendly">
                            <!-- <img src="/images/icons/toxic.svg" alt="Toxic"> -->
                            <img src="/images/icons/${plant.sun}-sun.svg" alt="SunLevel">
                            <!-- <img src="/images/icons/high-sun.svg" alt="SunLevel"> -->
                            <img src="/images/icons/${plant.water}-drop.svg" alt="WaterFrequency">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
`

export const plantComponent = (plant) => `
        <div class="plants-content">
        <img src="images/illustrations/pick.png" alt="HandWithPlant">
        <h3>Our picks for you</h3>
        <div class="plants-wrapper">
            <div class="plant staff-favorite">
                <div class="staff-favorite-mark">
                    <span>✨ Staff Favorite</span>
                </div>
                <div class="plant-image">
                    <img src=${plant.imgUrl}" alt="PlantType">
                </div>
                <div class="plant-info">
                    <div class="plant-type">
                        <h4>${plant.name}</h4>
                    </div>
                    <div class="plant-specs">
                        <span class="price">${plant.price}</span>
                        <div class="plant-specs-icon">
                            <img src="/images/icons/${plant.toxicity}" alt="PetFriendly">
                            <!-- <img src="/images/icons/toxic.svg" alt="Toxic"> -->
                            <img src="/images/icons/${plant.sun}-sun.svg" alt="SunLevel">
                            <!-- <img src="/images/icons/high-sun.svg" alt="SunLevel"> -->
                            <img src="/images/icons/${plant.water}-drop.svg" alt="WaterFrequency">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
`

export const test = `<h1> Renderizou!</h1>`
