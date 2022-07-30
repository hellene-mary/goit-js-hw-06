const allCaregories = document.querySelectorAll("li.item")
console.log(`Number of categories: ${allCaregories.length}`);

const firstElOfCategories = allCaregories[0];
const secondElOfCategories = allCaregories[1];
const thirdElOfCategories = allCaregories[2];


console.log(`Category: ${firstElOfCategories.firstElementChild.textContent}`);
console.log(`Elements: ${firstElOfCategories.querySelectorAll("li").length}`);
console.log(`Category: ${secondElOfCategories.firstElementChild.textContent}`);
console.log(`Elements: ${secondElOfCategories.querySelectorAll("li").length}`);
console.log(`Category: ${thirdElOfCategories.firstElementChild.textContent}`);
console.log(`Elements: ${thirdElOfCategories.querySelectorAll("li").length}`);

