let boxes=16;
const gameContainer = document.querySelector('#gameContainer');

function initialGrid(boxes){
    gameContainer.style.gridTemplateColumns= `repeat(${boxes},1fr)`;
    gameContainer.style.gridTemplateRows= `repeat(${boxes},1fr)`;
    // Create array to make grids
    for(let i=0;i<boxes;i++){
      for(let j=0;j<boxes;j++){
      let boxElement = document.createElement('div');
      boxElement.textContent="Text";
      boxElement.classList.add('boxElement');
      gameContainer.appendChild(boxElement);}
  }}

initialGrid(16);