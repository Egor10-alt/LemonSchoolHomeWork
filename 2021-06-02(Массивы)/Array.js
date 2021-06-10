//Первая задача
/*
Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
*/
let arr = [6,10,20,23,"a","b",18,"c",28,"3","5","7",28,"9","1"];
let summa = 0;
for (let i = 0; i < arr.length; i++){
    if (Number(arr[i])){
        summa = summa + Number(arr[i]);
    }
}
alert(summa);



//Второе задача
/*
Создайте массив из минимум 100 случайных целых чисел.
 Переберите массив и сгенерируйте на его основе новый, который содержит только уникальные (неповторяющиеся) значения исходного массива.
 Решите задачу, используя только цикл for.
*/
let firstArray = [];
let countOfNumberInArray = +prompt("Введите целое число(минимум 100): ","");
for (let i = 0; i < countOfNumberInArray; i++){
    let number = parseInt(Math.random());
    firstArray.push(number);
}
console.log(firstArray);

let secondArray = [];
for (let i = 0; i < firstArray.length; i++){
    let isUnique = true;
    for (let j = 0; j < secondArray.length; j++){
        if ( secondArray[j] === firstArray[i]) {
            isUnique = false;
            break;
        }
        if (isUnique){
            secondArray.push(firstArray[i]);
        }
    }
}
console.log(secondArray);


//Третье задача
/*

Создайте массив со значениями: ‘Angular’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
*/

let firstMas = ["Angular","jQuery"];
firstMas.unshift("Backbone.js");
console.log(firstMas);
firstMas.push("ReactJS","Vue.js");
console.log(firstMas);
firstMas.splice(1,0,"CommonJS");
console.log(firstMas);
alert("jQuery - это здесь лишнее");
firstMas.splice(firstMas.indexOf("jQuery"),1);
console.log(firstMas);



//Четвертое задача
/*
Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’.
Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...).
Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
*/
let string = "Как Однажды Жак Звонарь Сломал Городской Фонарь";
let newArray = [];
newArray = string.split(" ");
let firstDelete = newArray.splice(newArray.indexOf("Сломал"),1);
let secondDelete = newArray.splice(newArray.indexOf("Городской"),1);
newArray.splice(newArray.indexOf("Фонарь"),0,secondDelete);
newArray.splice(newArray.indexOf("Фонарь"),0,firstDelete);
let newString = newArray.join(" ");
console.log(string);
console.log(newString);



//Пятое задача
/*
Создайте три ассоциативных массива, в каждом из которых есть поля firstname, lastname, city, phone и birthday
Добавьте некоторым объектам поле middlename (отчество)
Объедините все объекты в одном массиве (массив объектов, e.g. users)
В цикле добавьте каждому объекту массива users дополнительное поле - fullName - которое будет иметь вид “Имя Отчество Фамилия”, если поле middlename в объекте есть, и только “Имя Фамилия”, если отчества нет
Создайте цикл, который с помощью jQuery выводит в таблицу данные о пользователях
Создайте объект соответствия названия полей русскому аналогу и дорисуйте таблице шапку
*/
let first = {
    fullname: null,
    firstname:prompt("Введите свое имя: ",""),
    lastname: prompt("Введите свое фамилию: ",""),
    city: prompt("Введите горо в котором вы живете: ",""),
    phone: prompt("Введите свой номер телефона: ","050 571 0315"),
    birthday: prompt("Введите дату своего дня рождения: ","28-10-2002")
}
first.middlename = prompt("Введите свое отчество: ","");
if (first.middlename === null){
    delete first.middlename;
}


let second = {
    fullname: null,
    firstname:prompt("Введите свое имя: ",""),
    lastname: prompt("Введите свое фамилию: ",""),
    city: prompt("Введите горо в котором вы живете: ",""),
    phone: prompt("Введите свой номер телефона: ","050 571 0315"),
    birthday: prompt("Введите дату своего дня рождения: ","28-10-2002")
}
second.middlename = prompt("Введите свое отчество: ","");
if (second.middlename === null){
    delete second.middlename;
}


let third = {
    fullname: null,
    firstname:prompt("Введите свое имя: ",""),
    lastname: prompt("Введите свое фамилию: ",""),
    city: prompt("Введите горо в котором вы живете: ",""),
    phone: prompt("Введите свой номер телефона: ","050 571 0315"),
    birthday: prompt("Введите дату своего дня рождения: ","28-10-2002")
}
third.middlename = prompt("Введите свое отчество: ","");
if (third.middlename === null){
    delete third.middlename;
}

let users = [];
users.push(first,second,third);

let elementDiv = document.createElement("div");
document.querySelector("body").appendChild(elementDiv);

let elementTable = document.createElement("table");
elementDiv.appendChild(elementTable);

let headlines = {
    firstHeadlines: "ФИО",
    secondHeadlines: "Город",
    thirdHeadlines: "Телефон",
    fourHeadlines: "Дата рождения",
}

let elementTr1 = document.createElement("tr");
elementTable.appendChild(elementTr1);

for (let keyHeadlines in headlines){
    let elementTd1 = document.createElement("td");
    elementTr1.appendChild(elementTd1);
    elementTd1.innerText = headlines[keyHeadlines];
}

for (let i = 0; i < users.length; i++) {
    let elementTr = document.createElement("tr");
    elementTable.appendChild(elementTr);
    if ("middlename" in users[i]){
        users[i].fullname = users[i].firstname + " " + users[i].lastname + " " + users[i].middlename;
        delete users[i].firstname;
        delete users[i].lastname;
        delete users[i].middlename;
        for (let keys in users[i]){
            let elementTd = document.createElement("td");
            elementTr.appendChild(elementTd);
            elementTd.innerText = users[i][keys];
        }
    }else{
        users[i].fullname = users[i].firstname + " " +users[i].lastname;
        delete users[i].firstname;
        delete users[i].lastname;

        for (let keys in users[i]){
            let elementTd = document.createElement("td");
            elementTr.appendChild(elementTd);
            elementTd.innerText = users[i][keys];
        }
    }
}





