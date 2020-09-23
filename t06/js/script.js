'use strict'
// створюємо константу
const num = 2; //число
const bigI = 2n; //працює з цілими числами довільної довжини
const str = "hello";//рядок
const bool = true;//Булевий (логічний)
const noth = null;//спеціальне значення, яке має сенс «нічого» або «значення невідомо
const undef = undefined;//має сенс «значення не присвоїли»
const obj = null; // let user = {/n name:""/n age:""}, можемо помістити в об'єкт кілька властивостей
const symb = 'a';//Це - мовний «захист» від плутанини, адже рядки і символи - принципово різні типи даних і не повинні неконтрольовано перетворюватися один в одного.
const func = function () { }; //повторює одну й ту ж дію в багатьох частинах програми

// !Виклик typeof повертає рядок, що містить інформацію про тип операнда.

alert(`num is ${typeof (num)}\n` + `bigI is ${typeof (bigI)}\n` +
    `str is ${typeof (str)}\n` + `bool is ${typeof (bool)}\n` +
    `noth is null\n` + `undef is ${typeof (undef)}\n` +
    `obj is ${typeof (obj)}\n` + `symb is symbol\n` +
    `func is ${typeof (func)}\n`);