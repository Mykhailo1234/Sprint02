'use strict'
//("^", "$" є якорем)
let regular_name = new RegExp("^[a-zA-Z] * $"); //складається тільки з букв
let regular_gender = new RegExp("(^male$)|(^famale$)");
let regular_age = new RegExp("^[1-9]$");
let name;
let gender;
let age;

function condition(name, gender, age) {
    let buf = "The superhero name is: " + name; //Buffer - це глобальний клас

    if (gender.toLowerCase() == "male" && age < 18)
        buf += "-boy!";
    else if (gender.toLowerCase() == "male" && age >= 18)
        buf += "-man!";
    else if (gender.toLowerCase() == "famale" && age < 18)
        buf += "-girl!";
    else if (gender.toLowerCase() == "famale" && age >= 18)
        buf += "-woman!";
    else if (!gender && age < 18)
        buf += "-kid!";
    else if (!gender && age >= 18)
        buf += "-hero!";
    return buf;
}

name = prompt("What animal is the superhero most similar to?"); //prompt-запитання
if (!regular_name.test(name) || name.length > 20) //булеве значення (якщо не текст і більше 20)
    alert("Error input!");
    
else {
    gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    if (!regular_gender.test(gender.toLowerCase()) && gender)
        alert("Error input!");
    else {
        age = prompt("How old is the superhero?");
        if (!regular_age.test(age) && age.length > 5)
            alert("Error input!");
        else
            alert(result(name, gender, age));
    }
}
