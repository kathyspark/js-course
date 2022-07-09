const right = document.querySelector(".right");
const inputName = document.querySelector("#input-name");
const inputLastname = document.querySelector("#input-lastname");
const inputAge = document.querySelector("#input-age");
const inputEmail = document.querySelector("#input-email");
const inputId = document.querySelector("#input-id");
const addBtn = document.querySelector("#add-btn");

class Person {
    constructor(nombre, apellidos, edad, email, id) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.email = email;
        this.id = id;
    }
}

function crearElemento() {
    document.createElement("div");
}