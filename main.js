const right = document.querySelector(".right");
const inputName = document.querySelector("#input-name");
const inputLastName = document.querySelector("#input-lastname");
const inputAge = document.querySelector("#input-age");
const inputEmail = document.querySelector("#input-email");
const inputId = document.querySelector("#input-id");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener('click', addElement);

function addElement() {
    console.log(document.getElementsByTagName("input")[0].value);
    const newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    for(let i = 0; i < 5; i++) {
        const rowItem = document.createElement("span");
        rowItem.setAttribute("class", "item cols");
        rowItem.textContent = document.getElementsByTagName("input")[i].value;
        newRow.appendChild(rowItem);
    }
    console.log(newRow);

    right.appendChild(newRow);
    for(let i = 0; i < 5; i++) {
        document.getElementsByTagName("input")[i].value = '';
    }
}