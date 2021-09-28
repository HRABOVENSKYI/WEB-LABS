import { getAllZoos, searchZoos, postZoo, editZoo, getZooById, deleteZoo } from "./api.js";
import {
  renderItemsDOM,
  calculateTotal,
  clearInputs,
  getInputValues,
  EDIT_BUTTON_PREFIX,
  fillUpdateValues,
  DELETE_BUTTON_PREFIX,
} from "./modules.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");
const createSubmit = document.getElementById("submit_button");
const updateSubmit = document.getElementById("submit_update");
const formFields = document.getElementsByClassName("create-input");

let zoos = [];

const onEdit = async (element) => {
  const id = element.target.id.replace(EDIT_BUTTON_PREFIX, "");
  let { name, num_of_visitors, num_of_animals } = await getZooById(id);
  fillUpdateValues({
    name,
    numOfVisitors: num_of_visitors,
    numOfAnimals: num_of_animals,
  });

  updateSubmit.addEventListener("click", (event) => {
    if (includesEmptyFields()) {
      return;
    }
    event.preventDefault();
    const newZoo = getInputValues();
    clearInputs();
    editZoo(id, newZoo).then(refetchAllZoos);
  })
};

const onDelete = (element) => {
  const id = element.target.id.replace(DELETE_BUTTON_PREFIX, "");
  deleteZoo(id).then(refetchAllZoos);
}

const refetchAllZoos = async () => {
  const allZoos = await getAllZoos();
  zoos = allZoos;
  renderItemsDOM(zoos, onEdit, onDelete);
};

const includesEmptyFields = () => {
  let countOfEmptyFields = Array.from(formFields).filter(
    (x) => x.value == ""
  ).length;
  return countOfEmptyFields != 0;
};

createSubmit.addEventListener("click", (event) => {
  if (includesEmptyFields()) {
    return;
  }
  event.preventDefault();
  const newZoo = getInputValues();
  clearInputs();
  postZoo(newZoo).then(refetchAllZoos);
});

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const foundZoos = await searchZoos(searchInput.value);
  renderItemsDOM(foundZoos, onEdit, onDelete);
});

sortCheckbox.addEventListener("change", () => {
  let sortedZoos = Array.from(zoos);
  if (sortCheckbox.checked) {
    sortedZoos.sort(
      (first, second) => first.num_of_visitors - second.num_of_visitors
    );
  }
  renderItemsDOM(sortedZoos, onEdit, onDelete);
});

countBtn.addEventListener("click", () => {
  countResults.classList.remove("hidden");
  const totalPrice = calculateTotal(zoos, (zoo) => zoo.num_of_animals);
  countTotal.innerHTML = totalPrice;
});

refetchAllZoos();

export default zoos;
export { cardDeck };
