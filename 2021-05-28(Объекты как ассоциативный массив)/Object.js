//Первое задание
/*
Создайте структуру данных, полностью описывающую html-разметку картинки.
 С помощью методов браузера добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.
*/

 let image = {
    src: "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
        alt: "",
        style: "border: 1px solid #ccc",
        width: "200"
    }
    let elementDiv = document.createElement("div");
    document.querySelector("body").appendChild(elementDiv);

    let elementImage = document.createElement("img");
    elementDiv.appendChild(elementImage);

    for (let key in image){
        elementImage.setAttribute(key,image[key]);
    }


//Второе задание
/*
Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней.
 Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
*/

let dates = {
    firstDate: new Date().setDate(new Date().getDate()-2),
    secondDate: new Date().setFullYear(new Date().getFullYear() - 1)
}
let enterDate = new Date(prompt("Введите дату (yyyy-MM-dd) где y- это год, M-месяц , d - день",""));
if (enterDate > dates.secondDate && enterDate < dates.firstDate){
    console.log("Дата попала в диапазон");
}else if (enterDate.getFullYear() % 4 === 0){
    if (enterDate > dates.secondDate && enterDate < dates.firstDate){
        console.log("Дата попала в диапазон высокостного года");
    }else{
        console.log("Дата не попала в диапазон высокостного года");
    }
}else{
    console.log("Дата не попала в диапазон");
}


//Третье задание
/*
Создайте объект person, описывающий персону, с произвольным количеством произвольных полей.
Запустите цикл, в котором через prompt запрашивается имя свойства. С помощью оператора in или typeof проверьте наличие в объекте этого свойства, и выведите его на экран.
Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
 Выйти из цикла и закончить проверки можно с помощью клавиши Cancel окна prompt.
*/

let propertyForPerson;
let describePerson;
let person = {};
let countPropertyForPerson = +prompt("Введите,какое количество свойств вы хотите добавить персонажу: ","");
while(Object.keys(person).length < countPropertyForPerson){
    propertyForPerson= prompt("Введите свойства которые вы ходите создать у этого персонажа: ","");
    describePerson = prompt("Опишите свойства которые вы довавили персонажу: ","");
    if (propertyForPerson === null ||describePerson === null){
        console.log("Введите название свойста и опишите его");
        break;
    }else{
        person[propertyForPerson] = describePerson;
        if (Object.keys(person).length === countPropertyForPerson){
            break;
        }
    }
}
while(true){
    let key = prompt("Введите имя свойства: ","");
    if (key === null){
        let resCancel = confirm("Вы хотите отменить введение именя? ")
        if (resCancel){
            break;
        }
    }else if (key in person){
        console.log(key + "-" + person[key]);
    }else{
        let enterNameOfProperty = prompt("Ввседите имя свойства которое хотите добавить: ");
        let enterNameOfPropertyValue = prompt("Введите значение для этого свойства: ","");
        if (enterNameOfProperty === null ||enterNameOfPropertyValue === null ){
            console.log("Вы не введи данные для добавления");
            break;
        }else{
            person[enterNameOfProperty] = enterNameOfPropertyValue;
            console.log(enterNameOfProperty + "-" + person[enterNameOfProperty]);
        }

    }
}
console.log(person);


//Четвертое задание
/*
Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update.
 В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон).
  Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt.
 При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.
*/


let selection;
let selectionUpdate;
while(true){
    selection = prompt("Выберите действие(delete либо update):","");
    if (selection !== null){
        selection = selection.toLowerCase();
        switch (selection) {
            case "delete" :
                let keyDelete = prompt("Что вы хотите удалить у пользователя? :", "age");
                if (keyDelete in person){
                    delete person[keyDelete];
                    console.log(person);
                    break;
                }else{
                    console.log("Такого свойства у объекта person нету");
                    // break;
                }
                break;
            case "update":
                let keyUpdate = prompt("Что вы хотите редактировать у пользователе? :" , "height");
                if (keyUpdate in person){
                    selectionUpdate = prompt("На какое значение вы хотите изменить: ","");
                    person[keyUpdate] = selectionUpdate;
                    console.log(person);
                    break;
                }else{
                    console.log("Такого свойства у объекта person нету");
                    // break;
                }
                break;
            default:
                console.log("Вы выбрали другое действие");
                break;
        }
    }else{
        break;
    }
}


//Пятое задание
/*
Динамически (скриптом) создайте HTML элемент <dl>.
Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS).
*/


let elementDl = document.createElement("dl");
document.querySelector("body").appendChild(elementDl);
// elementDiv.appendChild(elementDl);

for (let key in person){

    let elementDt = document.createElement("dt");
    elementDl.appendChild(elementDt);
    elementDt.innerText = key;

    let elementDd = document.createElement("dd");
    elementDt.appendChild(elementDd);
    elementDd.innerText = person[key];
}


//Шестая задание
/*
Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...).
Добавьте этот гаджет персоне, созданной ранее.
 После этого создайте независимую копию объекта person, не используя встроенный метод Object.assign и JSON.parse, а то есть перебором свойств.
*/

