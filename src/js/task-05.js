// Напиши скрипт, який під час набору тексту в інпуті 
//    input#name-input (подія input),
//    підставляє його поточне значення в span#name-output.
//  Якщо інпут порожній, у спані повинен
//    відображатися рядок "Anonymous".

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', ({target}) => {
    const value = target.value;
    if (value.trim() === " ") output.textContent = "Anonymous";
    else 'name-input' === value
         output.textContent = value;
})

