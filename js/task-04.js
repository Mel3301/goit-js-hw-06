let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterSpan = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  counterValue = counterValue - 1;
  counterSpan.textContent = counterValue;
});
incrementBtn.addEventListener('click', () => {
  counterValue = counterValue + 1;
  counterSpan.textContent = counterValue;
});
