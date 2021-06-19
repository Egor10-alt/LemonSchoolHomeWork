//Первое задание
/*
Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.
*/
let coffeeMachine = {
    message:"Your coffee is ready",
    start: function (){
         setTimeout(callback.bind(this),3000);
    }
};
function callback(){
    console.log(this.message);
}
coffeeMachine.start();





//Второе задание
/*
Создайте функцию hello(), которая выводит приветствие пользователю.
Создайте два объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.
*/
function hello(){
    return `Hello ${this.firstName} ${this.lastName}`;
}

let person = {
    firstName: "Egor",
    lastName: "Guzenko",
};
let person1 = {
    firstName: "Ivan",
    lastName: "Ivanov"
}
console.log(hello.call(person));
console.log(hello.call(person1));



//Третья задание
/*
Создайте объект array с методом инициализации начального значения массива, c методами добавления, удаления последнего элемента массива и методом возврата текущего состояния массива.
Используйте концепцию chaining для создания цепочки вызовов.
*/
let array = {
  value:[],
  addFirstValue: function (addFirstElement){
      if (addFirstElement === undefined){
          return;
      }else if (Number(addFirstElement)){
          this.value[0] = Number(addFirstElement);
      }else{
          this.value[0] = addFirstElement;
      }
      return this;
  },
  addValue:function (number){
      if (number === undefined){
          return;
      }
      for (let i = 0; i < number; i++){
          let addElement = prompt("Введите значение которое вы хотите добавить в массив: ");
          if (addElement === null){
              return;
          }else if (Number(addElement)){
              this.value.push(Number(addElement));
          }else{
              this.value[this.value.length] = addElement;
          }
      }
      return this;
  },
  removeLastValue: function (){
      this.value.pop();
      // this.value[this.value.length] = this.value[this.value.length - 1];
      return this;
  },
  currentStatusOfArray: function (){
      return this.value;
  }
};
array.addValue(prompt("Введите количетво итераций массива: ")).addFirstValue(prompt("Введите начальное значение которое вы хотите записать в массив: ")).removeLastValue().addValue(prompt("Введите количетво итераций массива: ")).removeLastValue().currentStatusOfArray();




//Четвертое задание
/*
Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:
*/
function sum(...args){

    let result = 0;
    let newArray = args.splice(args[args.length - 1],1);
    result = result + Number(newArray);
    sum();

}
console.log(sum(1, 2, 3, 4, 5));




//Пятое задание
/*
Есть следующий код:
Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
*/
let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country,"","");
format.apply(country,["[","]"]);
format.call(country.capital,"","");
format.apply(country.capital,["",""]);
format.apply(this,[""]);



//Шестое задание
/*
Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
*/
let user = {
    name: prompt("Введите свое имя: ","")
};

(function (context){
  return format.call(context,"<<<",">>>");
})(user);

let result = format.bind(user,"<<<",">>>");
result();



//Level up
//Первое задание
/*
“Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText.
Метод appendTo с помощью Native JS добавляет абзац в контейнер, переданный в параметре метода.
Метод appendText может дописывать текст в добавленный элемент. Создайте массив строк и запустите цикл по этому массиву.
С периодичностью, определенной в свойстве delay, в текст добавленного html-элемента добавляется соответствующий по порядку элемент массива.
Учтите, что для доступа к вашему элементу не должен производиться поиск по DOM-дереву.
*/
let obj = {
    delay: 3000,
    elementP: null,
    appendTo: function (elementDiv = document.createElement("div.container")){
        //document.createElement("p")
        document.querySelector("body").appendChild(elementDiv);
        elementDiv.appendChild(this.elementP);
    },
    appendText: function (){
        this.elementP.innerText = prompt("Добавте текст: ","");
    }
}

arr.bind(obj);
function arr(...args){

    args.forEach((arg)=>{
        setTimeout(function (){
            obj.elementP.appendText(arg);
        }.bind(obj),this.delay)
    })
}
arr("Egor","Guzenko","20","Kharkov","Ukraine","28");



//второе задание
/*
Используя дескрипторы свойств создайте объект для описания местности со свойствами latitude, longitude и title.
Свойства latitude и longitude могут содержать только цифры, все, что будет попадать в эти поля, становится числом.
Если при преобразовании к числу получается NaN, то в качестве значения записывается null. То же для поля title, только все данные будут преобразовываться к строке.
*/
let terrain = {};

Object.defineProperties(terrain,{
    "latitude": {
        get: function () {
            let latitudeValue = +prompt("Введите значение для свойства объекта: ", "");
            if (!latitudeValue) {
                return this.latitude = null;
            } else {
                return this.latitude = latitudeValue;
            }
        }
    },
    "longitude":{
        get:function (){
            let longitudeValue = +prompt("Введите значение для свойства объекта: ","");
            if (isNaN(longitudeValue)){
                return this.longitude = null
            }else{
                return this.longitude = longitudeValue;
            }
        }
    },
    "title":{
        get:function (){
            let titleValue = prompt("Введите значение для свойства объекта: ","");
            if (!(isNaN(titleValue))){
                return this.title = null;
            }else{
                return this.title = titleValue;
            }
        }
    }
});





