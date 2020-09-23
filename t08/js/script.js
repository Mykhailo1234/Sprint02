'use strict'
let inp = prompt();//функція "prompt" приймає два аргументи
let convert = Number(inp);//перетворення в число

//якщо введені числа не перебувають в діапазоні 1-4
if (isNaN(convert) || convert < 1 || convert > 4)
    alert("Wrong input");

    //якщо число дорівнює один
else if (convert == 1)
    alert(convert * 2 / 'a');
else if (convert == 2)
    alert((convert - convert) / 0);//відняти вхідне значення, розділити на нуль
else if (convert == 3)
    alert(0 * Infinity);//помножити нуль на нескінченність
else if (convert == 4)
    alert(isFinite(convert * 40000000));//якщо аргумент є: Infinity, -Infinity, NaN = (false)/ В іншому випадку = true