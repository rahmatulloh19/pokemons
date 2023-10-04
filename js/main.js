const elControlForm = document.querySelector(".js-intro__form")
const elSearch = elControlForm.querySelector(".js-intro__search");
const elList = document.querySelector(".js-pokemons__list");
const modalTitle = document.querySelector(".js-modal__title");
const modalBody = document.querySelector(".js-modal__body");
const modalFooter = document.querySelector(".js-modal__footer");
const secondModalTitle = document.querySelector(".js-second-modal__title");
const secondModalBody = document.querySelector(".js-second-modal__body");
const secondModalFooter = document.querySelector(".js-second-modal__footer");
const elItemTemplate = document.querySelector(".pokemons__item-template").content;
// const elModalTemplate = document.querySelector(".pokemons__modal").content;
const elItemFragment = document.createDocumentFragment();

// list of pokemons type
const elPokemonsTypeList = document.querySelector(".js-intro__types");
// input select pokemons
const elInputPokemonsType = document.querySelector(".js-intro__type");
// bring filter btn from DOM
const elFilterBtn = elControlForm.querySelector(".js-intro__filter-btn");
// bring template file
const elComponentsForm = document.querySelector(".intro__form-template").content;
// bring radioElements for sorting
const radiosElements = document.querySelectorAll(`input[type="radio"]`);

renderPokemons(pokemons, elList);

// Render of pokemons array
function renderPokemons (array, node) {
  node.innerHTML = "";
  
  if(node == elList) {
    array.filter(function(item) {
      const templateClone = elItemTemplate.cloneNode(true);
      
      templateClone.querySelector(".pokemons__item-img").src = item.img;
      templateClone.querySelector(".pokemons__item-img").width = 120;
      templateClone.querySelector(".pokemons__item-img").height = 120;
      templateClone.querySelector(".pokemons__item-img").alt = `The picture of ${item.name}`;
      
      templateClone.querySelector(".pokemons__subheading").textContent = item.name;
      templateClone.querySelector(".pokemons__bold--weight").textContent = `Weight: ${item.weight} kg`;
      templateClone.querySelector(".pokemons__bold--height").textContent = `Height: ${item.height} m`;
      templateClone.querySelector(".pokemons__bold--eggs").textContent = `Eggs: ${item.egg}`;
      templateClone.querySelector(".pokemons__bold--type").textContent = `Type: ${item.type.join(", ")}`;
      templateClone.querySelector(".pokemons__link").dataset.id = item.id;
      
      elItemFragment.appendChild(templateClone);
    });
    if(array.length == 0) {
      const liElement = document.createElement("li");
      liElement.classList.add("pokemons__item--not-found");
      liElement.textContent = "Sorry, no such pokemon found"
      elItemFragment.appendChild(liElement)
    }
  } else if(node == elPokemonsTypeList) {
    array.forEach(item => {
      const liElement = document.createElement("li");
      liElement.classList.add("intro__types-item");
      liElement.textContent = item;
      elItemFragment.appendChild(liElement);
    })
    if(array.length == 0) {
      const liElement = document.createElement("li");
      liElement.classList.add("intro__types-item");
      liElement.textContent = "Please, search for correct pokemons type";
      elItemFragment.appendChild(liElement);
    }
    node.appendChild(elItemFragment)
  }
  node.appendChild(elItemFragment)
}

renderPokemons(pokemons, elList)

