"use strict";

//let number = 5;
//const leftBorderWidth = 1;

//alert('hello');

//const result = confirm ("Are you here?");
//console.log(result);

//const answer = prompt("Вам есть 18?", "18");
//console.log(answer);

// const answer = +prompt("Вам есть 18?", "18"); + чтобы изменить тип данных строка на число
// console.log(typeof(answer)); чтобы вывести какой тип данных в переменной

//const answers = [];
//answers[0] = prompt('Как Ваше имя?', '');
//answers[1] = prompt('Как Ваше фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');

//document.write(answers);

// урок 8 интерполяция
//const category = 'toys';
//console.log(`https://someurl/${category}/5`);

//const user = "Maksym";
//alert(`привет, ${user}`);

// урок 9 операторы в js
let incr = 10,
    decr = 10;

incr++; //инкремент
decr--; //декремент

console.log(incr);
console.log(decr);

console.log(5%2);//чтобы увидеть остаток и вывести
console.log(4*2 == 8); // проверить равенство
console.log(4*2 === 8); // строгое сравнение

// оператор и &&
// оператор или ||
const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

// оператор отрицания ставим !
const isChecked = true,
      isClose = true;
console.log(isChecked && !isClose);

// не равен !=
console.log(2 + 2 * 2 != 8);

