    const myButton = document.getElementById("slider-button")
    let isMouseDown = false;
    let beginningX = 190;
    let beginningY = 10;
    myButton.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        beginningX = e.clientX;
        beginningY = e.clientYS;
    })

    myButton.addEventListener('mousemove', (e) => {
        if(isMouseDown) {
            x = e.offsetX;
            y = e.offsetY;
            myButton.setAttribute("style", `bottom: ${e.clientY}px`);
            
            console.log(x, y)
        }
    })

    myButton.addEventListener('mouseup', (e) => {

        isMouseDown = false;
    });
