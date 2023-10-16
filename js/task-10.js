function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
  input: document.querySelector('input'),
};

function createBoxes(amount) {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = `${size}`;
    createDiv.style.height = `${size}`;
    createDiv.style.backgroundColor = getRandomHexColor();
    boxes.push(createDiv);
    size += 10;
  }
  refs.divBoxes.append(...boxes);
}

refs.btnCreate.addEventListener('click', () => {
  const amount = refs.input.value;
  createBoxes(amount);
});

refs.btnDestroy.addEventListener('click', () => {
  refs.divBoxes.innerHTML = '';
});
