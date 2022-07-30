//Напиши скрипт, який для кожного елемента масиву ingredients:
//1 Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//2 Додасть назву інгредієнта як його текстовий вміст.
//3 Додасть елементу клас item.
//4 Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");

  return element;
});

ingredientsEl.append(...elements)


//варіант з фором
// const ingredientsEl = document.querySelector("#ingredients");

// let arreyEl = []
// for (const ingredient of ingredients) {
//   const element = document.createElement("li");
//   element.textContent = ingredient;
//   element.classList.add("item");
//   arreyEl.push(element)
// }

// ingredientsEl.append(...arreyEl)



//варіант поганий
//const ingredientsEl = document.querySelector("#ingredients");
// const firstElementInIngredientsList = document.createElement("li");
// firstElementInIngredientsList.textContent = ingredients[0];
// firstElementInIngredientsList.classList.add("item");

// const secondElementInIngredientsList = document.createElement("li");
// secondElementInIngredientsList.textContent = ingredients[1];
// secondElementInIngredientsList.classList.add("item");

// const thirdElementInIngredientsList = document.createElement("li");
// thirdElementInIngredientsList.textContent = ingredients[2];
// thirdElementInIngredientsList.classList.add("item");

// const fourthElementInIngredientsList = document.createElement("li");
// fourthElementInIngredientsList.textContent = ingredients[3];
// fourthElementInIngredientsList.classList.add("item");

// const fifthElementInIngredientsList = document.createElement("li");
// fifthElementInIngredientsList.textContent = ingredients[4];
// fifthElementInIngredientsList.classList.add("item");

// const sixthElementInIngredientsList = document.createElement("li");
// sixthElementInIngredientsList.textContent = ingredients[5];
// sixthElementInIngredientsList.classList.add("item");

// ingredientsEl.append(
//   firstElementInIngredientsList,
//   secondElementInIngredientsList,
//   thirdElementInIngredientsList,
//   fourthElementInIngredientsList,
//   fifthElementInIngredientsList,
//   sixthElementInIngredientsList
// );





