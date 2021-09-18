import { renderItemsDOM, calculateTotal } from "./modules.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");

let zoos = [
  {
    id: 1,
    zooName: "Magic Zoo",
    numOfVisitors: parseInt("33"),
    numOfAnimals: parseInt("12"),
  },
  {
    id: 2,
    zooName: "Amaizing Elephants",
    numOfVisitors: parseInt("21"),
    numOfAnimals: parseInt("4"),
  },
  {
    id: 3,
    zooName: "Happy Animals",
    numOfVisitors: parseInt("9"),
    numOfAnimals: parseInt("55"),
  },
  {
    id: 4,
    zooName: "Reptile World",
    numOfVisitors: parseInt("45"),
    numOfAnimals: parseInt("56"),
  },
  {
    id: 5,
    zooName: "Zoo of Extremes",
    numOfVisitors: parseInt("11"),
    numOfAnimals: parseInt("88"),
  },
];
let sortedZoos = [];

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  let foundZoos = zoos.filter(
    (zoo) => zoo.zooName.search(searchInput.value) !== -1
  );
  renderItemsDOM(foundZoos);
});

sortCheckbox.addEventListener("change", () => {
  let sortedZoos = Array.from(zoos);
  if (sortCheckbox.checked) {
    sortedZoos.sort(
      (first, second) => first.numOfVisitors - second.numOfVisitors
    );
  }
  renderItemsDOM(sortedZoos);
});

countBtn.addEventListener("click", () => {
  countResults.classList.remove("hidden");
  const totalPrice = calculateTotal(zoos, (zoo) => zoo.numOfAnimals);
  countTotal.innerHTML = totalPrice;
});

renderItemsDOM(zoos);

export default zoos;
export { cardDeck };
