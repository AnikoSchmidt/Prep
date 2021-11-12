const myButton = document.getElementById("slider-button");
const myContainer = document.getElementById("slidercontainer");
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
});
