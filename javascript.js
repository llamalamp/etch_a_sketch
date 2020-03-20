


function createDiv () {
    let numberInput =prompt("How many boxes, up to 64");
    let convertToNumber = parseInt(numberInput);
    let totalBoxes = convertToNumber * convertToNumber;
    for (i=0; i<totalBoxes; i++){
    const gameContainer = document.querySelector('#gameContainer');
    const boxElement = document.createElement('div');
    boxElement.textContent="Text";
    boxElement.classList.add('boxElement');
    gameContainer.appendChild(boxElement);}

}