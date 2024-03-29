
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. 
//   Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulRef = document.querySelector('#ingredients')

ingredients.forEach(elem => {
  const itemRef = document.createElement('li')

  itemRef.textContent = elem
  itemRef.classList.add('item')
  ulRef.appendChild(itemRef)
});

