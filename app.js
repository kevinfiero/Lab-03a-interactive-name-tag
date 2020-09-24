// import functions and grab DOM elements

const inputVar = document.getElementById('name-input');
const outputVar = document.getElementById('name-output');
const buttonVar = document.getElementById('button');

const blueButton = document.getElementById('blue-button');
const greenButton = document.getElementById('green-button');
const pinkButton = document.getElementById('pink-button');
const redButton = document.getElementById('red-button');
const main = document.getElementById('main-element');

console.log(main);


// set event listeners to update state and DOMs

buttonVar.addEventListener('click', () => {
    
    outputVar.textContent = inputVar.value;
    console.log(outputVar.textContent);
})

blueButton.addEventListener('click', () => {
    main.style.backgroundColor= "lightblue"
})

greenButton.addEventListener('click', () => {
    main.style.backgroundColor= "lightgreen"
})

pinkButton.addEventListener('click', () => {
    main.style.backgroundColor= "pink"
})

redButton.addEventListener('click', () => {
    main.style.backgroundColor= "red"
})