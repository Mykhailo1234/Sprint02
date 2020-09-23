'use strict';

let number = 9;
let mult = 1;// множимо
let table = '';

while (mult <= 10) {
    table += `${number} * ${mult} = ${number * mult}\n`; //{9*1}
    mult++;
}

alert(table);