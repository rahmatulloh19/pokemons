const elSearch = document.querySelector(".js-intro__search");
const elList = document.querySelector(".js-pokemons__list");
const modalTitle = document.querySelector(".js-modal__title");
const modalBody = document.querySelector(".js-modal__body");

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
    <div class="pokemons__data-wrapper">
    <output class="pokemons__eggs"><strong class="pokemons__bold">Eggs: </strong>${item.egg}
    </output>
    <output class="pokemons__type"><strong class="pokemons__bold">Type: </strong>${item.type.join(", ")}
    </output>
    </div>
    <a class="pokemons__link" href="#" data-id="${item.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">View more</a>`
    
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

renderPokemons(pokemons)

function renderModal(obj) {  
  modalTitle.textContent = obj.name;
  // Checking pokemons array which is have a candy count property
  if(obj.candy_count) {
    modalBody.innerHTML = `<output class="modal__out"><strong class="modal__bold">Candy:</strong> ${obj.candy}</output>
    <output class="modal__out"><strong class="modal__bold">Candy count:</strong> ${obj.candy_count}</output>
    <output class="modal__out"><strong class="modal__bold">Avg Spawns:</strong> ${obj.avg_spawns}</output>
    <output class="modal__out"><strong class="modal__bold">Spawn time:</strong> ${obj.spawn_time}</output>
    <output class="modal__out"><strong class="modal__bold">Weaknesses:</strong> ${obj.weaknesses.join(", ")}</output>`
  } else  {
    modalBody.innerHTML = `<output class="modal__out"><strong class="modal__bold">Candy:</strong> ${obj.candy}</output>
    <output class="modal__out"><strong class="modal__bold">Avg Spawns:</strong> ${obj.avg_spawns}</output>
    <output class="modal__out"><strong class="modal__bold">Spawn time:</strong> ${obj.spawn_time}</output>
    <output class="modal__out"><strong class="modal__bold">Weaknesses:</strong> ${obj.weaknesses.join(", ")}</output>`
  }
}

// Search input codes here
elSearch.addEventListener("keyup", function() {
  let elSearchValue = elSearch.value.trim().toLowerCase();
  
  let finder = pokemons.filter(function(item) {
    let search_pokemon = item.name.toLowerCase();
    return search_pokemon.includes(elSearchValue);
  })
  
  renderPokemons(finder);
})

elList.addEventListener("click", (evt) => {
  const targetId = evt.target.dataset.id;
  const linkObj = pokemons.find(item => item.id == targetId);
  
  if(linkObj) {
    renderModal(linkObj);
  }

  // finding prev pokemons
  // const prevPokemonId = Number(targetId) - 1;
  // const prevObj = pokemons.find(() => prevPokemonId);
  // const modalBtnWrapper = document.querySelector(".modal__btn-wrapper");

  // modalBtnWrapper.addEventListener("click", evt => {
  //   const modalTarget = evt.target;
  //   if(modalTarget.matches(".js-modal__btn--prev")) {
  //     renderModal(prevObj)
  //   }
  // })
})

renderPokemons(pokemons);