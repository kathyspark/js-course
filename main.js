const right = document.querySelector(".right");
const inputName = document.querySelector("#input-name");
const inputLastName = document.querySelector("#input-lastname");
const inputAge = document.querySelector("#input-age");
const inputEmail = document.querySelector("#input-email");
const inputId = document.querySelector("#input-id");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener('click', crearElemento);

function crearElemento() {
    const row = document.createElement("div");
    row.setAttribute("class", "rows");
    for(let i = 0; i <= 4; i++) {
        const cols = document.createElement("span");
        cols.setAttribute("class", "item cols");
        row.appendChild(cols);
        let colItems = document.querySelectorAll('.item');
        let counter = colItems.length - 1;
        console.log(counter);
        colItems[counter--].textContent = inputId.value;
        colItems[counter--].textContent = inputEmail.value;
        colItems[counter--].textContent = inputAge.value;
        colItems[counter--].textContent = inputLastName.value;
        colItems[counter].textContent = inputName.value;
    }

    inputId.value = '';
    inputEmail.value = '';
    inputAge.value = '';
    inputLastName.value = '';
    inputName.value = '';
    right.appendChild(row);
}