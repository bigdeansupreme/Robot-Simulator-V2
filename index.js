document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  const movesContainer = document.getElementById('moves-container')
  movesArray = []
  // newLi.innerHTML = 'test'
  // movesContainer.appendChild(newLi)
  document.addEventListener('keydown', function(e) {
    const newLi = document.createElement('li')
    switch (e.key) {
      case "ArrowLeft":
        newLi.innerHTML = 'left'
        movesContainer.appendChild(newLi)
        break;
      case "ArrowRight":
        // newLi = document.createElement('li')
        newLi.innerHTML = 'right'
        movesContainer.appendChild(newLi)
        break;
      case "ArrowUp":
        newLi.innerHTML = 'up'
        movesContainer.appendChild(newLi)
        break;
      case "ArrowDown":
        newLi.innerHTML = 'down'
        movesContainer.appendChild(newLi)
        break;
    }
    
  })
  // debugger
  // ADD CODE HERE!
});

//event listener on keydown
//create object for each keydown, add to movesArray
//iterate through moves array, adding lis for each object
//also create delete functionality with event listener




