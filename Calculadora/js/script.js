//seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplication-operations"); // Alterado para querySelector

//funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplicatorNumber; i++) { // Adicionei "let" para i
        const result = number * i;

        const template = `<div class="row">
            <div class="operation">${number} x ${i} = ${result}</div> 
        </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }
};

//eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicatonNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicatonNumber || !multiplicatorNumber) return console.log("Complete todos os campos!");

    createTable(multiplicatonNumber, multiplicatorNumber); // Chame a função createTable com os valores inseridos
});
