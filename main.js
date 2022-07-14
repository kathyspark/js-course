const right = document.querySelector(".right");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener('click', addElement);

function addElement() {
    const newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    for(let i = 0; i < 5; i++) {
        const rowItem = document.createElement("span");
        rowItem.setAttribute("class", "item cols");
        rowItem.textContent = document.getElementsByTagName("input")[i].value;
        newRow.appendChild(rowItem);
    }

    right.appendChild(newRow);
    for(let i = 0; i < 5; i++) {
        document.getElementsByTagName("input")[i].value = '';
    }
}