// Your code here

//Move dodger left
const dodger = document.getElementById("dodger");

const game = document.getElementById('game');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  //move dodger right

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10);
    const gameWidth = game.clientWidth;
    const dodgerWidth = dodger.clientWidth;
    
    if (left < 360){
        dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function(event){
    if(event.key === 'ArrowLeft') {
        moveDodgerRight();
    }
  })














