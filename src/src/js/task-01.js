const allCaregories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allCaregories.length}`);

for (const category of allCaregories) {
    console.log(`Category:  ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
}
