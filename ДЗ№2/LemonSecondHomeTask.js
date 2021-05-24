// Первое задание
/*Создайте блок-схему, описывающую алгоритм поиска минимального из трех чисел.
 Запишите алгоритм программно: создайте три переменные с любыми числовыми значениями; используя только вложенные условные операторы if (НЕ логические операторы),
 найдите минимальное число и отобразите на экране его значение.
 */

let firstNumber = +prompt("Введите первое число:","12");
let secondNumber = +prompt("Введите второе число:","11");
let thirdNumber = +prompt("Введите третье число:","10");

// if (!(firstNumber === 0 && secondNumber === 0 && thirdNumber === 0)){
//     alert("Введите значения");
debugger;
if (firstNumber < secondNumber){
    if (firstNumber < thirdNumber){
        console.log(`Первое число "${firstNumber}" самое маленькое`);
    }else{
        console.log(`Число ${firstNumber} и не максимальное, и не минимальное`);
    }
}else if (secondNumber < firstNumber){
    if (secondNumber < thirdNumber){
        console.log(`Второе число "${secondNumber}" самое маленькое`);
    }else{
        console.log(`Число ${secondNumber} и не максимальное, и не минимальное`);
    }
}else if(thirdNumber < firstNumber){
    if (thirdNumber < secondNumber){
        console.log(`Третье число "${thirdNumber}" самое маленькое`);
    }else{
        console.log(`Число ${thirdNumber} и не максимальное, и не минимальное`);
    }
}
else{
    console.log(`Все числа равны: ${firstNumber} === ${secondNumber} === ${thirdNumber}`);
}





//Второе задание
/*По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне.
Проверить и вывести на экран, улитка двигается вперед, назад или остается на месте (скорость (вектор) положительная, отрицательная или ноль).
*/
let speedSnail = parseInt(prompt("Введите скорость улитки:","50"));

if(isNaN(speedSnail)){
    alert("Введите пожалуйста скорость улитки");
}else if (speedSnail > 0){
    alert(`Улитка двигается вперед со скоростью ${speedSnail} км/ч`);
}else if(speedSnail < 0){
    alert(`Улитка двигается назад со скоростью ${speedSnail} км/ч`);
}else{
    alert(`Улитка стоит на месте со скоростью ${speedSnail} км/ч`);
}



//Третье задание
/*Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.
*/
let yourName = prompt("Введите свое имя:","Егор");

if (yourName === null) {
    console.log("Вы не ввели свое имя.Введдите его пожалуйста");
}else if(!isNaN(yourName)){
    console.log("Вы ввели цифры");
}else{
    console.log(`Привет,${yourName}`)
}


//Четвертое задание
/*У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt.
В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать английский язык или выпить пива.
 С помощью условного оператора определите ваши возможности и отобразите на экране в alert.
*/

let myPocket = +prompt("Сколько у меня денег в кармане? ","100");
let friendPocket = +prompt("Сколько денег в кармане у друга? ","100")
let sum = (myPocket + friendPocket);

if( sum >= 550){
    alert("Мы летим на Мальту изучать английский");
}else{
    alert("Ну что,по пивку?");
}

//Пятое задание
/*
Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255.
Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.
*/

let bus = +prompt("Введите номер маршрутки.Маршрутки могут быть толлько под номерами 7,225,255","7");
let res;
if (!bus){
    res = "Вы не ввели номер маршрутки или нажали на 0"
}else if(bus === 7){
    res = "Ожидайте,это не ваша маршрутка";
}else if (bus === 225){
    res = "Заходите,это маршрутка вам по пути";
}else{
    res = "Ожидайте,это не ваша маршрутка"
}
console.log(res);




//Шестое задание
/*
В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу.
*/

let day = new Date().getDay();
if(day === 6 || day === 0){
    console.log("У тебя выходной")
}else{
    console.log("Выходи на работу")
}

//
// let day = new Date();
// if(day.getDay() === 6 || day.getDay() === 0){
//     console.log("У тебя выходной")
// }else{
//     console.log("Выходи на работу")
// }




//Седьмое задание
/*
Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции (регистр символов не имеет значения), из второго - сумма, подлежащая конвертации.
 Используя switch, рассчитайте результат конвертации. Результат выведите его в alert.
*/

