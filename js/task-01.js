const categoriesItems = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesItems.length);

categoriesItems.forEach(category => {
  const elementsCount = category.children[1].children.length;
  console.log(
    `Category: ${category.children[0].textContent}
    Elements: ${Number(elementsCount)}`
  );
});
