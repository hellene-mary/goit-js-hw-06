// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const allCaregories = document.querySelectorAll("li.item")
console.log(`Number of categories: ${allCaregories.length}`);// Number of categories: 3

const firstElOfCategories = allCaregories[0];
const secondElOfCategories = allCaregories[1];
const thirdElOfCategories = allCaregories[2];


console.log(`Category: ${firstElOfCategories.firstElementChild.textContent}`);// Category: Animals
console.log(`Elements: ${firstElOfCategories.querySelectorAll("li").length}`);// Elements: 4
console.log(`Category: ${secondElOfCategories.firstElementChild.textContent}`);// Category: Products
console.log(`Elements: ${secondElOfCategories.querySelectorAll("li").length}`);// Elements: 3
console.log(`Category: ${thirdElOfCategories.firstElementChild.textContent}`);// Category: Technologies
console.log(`Elements: ${thirdElOfCategories.querySelectorAll("li").length}`);// Elements: 5

