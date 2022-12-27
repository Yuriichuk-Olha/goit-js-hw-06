function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const body = document.querySelector('body')
const btn = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')

btn.addEventListener('click', function () {
  const  color = getRandomHexColor()

  body.style.backgroundColor = color
  spanEl.textContent = color
  spanEl.appendChild(body)
  console.log(spanEl)
})
