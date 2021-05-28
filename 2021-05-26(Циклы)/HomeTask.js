//Первое задание
/*Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации с помощью цикла for.
 После выхода из цикла распечатайте полученную строку.
*/

let length = +prompt("Введите количество итераций: ", "");
let sumForAll = "";
for (let i = 1; i <= length;i++){
    if (i % 2 === 1){
        sumForAll = sumForAll + ".";
    }else{
        sumForAll = sumForAll + "#";
    }
}
console.log(sumForAll);


// let length = +prompt("Введите длину строки: ", "");
// let sumForAll = "";
// for (let i = 0; i < length;i++){
//     if (i % 2 === 0){
//         sumForAll = sumForAll + ".";
//     }else{
//         sumForAll = sumForAll + "#";
//     }
// }
// console.log(sumForAll);



//Вторая задание
/*С клавиатуры вводятся цифры. В цикле происходит проверка – если введено простое число, тогда происходит выход из цикла и число выводится на экране с помощью alert.
*/
let inputNumber = +(prompt("Введите число: ",""));
let resultInputNumber;
//Так как 0 и 1 не принято считать простым и составным числом, i будет начинаться с 2
for ( let i = 2; i < inputNumber; i++){
     if (inputNumber % i === 0){
        resultInputNumber = "Число является составным";
        break;
     }else{
        resultInputNumber = inputNumber;
     }
}
alert(resultInputNumber);//Если пользователь вводит 0 или 1, то цикл даже не сработает,так как условие i < inputNumber будет сразу false и в цикл мы даже не зайдем.На экран выведется indefind потому что переменная resultInputNumber в себе не хранит никакое значение


//Третье задание
/*Напишите проверку пароля, введенного пользователем. Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”.
 Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена.
 В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”.
 Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля.
*/

let password = "";
let correctPassword = "qwerty";
let resultPassword;

while(password !== correctPassword){
    password = prompt("Введите ваш пароль: ","");
    if(password === correctPassword){
        resultPassword = "Вы успешно авторизованы";
    }else{
        password = prompt("Введите верный пароль: ","");//Спросить,после ввода,у меня цикл идет заново.Спросить,после каждого ввода нас возвращаетв в while
        if (password === null){
            resultPassword = confirm("Вы уверены, что хотите отменить авторизацию?");
            if (resultPassword === true){
                resultPassword = "Вы отменили авторизацию";
                break;
            }else{
                password = prompt("Введите верный пароль: ","");
                if (password === correctPassword){
                    resultPassword = "Вы успешно авторизованы";
                }
            }
        }else{
            resultPassword = "Вы вспомнили пароль и успешно авторизованы";
        }
    }
}
alert(resultPassword);




//Четыре задание
/*Используя вложенные циклы, сформируйте строку чередованием символов . и # таким образом, чтобы получилась шахматный узор.
 Для перевода строки используйте символ \n. Код должен поддерживать легкое изменение размеров доски.
*/
let quantityOfFirstIterationCycle = +prompt("Введите количество итераций первого цикла: ","");
let quantityOfSecondIterationCycle = +prompt("Введите количество итераций второго цикла: ","");
let result = "";
for (let i = 1; i <= quantityOfFirstIterationCycle; i++){
    if (i <= quantityOfFirstIterationCycle){
        result = result + "\n"
    }
    for (let j = 1; j <= quantityOfSecondIterationCycle; j++){
        if (i % 2 === 1){
            if (j % 2 === 1){
                result = result + ".";
            }else{
                result = result + "#";
            }
        }else{
           if (j % 2 === 1){
               result = result + "#";
           }else{
               result = result + ".";
           }
        }
    }
}
console.log(result);



//Пятое задание
/*Сформируйте строку в виде треугольника-елочки:
*/
let finalResult = "";
for (let i = 1; i <= 6; i++){
    if (i <= 6){
        finalResult = finalResult + "\n";
    }
    for (let j = 1; j <= 11; j++){
        // finalResult = finalResult + ".";
        if (i === 1){
            if (j === 6){
                finalResult = finalResult + "#";
             }else /*(j % 2 === 0 || j % 2 === 1)*/ {
                finalResult = finalResult + ".";
            }
        }
        if (i === 2){
            if (j >= 5 && j <= 7){
                finalResult = finalResult + "#";
            }else{
                finalResult = finalResult + "."
            }
        }
        if (i === 3){
            if (j >= 4 && j <= 8){
                finalResult = finalResult + "#";
            }else{
                finalResult = finalResult + ".";
            }
        }
        if (i === 4){
            if (j >= 3 && j <= 9){
                finalResult = finalResult + "#";
            }else{
                finalResult = finalResult + ".";
            }
        }
        if (i === 5){
            if (j >= 2 && j <= 10){
                finalResult = finalResult + "#";
            }else{
                finalResult = finalResult + ".";
            }
        }
        if (i === 6){
            finalResult = finalResult + "#";
        }
    }
}
console.log(finalResult);

