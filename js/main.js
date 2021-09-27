import { getAllZoos, searchZoos, postZoo } from "./api.js";
import {
  renderItemsDOM,
  calculateTotal,
  clearInputs,
  getInputValues,
} from "./modules.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");
const createSubmit = document.getElementById("submit_button");
const formFields = document.getElementsByClassName("form-control");

let zoos = [];

const refetchAllZoos = async () => {
  console.log("here");
  const allZoos = await getAllZoos();
  zoos = allZoos;
  renderItemsDOM(zoos);
};

const includesEmptyFields = () => {
  return Array.from(formFields)
    .map((x) => x.value)
    .includes("");
};

createSubmit.addEventListener("click", (event) => {
  if (includesEmptyFields) {
    console.log("bbb");
    return;
  }
  event.preventDefault();
  const newZoo = getInputValues();
  clearInputs();
  console.log("1");
  postZoo(newZoo).then(refetchAllZoos);
  console.log("aaa");
});

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const foundZoos = await searchZoos(searchInput.value);
  renderItemsDOM(foundZoos);
});

sortCheckbox.addEventListener("change", () => {
  let sortedZoos = Array.from(zoos);
  if (sortCheckbox.checked) {
    sortedZoos.sort(
      (first, second) => first.num_of_visitors - second.num_of_visitors
    );
  }
  renderItemsDOM(sortedZoos);
});

countBtn.addEventListener("click", () => {
  countResults.classList.remove("hidden");
  const totalPrice = calculateTotal(zoos, (zoo) => zoo.num_of_animals);
  countTotal.innerHTML = totalPrice;
});

refetchAllZoos();

export default zoos;
export { cardDeck };
