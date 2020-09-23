'use strict'
function total(addCount, addPrice, currentTotal = 0) {  //
    return Number((currentTotal + (addCount * addPrice)).toFixed(2));
    //! підсумок + (кількість + ціна).toFixed (після крапки два числа) метод форматує число з використанням нотації з фіксованою точкою
}