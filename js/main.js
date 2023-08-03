// Listni DOM dan olib keldik
var elList = document.querySelector(".js-pokemons__list");

pokemons.forEach(function(item) {
  
  // Elementlarni yasab olamiz
  var liElement = document.createElement("li");
  liElement.classList.add("pokemons__item");
  
  var headingWrapperElement = document.createElement("div");
  headingWrapperElement.classList.add("pokemons__subheading-wrapper")
  var headingElement = document.createElement("h3");
  headingElement.classList.add("pokemons__subheading");
  var headingOutputElement = document.createElement("output");
  headingOutputElement.classList.add("pokemons__subheading-text");

  var liInnerElement = document.createElement("div");
  liInnerElement.classList.add("pokemons__item-inner");
  var liImgElement = document.createElement("div");
  liImgElement.classList.add("pokemons__item-img");
  var liContentElement = document.createElement("div");
  liContentElement.classList.add("pokemons__item-content");
  var liDataElement = document.createElement("div");
  liDataElement.classList.add("pokemons__data-wrapper");
  var liWeightElement = document.createElement("output");
  liWeightElement.classList.add("pokemons__weight");
  var liStrongWeightElement = document.createElement("strong");
  liStrongWeightElement.classList.add("pokemons__bold");
  var liHeightElement = document.createElement("output");
  liHeightElement.classList.add("pokemons__height");
  var liStrongHeightElement = document.createElement("strong");
  liStrongHeightElement.classList.add("pokemons__bold");
  var growElement = document.createElement("div");
  growElement.classList.add("pokemens__grow");
  var liDataBottomElement = document.createElement("div");
  liDataBottomElement.classList.add("pokemons__data-wrapper");
  var liEggElement = document.createElement("output");
  liEggElement.classList.add("pokemons__eggs");
  var liEggStrongElement = document.createElement("strong");
  liEggStrongElement.classList.add("pokemons__bold");
  var liTypeElement = document.createElement("output");
  liTypeElement.classList.add("pokemons__type");
  var liTypeStrongElement = document.createElement("strong");
  liTypeStrongElement.classList.add("pokemons__bold");
  
  headingOutputElement.textContent = item.name;

  liImgElement.style.backgroundImage = `url("${item.img}")`;

  liWeightElement.textContent = `${item.weight} kg`;
  liStrongWeightElement.textContent = `Weght: `;

  liHeightElement.textContent = `${item.height} m`;
  liStrongHeightElement.textContent = `Height: `;

  liEggElement.textContent = item.egg;
  liEggStrongElement.textContent = `Eggs: `;

  liTypeElement.textContent = item.type;
  liTypeStrongElement.textContent = `Type: `;

  liElement.appendChild(headingWrapperElement);
  liElement.appendChild(liInnerElement);

  headingWrapperElement.appendChild(headingElement);
  headingElement.appendChild(headingOutputElement);

  liInnerElement.appendChild(liImgElement);
  liInnerElement.appendChild(liContentElement);

  liContentElement.appendChild(liDataElement);
  liContentElement.appendChild(growElement);
  liContentElement.appendChild(liDataBottomElement);

  liDataElement.appendChild(liWeightElement);
  liWeightElement.prepend(liStrongWeightElement);

  liDataElement.appendChild(liHeightElement);
  liHeightElement.prepend(liStrongHeightElement);

  liDataBottomElement.appendChild(liEggElement);
  liEggElement.prepend(liEggStrongElement);

  liDataBottomElement.appendChild(liTypeElement);
  liTypeElement.prepend(liTypeStrongElement);
  
  elList.appendChild(liElement)
});