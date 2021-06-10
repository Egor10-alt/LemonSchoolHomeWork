//Первое задание
/*
Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне.
Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки.
Используя эти псевдонимы получите значение из prompt и отобразите в alert.
А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.
*/
function d() {
    debugger;
}
d();
function p(string) {

    if (string === null){
        console.log("Вы ничего не ввели");
        return;
    }else if (Number(string)){
        string = Number(string);
    }else{
        string = string.toString();
    }

    function a() {
        alert(string)
    }
    a();
}
p(prompt("Введите что вы захотите: ",""));


//Второе задание
/*
Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает два числа и возвращает большее:
*/

let max = (a,b) =>{
    if (a > b){
        return a;
    }else if(b > a){
        return b;
    }
}
console.log(max(25,6));
//
// let getMaxNumber = (n) => {
//     if (n === 0){
//         return;
//     }
//     let arrayMax = [];
//     for (let i = 0; i < n;i++){
//         let number = prompt("Введите число: ","");
//         if (number === null)
//         {
//             return "Вы ничего не ввели";
//
//         }else if (isNaN(Number(number))){
//             return "Не математическая операция";
//         }
//         else{
//             arrayMax.push(Number(number));
//         }
//     }
//     let max = arrayMax[j];
//     for (let j = 0; j < arrayMax.length; j++){
//         if (arrayMax[j] > max){
//             max = arrayMax[j];
//         }
//     }
//     return max;
// }
// let resultMaxNumber = getMaxNumber(+prompt("Введите количество чисел которое будет участвовать в нахождении максимального числа из них: ",""));
// console.log(resultMaxNumber);




//Третье задание
/*
Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:
*/
function getMinNumber(count) {

    let min = arguments[0];
    for (let i =0; i < arguments.length; i++){
        if (arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
}
console.log(getMinNumber(1,3,5,6,885,-1,0));


//Четвертое задание
/*
Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.
*/

function getTheLongestWordInString(string){

    if (typeof string === "number" || string === ""){
        return;
    }
    let array = [];
    array = string.split(" ");
    let newArray = [];
    for (let i = 0;  i < array.length; i++){
        let count = 0;
        for (let j = 0; j < array[i].length; j++){
            count++;
        }
        newArray.push(count);
    }
    let max = newArray[0];
    for (let i = 0; i < newArray.length; i++){
        if (newArray[i] > max){
            max = newArray[i];
        }
    }
    return max;
}
console.log(getTheLongestWordInString("Аргентина манит негра"));



//Пятое задание
/*
Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное и возвращает их
*/
function getHighAndLowNumberInString(string){

    let re = /[a-zA-z]/g;
    if (string.search(re) !== -1){
        return;
    }

    let array = [];
    array = string.split(" ");
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
        if (array[i] < min){
            min = array[i];
        }
    }

    let resultString = "";
    resultString = resultString + max + " " + min;
    return resultString;
    // let obj = {};
    // obj.max = max;
    // obj.min = min;
    //
    // let resultString = "";
    // for (let key in obj){
    //     resultString = resultString + " " + obj[key];
    // }
    // return resultString;
    // // return JSON.stringify(obj);
}
let result = getHighAndLowNumberInString("1 5 -5  44 -10 454 43");
alert(result);



//Level Up
//Первое задание
/*
Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.
*/
// function getNewArray(arr){
//     array = array.reverse();
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === array[array.length - 1]){
//             array.length = array.length - 1;
//         }
//     }
//     array = array.reverse();
//     return array;
// }
// let array =[1,true,"Egor",20,10,"Family"];
// getNewArray(array);

function getNewArray(arr){
    // for (let i = array.length; i > 0; i--){
    //     if (array[array.length - 1]){
    //         array.length = array.length - 1;
    //     }
    // }
    // return array;
    let finalArray = [];
    for (let i = 1; i < array.length;i++){
        finalArray[finalArray.length] = array[i];
    }
    return finalArray;
}
let array =[1,true,"Egor",20,10,"Family"];
getNewArray(array);



//Второе задание
/*
Не используя методы массива, напишите функцию аналог метода массива push.
Функция добавляет в конец переданного в параметре массив произвольное количество элементов и возвращает новую длину массива.
*/

function getNewLength(arrayForLength) {

    let quantityOfIteration = +prompt("Введите количество итераций массива: ","");
    for (let i = 0; i < quantityOfIteration; i++){
        let quantityOfAddElements = prompt("Введите элемент который вы хотите добавить: ","");
        if (quantityOfAddElements === null){
            return;
        }else if (Number(quantityOfAddElements)){
            arrForLength[arrayForLength.length] = Number(quantityOfAddElements);
        }else{
            arrForLength[arrayForLength.length] = quantityOfAddElements;

        }
    }
    return arrForLength.length;
}
let arrForLength = [1,2,5,"Hello","World",7,9];
getNewLength(arrForLength);



//Третье задание
/*
Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены.
Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.
*/
// function getFuncAssign(source,s) {
//
//     source.lastname = s;
//     for (let key in source){
//         s = {};
//         if (typeof key === "object"){
//             s[key] = source[key];
//         }
//     }
// }
// getFuncAssign({firstname:"Tom",age: 10},{lastname:"Doe"});