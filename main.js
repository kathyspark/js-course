const inputs = document.getElementsByTagName("input");
const right = document.querySelector(".right");
const addBtn = document.querySelector("#add-btn");
const alertMessage = document.querySelector(".alert-message");

addBtn.addEventListener('click', addElement);

function addElement() {
    if(inputs[0].value === "" && inputs[1].value === "" && inputs[2].value === "" && inputs[3].value === "" && inputs[4].value === "") {
        alertMessage.style.left = "10px";
        setTimeout(()=> {
            alertMessage.style.left = "-360px";
        }, 3000);
    } else {
        const newRow = document.createElement("div");
        newRow.setAttribute("class", "row");

        for(let i = 0; i < 5; i++) {
            const rowItem = document.createElement("span");
            rowItem.setAttribute("class", "item cols");
            rowItem.textContent = document.getElementsByTagName("input")[i].value;
            newRow.appendChild(rowItem);
        }
        right.appendChild(newRow);
        
        // This empties the form inputs
        for(let i = 0; i < 5; i++) {
            inputs[i].value = "";
        }
    }
}