let currency = prompt("Какую валюту мы будем конвертировать.Либо USD,либо UAH: ","");
let count = parseInt(prompt("Введите сумму конвертации: ","100"));
let result;

if(currency !== null){
    currency = currency.toUpperCase();
}
// if (!!(count)){
//     count = count.toFixed(2);
// }else{
//     console.log("Это не число");
//
// }
switch (currency){
    case "UAH":
        result = "Вы ввели Украинскую Гривну";
        break;
    case "USD":
        result = (count * 27.43);
        break;
    default:
        result = "Вы ввели валюту на другом языке или не по условию задачи";
}
console.log(result);




//Восьмое задание
/*
В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
*/
let month = new Date().getMonth();
let resultMonth;
    switch (month){
        case 0://Так как я подумал,что январь начинаеться с 0
        case 1://Тут case так идет(без значения) так как в этом случае у нас будет или(||),Если month === 0 || month === 1 || month === 11 , то выведет resultMonth = "Зима";
        case 11:
            resultMonth = "Зима";
            break;
        case 2:
        case 3:
        case 4:
            resultMonth = "Весна";
            break;
        case 5:
        case 6:
        case 7:
            resultMonth = "Лето";
            break;
        case 8:
        case 9:
        case 10:
            resultMonth = "Осень";
            break;
        default:
            resultMonth = "Такого Месяца не существует";
            break;
}
console.log(resultMonth);


// let month = new Date();
// let resultMonth;
// switch (month.getMonth()){
//     case 0://Так как я подумал,что январь начинаеться с 0
//     case 1:
//     case 11:
//         resultMonth = "Зима";
//         break;
//     case 2:
//     case 3:
//     case 4:
//         resultMonth = "Весна";
//         break;
//     case 5:
//     case 6:
//     case 7:
//         resultMonth = "Лето";
//         break;
//     case 8:
//     case 9:
//     case 10:
//         resultMonth = "Осень";
//         break;
//     default:
//         resultMonth = "Такого Месяца не существует";
//         break;
// }
// console.log(resultMonth);




//Девятое задание
/*
Переменная lang может принимать два значения: 'ru' и 'en'.
Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение 'ru',
то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.).
Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.
*/

let lang = prompt("Введите язык.Может быть только ru или en","");
let dayToDay = +prompt("Введите цифру от 0 до 6","");
let resDay;

if (lang !== null){
    lang = lang.toLowerCase();
    if (lang === "ru"){
        switch (dayToDay){
            case 0:
                resDay = "Воскресенье";
                break;
            case 1:
                resDay = "Понедельник";
                break;
            case 2:
                resDay = "Вторник";
                break;
            case 3:
                resDay = "Среда";
                break;
            case 4:
                resDay = "Четверг";
                break;
            case 5:
                resDay = "Пятница";
                break;
            case 6:
                resDay = "Суббота";
                break;
            default:
                resDay = "Вы ввели число которое больше 6 или меньше 0 или не ввели вообще число";
        }
    }else if(lang === "en"){
        switch (dayToDay){
            case 0:
                resDay = "Sunday";
                break;
            case 1:
                resDay = "Monday";
                break;
            case 2:
                resDay = "Tuesday";
                break;
            case 3:
                resDay = "Wednesday";
                break;
            case 4:
                resDay = "Thursday";
                break;
            case 5:
                resDay = "Friday";
                break;
            case 6:
                resDay = "Saturday";
                break;
            default:
                resDay = "Вы ввели число которое больше 6 или меньше 0 или не ввели вообще число";
        }
    }else{
        console.log("Вы не ввели правильный язык")
    }

    console.log(resDay);

}else{//Проверка на null.А нал возвращается если пользователь нажал Отмена на модальном окне
    console.log("Вы нажали на Отмену");
}


//Десятое задание
/*
Найдите и исправьте ошибки в коде:
*/
let x = +prompt("x", "0");
let hello;

switch (x){
    case 0:
        error = "На ноль делить нельзя";
        break;
    case 1:
        error = "На единицу делить бессмысленно";
        break;
}
if (isNaN(x)){
    error = "Не математическая операция";
}else if(error){   //А я правильно понимаю ,что здесь если у меня а будет равно любому числу кроме 0 и 1,проверка в switch будет false и у меня сразу будет проверка в if но и там будет false потому что у нас hi будет равно indefined
    alert(error);
}else{
    alert(100 / x);
}