function renderModal(obj, prevObj) {
  modalBody.innerHTML = ''
  modalTitle.textContent = obj.name;
  // Checking pokemons array which is have a candy count property
  const elInfoList = document.createElement("ul");
  elInfoList.classList.add("modal__list");
  if(obj.candy_count) {
    elInfoList.innerHTML = `<li class="modal__item"><strong class="modal__bold">Candy:</strong> ${obj.candy}</li>
    <li class="modal__item"><strong class="modal__bold">Avg Spawns:</strong> ${obj.avg_spawns}</li>
    <li class="modal__item"><strong class="modal__bold">Spawn time:</strong> ${obj.spawn_time}</li>
    <li class="modal__item"><strong class="modal__bold">Weaknesses:</strong> ${obj.weaknesses.join(", ")}</li>
    <li class="modal__item"><strong class="modal__bold">Candy count:</strong> ${obj.candy_count}</li>`
  } else  {
    elInfoList.innerHTML = `<li class="modal__item"><strong class="modal__bold">Candy:</strong> ${obj.candy}</li>
    <li class="modal__item"><strong class="modal__bold">Avg Spawns:</strong> ${obj.avg_spawns}</li>
    <li class="modal__item"><strong class="modal__bold">Spawn time:</strong> ${obj.spawn_time}</li>
    <li class="modal__item"><strong class="modal__bold">Weaknesses:</strong> ${obj.weaknesses.join(", ")}</li>`
  }
  modalBody.appendChild(elInfoList);
  modalFooter.innerHTML = "";
  // secondModalTitle.textContent = prevObj.name;
  // Checking pokemons array which is have a candy count property
  // if(obj.candy_count) {
  //   secondModalBody.innerHTML = `<li class="modal__item"><strong class="modal__bold">Candy:</strong> ${obj.candy}</li>
  //   <li class="modal__item"><strong class="modal__bold">Candy count:</strong> ${obj.candy_count}</li>
  //   <li class="modal__item"><strong class="modal__bold">Avg Spawns:</strong> ${obj.avg_spawns}</li>
  //   <li class="modal__item"><strong class="modal__bold">Spawn time:</strong> ${obj.spawn_time}</li>
  //   <li class="modal__item"><strong class="modal__bold">Weaknesses:</strong> ${obj.weaknesses.join(", ")}</li>`
  // } else  {
  //   secondModalBody.innerHTML = `<li class="modal__item"><strong class="modal__bold">Candy:</strong> ${obj.candy}</li>
  //   <li class="modal__item"><strong class="modal__bold">Avg Spawns:</strong> ${obj.avg_spawns}</li>
  //   <li class="modal__item"><strong class="modal__bold">Spawn time:</strong> ${obj.spawn_time}</li>
  //   <li class="modal__item"><strong class="modal__bold">Weaknesses:</strong> ${obj.weaknesses.join(", ")}</li>`
  // }
  // rendering modal prev and after evolutions
  // if(prevObj && obj.next_evolution) {
  //   modalFooter.classList.remove("d-none");
  //   modalBody.style.borderRadius = "0";
  //   modalFooter.innerHTML = `
  //   Evolutions
  //   <div class="modal__btn-wrapper w-100">
  //   <button type="button" class="modal__btn btn btn-secondary" data-id="${Number(prevObj.id)}" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">&larr; Prev evolution (${prevObj.name})</button>
  //   <button type="button" class="modal__btn btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2" data-id="${Number(obj.next_evolution[0].num)}">Next evolution (${obj.next_evolution[0].name}) &rarr;</button>
  //   </div>`
  // } else if(prevObj && !obj.next_evolution) {
  //   modalFooter.classList.remove("d-none");
  //   modalBody.style.borderRadius = "0";
  //   modalFooter.innerHTML = `
  //   Evolutions
  //   <div class="modal__btn-wrapper w-100">
  //   <button type="button" class="modal__btn btn fs-5 w-100 btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2" data-id="${Number(prevObj.id)}">&larr; Prev evolution (${prevObj.name})</button>
  //   </div>`
  // } else if(obj.next_evolution){
  //   modalFooter.classList.remove("d-none");
  //   modalBody.style.borderRadius = "0";
  //   modalFooter.innerHTML = `
  //   Evolutions
  //   <div class="modal__btn-wrapper w-100">
  //   <button type="button" class="modal__btn w-100 fs-5 btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2"  data-id="${Number(obj.next_evolution[0].num)}">Next evolution (${obj.next_evolution[0].name}) &rarr;</button>
  //   </div>`
  // } else { // if evolution is't have
  //   modalFooter.classList.add("d-none");
  //   modalBody.style.borderRadius = "8px";
  // }
  
  // if(prevObj && obj.next_evolution) {
  //   secondModalFooter.classList.remove("d-none");
  //   secondModalBody.style.borderRadius = "0";
  //   secondModalFooter.innerHTML = `
  //   Evolutions
  //   <div class="modal__btn-wrapper w-100">
  //   <button type="button" class="modal__btn btn btn-secondary" data-id="${prevObj.id}" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">&larr; Prev evolution (${prevObj.name})</button>
  //   <button type="button" class="modal__btn btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2" data-id="${Number(obj.next_evolution[0].num)}">Next evolution (${obj.next_evolution[0].name}) &rarr;</button>
  //   </div>`
  // } else if(prevObj && !obj.next_evolution) {
  //   secondModalFooter.classList.remove("d-none");
  //   secondModalBody.style.borderRadius = "0";
  //   secondModalFooter.innerHTML = `
  //   Evolutions
  //   <div class="modal__btn-wrapper w-100">
  //   <button type="button" class="modal__btn btn fs-5 w-100 btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">&larr; Prev evolution (${prevObj.name})</button>
  //   </div>`
  // } else if(obj.next_evolution){
  //   secondModalFooter.classList.remove("d-none");
  //   secondModalBody.style.borderRadius = "0";
  //   secondModalFooter.innerHTML = `
  //   Evolutions
  //   <div class="modal__btn-wrapper w-100">
  //   <button type="button" class="modal__btn w-100 fs-5 btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">Next evolution (${obj.next_evolution[0].name}) &rarr;</button>
  //   </div>`
  // } else { // if evolution is't have
  //   modalFooter.classList.add("d-none");
  //   modalBody.style.borderRadius = "8px";
  // }
}

