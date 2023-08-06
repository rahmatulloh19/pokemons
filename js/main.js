const elSearch = document.querySelector(".js-intro__search");
const elList = document.querySelector(".js-pokemons__list");

// Render of pokemons array
function renderPokemons (array) {
  elList.innerHTML = "";
  
  array.forEach(function(item) {
    // Making elements and giving thier classes
    const liElement = document.createElement("li");
    liElement.classList.add("pokemons__item");
    const headingWrapperElement = document.createElement("div");
    headingWrapperElement.classList.add("pokemons__subheading-wrapper");
    const headingElement = document.createElement("h3");
    headingElement.classList.add("pokemons__subheading");
    const innerElement = document.createElement("div");
    innerElement.classList.add("pokemons__item-inner");
    const imgElement = document.createElement("img");
    imgElement.classList.add("pokemons__item-img")
    const contentElement = document.createElement("div");
    contentElement.classList.add("pokemons__item-content");
    
    contentElement.innerHTML = `<div class="pokemons__data-wrapper">
    <output class="pokemons__weight">
    <strong class="pokemons__bold">Weight: </strong>${item.weight} kg
    </output>
    <output class="pokemons__height"><strong class="pokemons__bold">Height: </strong>${item.height} m
    </output>
    </div>
    <div class="pokemens__grow"></div>
    <div class="pokemons__data-wrapper">
    <output class="pokemons__eggs"><strong class="pokemons__bold">Eggs: </strong>${item.egg} km
    </output>
    <output class="pokemons__type"><strong class="pokemons__bold">Type: </strong>${item.type}
    </output>
    </div>`

    imgElement.setAttribute("src", item.img);
    imgElement.setAttribute("width", 120);
    imgElement.setAttribute("height", 120);
    imgElement.setAttribute("alt", `The picture of ${item.name}`);
  
    // Giving names
    headingElement.innerHTML = `<output class="pokemons__subheading-text">${item.name}</output>`
    
    // appened li's childiren
    liElement.append(headingWrapperElement, innerElement);
    headingWrapperElement.appendChild(headingElement);
    innerElement.append(imgElement ,contentElement);
    
    elList.appendChild(liElement);
  });
}

elSearch.addEventListener("keyup", function() {
  let elSearchValue = elSearch.value.trim().toLowerCase();

  let finder = pokemons.filter(function(item) {
    let search_pokemon = item.name.toLowerCase();
    return search_pokemon.includes(elSearchValue);
  })

  renderPokemons(finder);
})

renderPokemons(pokemons);