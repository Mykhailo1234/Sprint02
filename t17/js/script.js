'use strict'
let regular_name = new RegExp("^[a-zA-Z]*$");
let first_name = prompt("введіть ім'я");

console.log(regular_name.test(first_name));

if (!regular_name.test(first_name)) {
    alert('Wrong input!');
    console.log('Wrong input!');
}
else {
    let lest_name = prompt('введіть прізвище');

    if (!regular_name.test(lest_name)) {
        alert('Wrong input!');
        console.log('Wrong input!');
    }
    else {
        alert("Hello," + first_name.charAt(0).toUpperCase() + first_name.slice(1) + " " + lest_name.charAt(0).toUpperCase() + lest_name.slice(1) + "!");  //? Метод charAt () - повертає символ, розташований за вказаною індексу рядка.
        //* slice() вирізає частину рядка та повертає її як новий рядок, не змінюючи початковий.
    }
}


