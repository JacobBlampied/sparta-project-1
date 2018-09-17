document.addEventListener('DOMContentLoaded', () => {

  const Game = new Object();

  // VARIABLES
  // Boxes
  Game.dice = document.getElementsByTagName('td');
  // Roll Button
  Game.rollBtn = document.getElementById('roll');

  // RANDOM NUMBER GENERATOR FUNCTION

  // Define array
  Game.RandNumArray = [];
  // Generate six random numbers and send to array
  function randNumGen() {
      for(let i = 0; i < 5; i++) {
      Game.RandNumArray.push(Math.floor((Math.random() * 6) + 1));
    }
  }
  // Link button to roll function
  Game.rollBtn.addEventListener('click', () => {
    Game.RandNumArray.splice(0, 5);
    randNumGen();
    console.log(Game.RandNumArray);
    Game.dice[0].innerHTML = Game.RandNumArray[0];
    Game.dice[1].innerHTML = Game.RandNumArray[1];
    Game.dice[2].innerHTML = Game.RandNumArray[2];
    Game.dice[3].innerHTML = Game.RandNumArray[3];
    Game.dice[4].innerHTML = Game.RandNumArray[4];
  })




});
