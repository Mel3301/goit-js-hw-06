const refInput = document.querySelector('#name-input');
const refOutput = document.querySelector('#name-output');

refInput.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    refOutput.textContent = 'Anonymous';
  } else refOutput.textContent = event.currentTarget.value;
});
