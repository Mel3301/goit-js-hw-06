const categoriesItems = document.querySelectorAll('li.item');
console.log('Number of categories: ', categoriesItems.length);

categoriesItems.forEach(category => {
  console.log(
    `Category: ${category.children[0].textContent}
        Elements: ${category.children[1].children.length}`
  );
});
