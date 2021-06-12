//Первое задание
/*
Найдите и исправьте ошибки в коде:
*/
function foo() {
    function bar(a) {
        let i = 3;
        return i + a;
    }

    for (var i = 0; i < 10; i++) {
        (function(j){
            console.log( bar(j * 2) );
        })(i);

    }
}
foo();


//Вторая задача
/*
Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true, если все элементы - числа, и false - если в массиве хотя бы  одно не число.
Для проверки массива используйте метод every или some
*/

function checkNumber(arr){
     return arr.every(function (i){
       return Number(i);
    });
}
console.log(checkNumber([6,10,"18",true,20,23,"e"]));



//Третья задача
/*
“История в картинках”. Создайте массив тематически связанных строковых картинок. Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из элементов массива (одну из картинок).
Тема - свободная, ограничена только набором доступных строковых картинок.
*/
let arrayOfPictures = ["😄","😂","😊","😋","😔","😟","😥","🧠","👨‍💻","👩‍👩‍👧‍👦","🐈‍⬛","🐢","🐠","🌽"];

    let elementDiv = document.createElement("div");
    document.querySelector("body").appendChild(elementDiv);

    // for (let i = 0; i < arrayOfPictures.length;i++){
    //     let newArr = [];
    //     newArr.push(arrayOfPictures[i]);
    //     setTimeout(function () {
    //         elementDiv.innerText = newArr;
    //     },3000);
    // }

arrayOfPictures.forEach(function (element, i){
   setTimeout(function (){
       elementDiv.innerText = element;
   },1000 * i);
});


//Четвертая задача
/*
Напишите функцию, которая вызывается и работает следующим образом:
*/
function multi(a) {//stack(так как функция multi начала работать первой ,а закончит последней,а функция с параметром с зашла первой и выйдет первой

    return function (b) {
     return function (c) {
         return (a * b * c);
     };
    }

}
console.log(multi(2)(3)(4));