// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// 1. Яка кількість символів повинна бути в інпуті,
//     зазначається в його атрибуті data-length.
// 2.Якщо введена правильна кількість символів,
//  то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// 3.Для додавання стилів використовуй CSS-класи valid і invalid,
//    які ми вже додали у вихідні файли завдання.

 const input = document.getElementById("validation-input")

 input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (
    Number(input.getAttribute("data-length")) ==
    event.target.value.length
   
  ) {
        
    input.classList.add("valid");
    input.classList.remove('invalid');

    } else {
    if (
      Number(input.getAttribute("data-length")) !==
      Number(event.target.value.length)
    ) {
       input.classList.add("invalid");
       input.classList.remove("valid")
    }
     
   }

}


