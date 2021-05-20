//Первое задание
'use strict';

var t = parseInt(prompt("Введите X ", "1")),
    n = parseInt(prompt("Введите Y ","1"));
alert("Сумма:" + (t + n));
//Ошибка в том,что при использовании use strict нам требуеться ставить запатую обязательно после каждого обьявления и инициализации переменной,если мы их создаем больше одной.
//Ну и в дополнение я еще сделал,чтобы у нас тип данных выводился int а не string.Также можно было написать +,Number для перевода в Числу.



// Второе задание
let firstVar = Math.random();
let secondVar = (firstVar * 3);
let thirdVar = (firstVar + secondVar);

alert(`Result: ${firstVar} ${secondVar} ${thirdVar}`);




//Третье задание
let firstName = prompt("Введите Имя: ","Egor");
let lastName = prompt("Введите Фамилию: ", "Guzenko");

document.write("What’s up "+`${firstName} ${lastName}`.toUpperCase());
// alert(`What’s up ${firstName} ${lastName}`.toUpperCase());


//Четвертое задание
//Первый вариант решения
let x = +prompt("Введите Цифру: ","1");
let y = +prompt("Введите Цифру: ","1");
debugger;
alert(Number(x) + Number(y));
alert(Number(x) - Number(y));
alert(Number(x) * Number(y));
alert(Number(x) / Number(y));
//Второй вариант решения(более красивый)
let q = +prompt("Введите Цифру: ","1");
let w = +prompt("Введите Цифру: ","1");
debugger;
alert(`Result: ${q + w} ,${q - w} ,${q * w} ,${q / w}`);


//Пятое задание
let distanceBetweenEarthAndMoon = 384400;
let shipSpeed = parseInt(prompt("Введите текущую скорость корабля: ","10"));

let flightTime = (distanceBetweenEarthAndMoon / shipSpeed);
console.log(flightTime);


//Шестое задание
let inputNumberUser = +prompt("Введите цифру: ","5");
inputNumberUser = inputNumberUser % 2;
let res = confirm(`${inputNumberUser} == 1?`);
alert("Результат: " + res);


//Седьмое задание
let number = +prompt("Введите число: ","20");
let exam = !isNaN(number);
alert("Проверка: " + exam);

let string = prompt("Введите строку: ","Привет,Мир");
let check = isNaN(string);
alert("Проверка: " + check);




//Восьмое задание
let byte = Number(prompt("Введите количество байт: ","10"));
const KILO_BYTE = (byte * 0.001);
alert(`Количество Килобайт равна: ${KILO_BYTE}`);
const MEGA_BYTE = (KILO_BYTE * 0.001);
alert(`Количество Мегабайт равна: ${MEGA_BYTE}`);
const GIGA_BYTE = (MEGA_BYTE * 0.001);
alert(`Количество Гигабайт равна: ${GIGA_BYTE}`);
alert(`Итого: ${byte} -> ${KILO_BYTE} -> ${MEGA_BYTE} -> ${GIGA_BYTE}`);




//Девятая задание
let apples = +prompt("Количество яблок у Чжуан-Цзы: ","23");
let applesEaten = +prompt("Количество съеденых яблок Цзэн-Цзы: ","5");
let count = (apples - applesEaten);
let rest = (count === apples);
alert("Результат:" + rest);





//Десятое задание
let firstCol = parseInt(prompt("Введите единицу измерения веб: ","50px"));
let secondCol = parseInt(prompt("Введите единицу измерения веб: ","30px"));
let thirdCol = parseInt(prompt("Введите единицу измерения веб: ","30px"));

console.log(Math.max(firstCol,secondCol,thirdCol));




