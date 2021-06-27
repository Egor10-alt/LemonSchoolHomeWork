let person1 = {
    first:{
        firstname: "Egor",
        value: "text"
    },
    second:{
        lastname: "Guzenko",
        value: "text"
    },
    third:{
        email: "egorGuzenko@gmail.com",
        value: "email"
    },
    four:{
        password: "1111egOr",
        value: "password"
    },
    five:{
        age: 18,
        value: "number"
    }
};
let person2 = {
    first:{
        firstname: "Lidiya",
        value: "text"
    },
    second:{
        lastname: "Guzenko",
        value: "text"
    },
    third:{
        email: "lidiyaGuzenko@gmail.com",
        value: "email"
    },
    four:{
        password: "1111LiDiya",
        value: "password"
    },
    five:{
        age: 6,
        value: "number"
    }
};
let person3 = {
    first:{
        firstname: "Anna",
        value: "text"
    },
    second:{
        lastname: "Guzenko",
        value: "text"
    },
    third:{
        email: "annaGuzenko@gmail.com",
        value: "email"
    },
    four:{
        password: "1111anNa",
        value: "password"
    },
    five:{
        age: 39,
        value: "number"
    }
};

let persons = [];
persons.push(person1,person2,person3);

let elementTable = document.createElement("table");
let selectBody = document.querySelector("body");
selectBody.appendChild(elementTable);

let titles = {
    firstHeadlines: "Имя",
    secondHeadlines: "Фамилия",
    thirdHeadlines: "Почта",
    fourHeadlines: "Пароль",
    fiveHeadlines: "Возраст"
}
let TrForTitle = document.createElement("tr");
elementTable.appendChild(TrForTitle);

for (let value in titles){
    let TdForTitle = document.createElement("td");
    TrForTitle.appendChild(TdForTitle);
    TdForTitle.innerText = titles[value];
}


for (let i = 0; i < persons.length; i++){
    let elemTr = document.createElement("tr");
    elementTable.appendChild(elemTr);

    for (let key in persons[i]){

        let elemTd = document.createElement("td");
        elemTr.appendChild(elemTd);

        let elemSpan = document.createElement("span");
        elemSpan.setAttribute("data-editable",persons[i][key].value)
        elemTd.appendChild(elemSpan);

        for (let keyForKey in persons[i][key]){
            delete persons[i][key].value;
            elemSpan.innerText = persons[i][key][keyForKey];
        }
    }

}

document.body.addEventListener("click",function (event){
    // console.log(event.target);

    if (!event.target.hasAttribute("data-editable")){
        return;
    }

    // const {target: elemEditable} = event;
    const elemEditable = event.target;
    console.log(elemEditable);

    let type = elemEditable.getAttribute("data-editable");
    console.log(type);

    let elemInput = document.createElement("input");
    elemInput.setAttribute("type",type);
    elemInput.value = elemEditable.innerText;


    elemEditable.after(elemInput);
    elemEditable.remove();

    elemInput.select();

    let isDeleted = false;
    let couple;
    elemInput.addEventListener("keyup",function (event){
        switch (event.key){
            case "Enter":
                elemEditable.innerText = elemInput.value;
                elemInput.after(elemEditable);
                isDeleted = true;
                elemInput.remove();
                break;
            case "Escape":
                couple = function (){
                    elemInput.after(elemEditable);
                    elemInput.remove();
                }
                break;
        }
    });
    elemInput.addEventListener("blur",function (){
        if (isDeleted){
            return;
        }
        couple();
    });
});