// Search input codes here
elSearch.addEventListener("keyup", function() {
  let elSearchValue = elSearch.value.trim().toLowerCase();
  
  let finder = pokemons.filter(function(item) {
    let search_pokemon = item.name.toLowerCase();
    return search_pokemon.includes(elSearchValue);  
  })
  
  renderPokemons(finder, elList);
})

elList.addEventListener("click", (evt) => {
  const targetId = evt.target.dataset.id;
  const linkObj = pokemons.find(item => item.id == targetId);
  
  // const prevObj = pokemons.find(item => item.id == linkObj.id - 1);
  // const nextObj = pokemons.find(item => item.id == linkObj.id + 1);
  
  // if(prevObj?.next_evolution) {
  //   prevObj?.next_evolution?.forEach(item => {
  //     if(item.num == linkObj.id) {
  //       renderModal(linkObj, prevObj)
  //     }
  //   })
  // } else {
  //   renderModal(linkObj);
  // }
  if(linkObj) {
    renderModal(linkObj)
  }
  // console.log(prevObj.num);
})

modalFooter.addEventListener("click", evt =>{
  const targetId = evt.target.dataset.id;
  if(targetId) {
    const currentObj = pokemons.find(item => item.id == targetId);
    const prevObj = pokemons.find(item => item.id == targetId - 1);
    renderModal(currentObj);
    // console.log(currentObj);
    
  }
})

// seperating types of pokemons
const pokemonsTypes = [];

pokemons.forEach(item => {
  item.type.forEach(element => {
    if(!pokemonsTypes.includes(element)) pokemonsTypes.push(element)
  })
});

// listening the input for rendering
document.body.addEventListener("click", evt => {
  // styling input and list
  if(evt.target.matches(".js-intro__type")) {
    // console.log("bosildi");
    renderPokemons(pokemonsTypes, elPokemonsTypeList);
    elPokemonsTypeList.classList.add("display-block", "border--top");
    elInputPokemonsType.classList.add("border--bottom");
  } else {
    elPokemonsTypeList.classList.remove("display-block", "border--top");
    elInputPokemonsType.classList.remove("border--bottom");
  }
  
  // getting value and rendering they
  if(evt.target.matches(".intro__types-item")) {
    const pokemonTypeName = evt.target.textContent.trim();
    elInputPokemonsType.value = pokemonTypeName;
    const selectedType = pokemons.filter(item => item.type.includes(pokemonTypeName));
    renderPokemons(selectedType, elList);
  }
})

