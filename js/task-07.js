const refSize = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');
refText.style.fontSize = refSize.value + 'px';
refSize.addEventListener('input', () => {
  refText.style.fontSize = refSize.value + 'px';
});
