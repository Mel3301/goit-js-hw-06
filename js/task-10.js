function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberBoxes = document.querySelector('input');
const buttonCreateBoxes = document.querySelector('[data-create]');
const buttonDestroyBoxes = document.querySelector('[data-destroy]');
const outputMurkupBoxes = document.querySelector('#boxes');

function createBoxes(number) {
  const elements = [];
  if (number) {
    outputMurkupBoxes.innerHTML = '';

    for (let i = 0; i < number; i++) {
      const murkupBoxes = document.createElement('div');
      murkupBoxes.style.background = getRandomHexColor();
      murkupBoxes.style.width = `${30 + 10 * i}px`;
      murkupBoxes.style.height = `${30 + 10 * i}px`;
      elements.push(murkupBoxes);
    }
    return elements;
  }
}

buttonCreateBoxes.addEventListener('click', () => {
  outputMurkupBoxes.append(...createBoxes(inputNumberBoxes.value));
});

buttonDestroyBoxes.addEventListener('click', () => {
  outputMurkupBoxes.innerHTML = '';
});
