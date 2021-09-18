import { cardDeck } from "./main.js";

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

const addItemToPage = ({ id, zooName, numOfVisitors, numOfAnimals }) => {
  cardDeck.insertAdjacentHTML(
    "afterbegin",
    cardTemplate({ id, zooName, numOfVisitors, numOfAnimals })
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
}

export { addItemToPage, renderItemsDOM, calculateTotal };
