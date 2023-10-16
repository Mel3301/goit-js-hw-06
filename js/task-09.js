function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  widget: document.querySelector('body'),
  btn: document.querySelector('button.change-color'),
  color: document.querySelector('span.color'),
};

refs.btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  refs.widget.style.backgroundColor = color;
  refs.color.textContent = color;
});
