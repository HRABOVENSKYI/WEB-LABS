import { cardDeck } from "./main.js";

const nameInput = document.getElementById("name_input");
const numOfVisitorsInput = document.getElementById("num_of_visitors_input");
const numOfAnimalsInput = document.getElementById("num_of_animals_input");

const cardTemplate = ({ id, zooName, numOfVisitors, numOfAnimals }) => `
<div id="item-${id}" class="card">
<img class="card-img-top" src="../img/zoo.jpg" alt="Card image cap" />
<div class="card-body">
<h5 class="card-title">Zoo "${zooName}"</h5>
<p class="card-text">
Visitors: ${numOfVisitors}<br>
Animals: ${numOfAnimals}
</p>
</div>
<div class="card-footer">
<small class="text-muted">
<i class="fas fa-edit fa-lg btnedit"></i>
<i class="fas fa-trash-alt fa-lg btndelete"></i>
</small>
</div>
</div>
`;

const addItemToPage = ({ id, name, num_of_visitors, num_of_animals }) => {
  cardDeck.insertAdjacentHTML(
    "afterbegin",
    cardTemplate({
      id,
      zooName: name,
      numOfVisitors: num_of_visitors,
      numOfAnimals: num_of_animals,
    })
  );
};

const renderItemsDOM = (dataArray) => {
  cardDeck.innerHTML = "";
  for (const item of dataArray) {
    addItemToPage(item);
  }
};

const calculateTotal = (dataArray, key) => {
  const total = dataArray.reduce((acc, item) => acc + key(item), 0);
  return total;
};

const clearInputs = () => {
  nameInput.value = "";
  numOfVisitorsInput.value = "";
  numOfAnimalsInput.value = "";
};

const getInputValues = () => {
  return {
    name: nameInput.value,
    num_of_visitors: numOfVisitorsInput.value,
    num_of_animals: numOfAnimalsInput.value,
  };
};

export { addItemToPage, renderItemsDOM, calculateTotal, clearInputs, getInputValues };
