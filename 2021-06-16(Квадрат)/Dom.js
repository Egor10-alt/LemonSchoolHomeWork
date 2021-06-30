function app(){
    let countOfRow = +prompt("Введите количество строк вашего квадрата: ","");
    let countOfColm = +prompt("Введите количество столбцов вашего квадрата: ","");

    let elementTable = document.createElement("table");
    let elementBody = document.querySelector("body");
    elementBody.appendChild(elementTable);

    for (let i = 0; i < countOfRow; i++){
        let elementTR = document.createElement("tr");
        elementTR.classList.add("square");
        elementTable.appendChild(elementTR);

        for (let j = 0; j < countOfColm; j++){
            let elementTD = document.createElement("td");
            elementTR.appendChild(elementTD);
        }
    }
    let array = [];
    let elementTd = document.querySelectorAll("td");
    elementTd.forEach(function (elemTd){
        elemTd.addEventListener("click",function (){
            if (elemTd.style.background === "black"){
                elemTd.style.background = "white";
                if (elemTd.style.background === "white"){
                    array.splice(array.indexOf(elemTd),1);
                }
            }else{
                elemTd.style.background = "black";
                if (elemTd.style.background === "black"){
                    array.push(elemTd);
                }
            }
        })
    })

    let isWell = false;
    function getClearTable(){
        // let elementButtonClear = document.querySelector(".btn-clear");
        let elementButtonClear = document.createElement("button");
        elementButtonClear.classList.add("btn-clear");
        elementButtonClear.setAttribute("type","submit");
        elementBody.appendChild(elementButtonClear);
        elementButtonClear.innerText = "Clear";

        elementButtonClear.addEventListener("click",function (){
            isWell = true;
            elementTd.forEach(function (elem){
                elem.style.background = "white";
            })
        })
    }
    getClearTable();


    let getRestoreTable = function (){
        // let elementButtonRestore = document.querySelector(".btn-restore");
        let elementButtonRestore = document.createElement("button");
        elementButtonRestore.classList.add("btn-restore");
        elementButtonRestore.setAttribute("type","submit");
        elementBody.appendChild(elementButtonRestore);
        elementButtonRestore.innerText = "Restore";
        // if (!isWell){
        //      return;
        //  }
        elementButtonRestore.addEventListener("click",function (){
            array.forEach(function (arrElem){
                arrElem.style.background = "black";
            })
        })
    }
    getRestoreTable();

}
app();