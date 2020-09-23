'use strict'
// створюємо рядки (str1,2,3)
let str1 = "You're catnip to a girl like me. Handsome, dazed,and to die for...";
let str2 = "Batman: \"I tried to save you.\"";
let str3 = "Selina Kyle: catwoman\"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful.\""


alert("Just string: " + str1 + "\nLength: " + str1.length   //?перенесення рядка (\n)
    + "Character number 2 is: " + str1.charAt(2) +   //повертає символ, розташований за вказаним індексом
    "\nTo uppercase " + str1.toUpperCase() +   //Повертає рядок у верхній регістр
    "\nConcatenation in a phrase" + str1 + " - Catwooman" +   //об'єднує
    "\n[Batman Returns] " + str2.substring("Batman: \"I tried to save you.\"") +   //Метод substring () виводить символи з строки між двома вказівними індексами
    "\n" + str3.replace(/catwoman/ig, " "));   //!.replace - замінює (catwoman) на порожній рядок (" ")
    //* /ig говорить, що регулярний вираз не враховує регістр "catwoman" 
