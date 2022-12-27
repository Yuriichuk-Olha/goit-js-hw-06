//    Лічильник складається зі спану і кнопок, 
// які по кліку повинні збільшувати і зменшувати 
// його значення на одиницю.

// 1. Створи змінну counterValue,
//    в якій буде зберігатися поточне значення лічильника 
//    та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок,
//     всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = document.getElementById('counter');
const span = document.getElementById('value');
let counterValue = 0;
counter.addEventListener('click', ({ target }) => {
  const buttonAction = target.dataset.action;
  if (buttonAction === 'decrement') counterValue -= 1;
  else if (buttonAction === 'increment') counterValue += 1;
  span.textContent = counterValue;
});

























// const buttons = document.querySelectorAll('button[type='button']');
// buttons[0].addEventListener('click', (event) => {
//   const buttonAction = event.target.dataset.action;
//   1. if (buttonAction === 'decrement') counterValue -= 1;
//      span.textContent = counterValue;
//2. спосіб переберання     
                    //   switch (buttonAction) {
                    //     case “decrement”:
                    //       counterValue -= 1;
                    //       break;
                    //     case “increment”:
                    //       counterValue += 1;
                    //       break;
                    //   }
// });
// buttons[1].addEventListener('click', (event) => {
//   const buttonAction = event.target.dataset.action;
//   if (buttonAction === 'increment') counterValue += 1;
//   span.textContent = counterValue;
// });

