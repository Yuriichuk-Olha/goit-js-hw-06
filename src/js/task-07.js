// Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. В результаті, 
// перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.getElementById("font-size-control")
const span = document.getElementById("text")


input.addEventListener('input',
 function () {
    span.style.fontSize = input.value + 'px'
    console.log("🚀 ~ file: task-07.js:29 ~ onInputFontSize ~ span", span.value)
 })
 
    
    
    
