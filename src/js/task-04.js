//    Лічильник складається зі спану і кнопок, 
// які по кліку повинні збільшувати і зменшувати 
// його значення на одиницю.

// 1. Створи змінну counterValue,
//    в якій буде зберігатися поточне значення лічильника 
//    та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок,
//     всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.


const btnDecrement = document.querySelector('[data-action="decrement"]');

const btnIncrement = document.querySelector('[data-action="increment"]');

const span = document.getElementById('value');

let counterValue = 0;

 btnDecrement.addEventListener('click', function (){
  if (btnDecrement) counterValue -= 1;
  span.textContent = counterValue;
})

 btnIncrement.addEventListener('click', function(){
  if (btnIncrement) counterValue += 1;
  span.textContent = counterValue;
})









//const counter = document.getElementById('counter');

// counter.addEventListener('click', ({ target }) => {
//   const buttonAction = target.dataset.action;
//   console.log("🚀 ~ file: task-04.js:27 ~ counter.addEventListener ~ buttonAction", buttonAction)
  
//   if (buttonAction === 'decrement') counterValue -= 1;
//   else if (buttonAction === 'increment') counterValue += 1;
//   span.textContent = counterValue;
// });

