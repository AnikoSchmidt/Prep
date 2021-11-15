const myButton = document.getElementById("slider-button");
const myContainer = document.getElementById("trackercontainer");
let isMouseDown = false;
let beginningX = 190;
let beginningY = 10;

myButton.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    beginningX = e.clientX;
    beginningY = e.clientY;
})

myContainer.addEventListener('mousemove', (e) => {
    if(isMouseDown) {
        let x = e.offsetX;
        let y = e.offsetY;
        let newY = beginningY+(e.offsetY-beginningY);
        myButton.setAttribute("style", `top: ${newY}px`);
    }
})

myButton.addEventListener('mouseup', (e) => {
    isMouseDown = false;
})

const styleYourSlider = (color, size, startPosition) => {
    document.getElementById("slider-button").style.backgroundColor = color;
    document.getElementById("labelcontainer").style.height = size;
    document.getElementsByClassName("trackline")[0].style.height = size;
    document.getElementById("slider-button").style.bottom = startPosition;
}
styleYourSlider('#6a040f', '400px', '0px');

// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
let array = [1, 2, 3];
let labels = '';

const createLabels = (array) => {
    for(let i = 0; i < array.length; i++) {
        let item = `<div class='mylabel'>${array[i]}</div>`;
        labels = labels + item;
    }
    document.getElementById('labelcontainer').innerHTML =labels;
}
createLabels(array);