let objPhone = {};
let phoneDescription;
let phoneValue;
while (true) {
    phoneDescription = prompt("Какие свойства есть у телефона (например: brand, model, resolution, color...)", "");
    phoneValue = prompt("Опишите эти свойства (например brand: samsung) :", "");
    if (phoneDescription === null || phoneValue === null){
        console.log("Вы нажали на Отмена");
        break;
    }else{
        objPhone[phoneDescription] = phoneValue;// переменная phoneDescription которая в квадратных скобках (objPhone[phoneDescription]) создает ключи(свойста) в объекте objPhone при каждой итерации цикла,а переменная phoneValue сохраняет в каждое свойство значение
        if (Object.keys(objPhone).length === 5){//Object.keys возвращает массив всех ключей
            person.phone = objPhone;//Для того чтобы в один объект встроить другой и при этом у нас ключ был вот такой phone.Можно было еще сделать вот так person['objPhone'] = objPhone;
            break;//person.phone = objPhone; это строка означает,что в объекте person мы создаем свойство с ключем под названием phone который будет хранить другой объект.Так же и с этой строкой person['objPhone'] = objPhone; но тут уже ключ будет называться objPhone
        }
    }
}

let personCopy = {};
for (let key in person){
    personCopy[key] = person[key];//Создаем независимую копию объекта person.Переменная key которая в квадратных скобках(personCopy[key])создает в объекте personCopy ключ(свойства) при каждой итерации цикла,а person[key] вызывает уже у себя созданые ключи и вписывает их значение в свойства которые были созданы в объекте personCopy с помощью personCopy[key]
    if (key === "phone"){
        personCopy.phone = {};
        for (let keyPersonCopy in person.phone){
            personCopy.phone[keyPersonCopy] = person.phone[keyPersonCopy];
        }
    }
}

while(phoneDescription !== null || phoneValue !== null){
    //проверка на то,что объект personCopy и объект person независимы друг от друга
    let personCopyKeyDelete = prompt("Введите свойство,которое вы хотите удалить у объекта personCopy:","");
    let personCopyKeyDeletePhone;
    if (personCopyKeyDelete !== null){
        personCopyKeyDelete = personCopyKeyDelete.toLowerCase();
        if (personCopyKeyDelete in personCopy){
            if (personCopyKeyDelete === "phone"){
                personCopyKeyDeletePhone = prompt("Введите какое свойство вы хотите удалить в свойстве phone: ","");
                if (personCopyKeyDeletePhone in personCopy.phone){//personCopy.phone -Вот так мы напрямую обращаемся к свойству phone которое находится в объекте personCopy
                    delete personCopy.phone[personCopyKeyDeletePhone];//Удаляет из свойста phone (которое у нас хранится в объекте personCopy) свойство которое написал пользователь в prompt. Удаляется последнее указанное свойство
                    console.log(personCopy);
                }else{
                    console.log("Такого свойства в свойстве phone не существует");
                }
            }else{
                delete personCopy[personCopyKeyDelete];
                console.log(personCopy);
            }
        }else{
            console.log("Такого свойства у объекта personCopy не существует");
        }
    }else{
        console.log("Вы нажали на Отмена");
        break;
    }

    let personKeyUpdate = prompt("Введите свойство,в котором вы хотите изменить значение:","");
    let personKeyUpdateValue;
    let personKeyUpdatePhoneValue;
    let personKeyUpdatePhone;
    if (personKeyUpdate !== null){
        personKeyUpdate = personKeyUpdate.toLowerCase();
        if (personKeyUpdate in person){
            if (personKeyUpdate === "phone"){
                personKeyUpdatePhone = prompt("Введите какое свойство вы хотите изменить в свойстве phone: ","");
                if (personKeyUpdatePhone in person.phone){
                    personKeyUpdatePhoneValue = prompt("Введите на какое значение вы хотели бы поменять: ");
                    person.phone[personKeyUpdatePhone] = personKeyUpdatePhoneValue;
                    console.log(person);
                    break;
                }else{
                    console.log("Такого свойства в свойстве phone не существует")
                }
            }else{
                personKeyUpdateValue = prompt("Введите на какое значение вы хотели бы поменять:","");
                person[personKeyUpdate] = personKeyUpdateValue;
                console.log(person);
                break;
            }
        }else{
            console.log("Такого свойства у объекта person не существует");
            // let personKeyUpdateAdd = prompt("Введите какое свойство вы хотите Добавить в свойство phone: ");
            // if (!(personKeyUpdateAdd in person)){
            //     let personKeyUpdateAddValue = prompt("Введите на какое значение вы хотели бы добавить: ");
            //     person[personKeyUpdateAdd] = personKeyUpdateAddValue;
            // }
        }
    }else{
        console.log("Вы нажали на Отмена");
        break;
    }
}


//Седьмое задание
/*
С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с именем gadget. Добавьте поля объекта gadget в созданный ранее список <dl>
*/
let {phone: gadget} = personCopy;//С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с именем gadget
for (let key in gadget){
    elementDl.append(key,gadget[key]);
}