elInputPokemonsType.addEventListener("keyup", () => {
  
  const searchingPokemonType = pokemonsTypes.filter(item => {
    const lowerCaseItems = item.toLowerCase();
    
    return lowerCaseItems.includes(elInputPokemonsType.value.trim().toLowerCase())
  })
  
  sorterPokemons(undefined, searchingPokemonType, elPokemonsTypeList);
})


const weaknessesPokemons = [];

// collecting all weaknesses in one array
pokemons.forEach(item => {
  item.weaknesses.forEach(element => {
    if(!weaknessesPokemons.includes(element)) weaknessesPokemons.push(element);
  })
})

function sorterPokemons(value = "default", array = pokemons, node) {
  // the function is getting 3 arguments they are value, arr, and node
  if(value == "default") {
    const sortedPokemons = array.sort((a, b) => {
      const aCharCode = a.name?.charCodeAt(0) || a.charCodeAt(0);
      const bCharCode = b.name?.charCodeAt(0) || b.charCodeAt(0);
      
      return aCharCode - bCharCode;
    })
    renderPokemons(sortedPokemons, node)
  }
  if(value == "reverse") {
    const sortedPokemons = array.sort((a, b) => {
      const aCharCode = a.name?.charCodeAt(0) || a.charCodeAt(0);
      const bCharCode = b.name?.charCodeAt(0) || b.charCodeAt(0);
      
      return bCharCode - aCharCode;
    })
    renderPokemons(sortedPokemons, node)
  }
}


// listening filter btn 
elFilterBtn.addEventListener("click", () => {
  // modal title
  modalTitle.textContent = "Search settings";
  
  // modal body
  modalBody.innerHTML = "";
  const modalForm = document.createElement("form");
  modalForm.classList.add("js-modal__body--form")
  const cloneFormComponents = elComponentsForm.cloneNode(true);
  const pokemonTypesInput = cloneFormComponents.querySelector(".intro__types-label");
  pokemonTypesInput.classList.add("intro__types--filter");
  const pokemonSortInput = cloneFormComponents.querySelector(".intro__radios-label");
  pokemonSortInput.classList.add("intro__radios-label--filter");
  modalForm.append(pokemonTypesInput, pokemonSortInput);
  modalBody.appendChild(modalForm);
  
  // modal footer
  modalFooter.classList.add("modal__footer-filter");
  modalFooter.innerHTML = `<button class="intro__components intro__modal-btn" type="submit" form="control-form" data-bs-dismiss="modal">Search</button>`
})

elControlForm.addEventListener("submit", evt => {
  evt.preventDefault();
  const elFormControlModal = document.querySelector(".js-modal__body--form");
  const elRadiosModal = elFormControlModal?.querySelectorAll(`input[type="radio"]`);
  let elRadioValue = "asd";
  
  // getting style of wrapper radio element
  const elLabel = document.querySelector(".intro__radios-label")
  const styleLabel = window.getComputedStyle(elLabel);
  const propertyStyle = styleLabel.getPropertyValue("display");

  if(propertyStyle == "none") {
    for (const iterator of  elRadiosModal) {
      if(iterator.checked) elRadioValue = iterator.value;
    }
  } else {
    for (const iterator of  radiosElements) {
      if(iterator.checked) elRadioValue = iterator.value;
    }
  }
  
  if(elRadioValue == "from_A_to_Z") {
    sorterPokemons("default", undefined, elList)
  } else if(elRadioValue == "from_Z_to_A") {
    sorterPokemons("reverse", undefined, elList)
  }
  
})