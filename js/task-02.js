const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');
const liElements = [];

for (let i = 0; i < ingredients.length; i++) {
  const createLi = document.createElement('li');
  createLi.textContent = ingredients[i];
  createLi.classList.add('item');
  liElements.push(createLi);
}

ulRef.append(...liElements);
