//1. Створи функцію createBoxes(amount), яка приймає 
//    один параметр - число. Функція створює стільки <div>,
//    скільки вказано в amount і додає їх у div#boxes.

/* <div id="controls">
      <input type="number" min="1" max="100" step="1" />
      <button type="button" data-create>Create</button>
      <button type="button" data-destroy>Destroy</button>
    </div>

    <div id="boxes"></div> */
//  2. Розміри найпершого <div> - 30px на 30px.
//  3. Кожен елемент після першого повинен бути ширшим і 
//     вищим від попереднього на 10px.
// 4.  Всі елементи повинні мати випадковий колір фону у форматі HEX.
// 5.  Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 6.Створи функцію destroyBoxes(), яка очищає вміст div#boxes, 
//   у такий спосіб видаляючи всі створені елементи.
 const btnCreate = document.querySelector('[data-create]')
 const btnDestroy = document.querySelector('[data-destroy]') 
 const input = document.querySelector('input')
 const divEl = document.getElementById('boxes')

 const boxe = {
  width: 30,
  height: 30,
}

    btnCreate.addEventListener('click', addCreate);
    btnDestroy.addEventListener('click', destroyBoxes);
   // input.addEventListener('input', createBoxes);
   // divEl.addEventListener('click')


function addCreate (){
  createBoxes(Number(input.value));
  
}
 
function createBoxes(amount){
  for(let i = 0; i < amount; i += 1){
    const boxeEl = document.createElement("div");
    boxeEl.style.width = boxe.width + 'px';
    boxeEl.style.height = boxe.height + 'px';
    boxeEl.style.backgroundColor = getRandomHexColor();
    divEl.appendChild(boxeEl);
  
      boxe.width += 10;
      boxe.height += 10;
  }
}

function destroyBoxes(){
  divEl.innerHTML = "";
  boxe.width = 30;
  boxe.height = 30;
}