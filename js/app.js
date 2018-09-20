document.addEventListener('DOMContentLoaded', () => {

  if (player1 = true) {
    Game.PlayerVariables =
    [[document.getElementById('p1holdbtn1')],[document.getElementById('p1holdbtn2')],[document.getElementById('p1holdbtn3')],
    [document.getElementById('p1holdbtn4')],[document.getElementById('p1holdbtn5')],[document.getElementById('p1holdbtn6')],
    [document.getElementById("p1fillones")],[document.getElementById("p1filltwos")],[document.getElementById("p1fillthrees")],
    [document.getElementById("p1fillfours")],[document.getElementById("p1fillfives")],[document.getElementById("p1fillsixes")]];
  }
  if (player1 != true) {
    Game.PlayerVariables =
    [[document.getElementById('p2holdbtn1')],[document.getElementById('p2holdbtn2')],[document.getElementById('p2holdbtn3')],
    [document.getElementById('p2holdbtn4')],[document.getElementById('p2holdbtn5')],[document.getElementById('p2holdbtn6')],
    [document.getElementById("p2fillones")],[document.getElementById("p2filltwos")],[document.getElementById("p2fillthrees")],
    [document.getElementById("p2fillfours")],[document.getElementById("p2fillfives")],[document.getElementById("p2fillsixes")]];
  }

  const Game = new Object();

  // VARIABLES
  // Boxes
  Game.dice = document.getElementsByTagName('td');
  // Roll Button
  Game.rollBtn = document.getElementById('roll');
  // Number Total
  Game.numtotal = document.getElementsByClassName('numtotal');
  // Hold Buttons

  // Hold Buttons initial condition
  Game.holdBool1 = false;
  console.log(Game.holdBool1);
  Game.holdBool2 = false;
  console.log(Game.holdBool2);
  Game.holdBool3 = false;
  console.log(Game.holdBool3);
  Game.holdBool4 = false;
  console.log(Game.holdBool4);
  Game.holdBool5 = false;
  console.log(Game.holdBool5);
  Game.holdBool6 = false;
  console.log(Game.holdBool6);

  // Player Specific Variables
  Game.holdbtn1 = document.getElementById('p1holdbtn1'); //[0]
  Game.holdbtn2 = document.getElementById('p1holdbtn2'); //[1]
  Game.holdbtn3 = document.getElementById('p1holdbtn3'); //[2]
  Game.holdbtn4 = document.getElementById('p1holdbtn4'); //[3]
  Game.holdbtn5 = document.getElementById('p1holdbtn5'); //[4]
  Game.holdbtn6 = document.getElementById('p1holdbtn6'); //[5]

  Game.fillones = document.getElementById("p1fillones"); //[6]
  Game.filltwos = document.getElementById("p1filltwos"); //[7]
  Game.fillthrees = document.getElementById("p1fillthrees"); //[8]
  Game.fillfours = document.getElementById("p1fillfours"); //[9]
  Game.fillfives = document.getElementById("p1fillfives"); //[10]
  Game.fillsixes = document.getElementById("p1fillsixes"); //[11]

  // RANDOM NUMBER GENERATOR FUNCTION
  // Define array
  Game.RandNumArray = [];
  // Generate six random numbers and send to array
  Game.RandomNumber = () => {
    for(let i = 0; i < 5; i++) {
      Game.RandNumArray.push(Math.floor((Math.random() * 6) + 1));
    }
  }

  // Link button to roll function
  Game.rollBtn.addEventListener('click', () => {
    Game.RandNumArray.splice(0, 5);
    Game.ones.splice(0, Game.ones.length);
    Game.twos.splice(0, Game.twos.length);
    Game.threes.splice(0, Game.threes.length);
    Game.fours.splice(0, Game.fours.length);
    Game.fives.splice(0, Game.fives.length);
    Game.sixes.splice(0, Game.sixes.length);

    Game.RandomNumber()
    Game.dice[0].innerHTML = Game.RandNumArray[0];
    Game.dice[1].innerHTML = Game.RandNumArray[1];
    Game.dice[2].innerHTML = Game.RandNumArray[2];
    Game.dice[3].innerHTML = Game.RandNumArray[3];
    Game.dice[4].innerHTML = Game.RandNumArray[4];
    Game.ArrayPush()
    Game.RoundScore()
  })

  // SCORECARD
  Game.ones = [];
  Game.twos = [];
  Game.threes = [];
  Game.fours = [];
  Game.fives = [];
  Game.sixes = [];
  Game.Numbers = [[Game.ones],[Game.twos],[Game.threes],[Game.fours],[Game.fives],[Game.sixes]];

  //Sort and fill the array
  Game.ArrayPush = () => {

    for (let i = 0; i < 6; i++) {
      switch (Game.RandNumArray[i]) {
        case 1:
        if ((Game.RandNumArray[i] === 1) && (Game.holdBool1 === false)) {
          Game.RandNumArray[i] === 1
          Game.ones.push(1);
          console.log('ones', Game.ones);
        }
        break;
        case 2:
        if ((Game.RandNumArray[i] === 2) && (Game.holdBool2 === false)) {
          Game.RandNumArray[i] === 2
          Game.twos.push(2);
          console.log('twos', Game.twos);
        }
        break;
        case 3:
        if ((Game.RandNumArray[i] === 3) && (Game.holdBool3 === false)) {
          Game.RandNumArray[i] === 3
          Game.threes.push(3);
          console.log('threes', Game.threes);
        }
        break;
        case 4:
        if ((Game.RandNumArray[i] === 4) && (Game.holdBool4 === false)) {
          Game.RandNumArray[i] === 4
          Game.fours.push(4);
          console.log('fours', Game.fours);
        }
        break;
        case 5:
        if ((Game.RandNumArray[i] === 5) && (Game.holdBool5 === false)) {
          Game.RandNumArray[i] === 5
          Game.fives.push(5);
          console.log('fives', Game.fives);
        }
        break;
        case 6:
        if ((Game.RandNumArray[i] === 6) && (Game.holdBool6 === false)) {
          Game.RandNumArray[i] === 6
          Game.sixes.push(6);
          console.log('sixes', Game.sixes);
        }
        break;
      }
    }
  }

  // Hold Function
  Game.ButtonArrayPressed = [];

  Game.Total = [];


  Game.ButtonFunction = () => {
    for (var i = 1; i < 7; i++) {
      const holdBtn = document.getElementById(`p1holdbtn${i}`);
      holdBtn.addEventListener('click', (e) => {

        if (Game.ButtonArrayPressed.length < 6) { // if statement start
          switch (Number(e.target.getAttribute("data-num"))) { // switch start
            case 1:
            Game.holdBool1 = true;
            Game.ButtonArrayPressed.push('btn1');
            Game.Total.push(Number(Game.fillones.innerHTML))
            break;
            case 2:
            Game.holdBool2 = true;
            Game.ButtonArrayPressed.push('btn2');
            Game.Total.push(Number(Game.filltwos.innerHTML))
            break;
            case 3:
            Game.holdBool3 = true;
            Game.ButtonArrayPressed.push('btn3');
            Game.Total.push(Number(Game.fillthrees.innerHTML))
            break;
            case 4:
            Game.holdBool4 = true;
            Game.ButtonArrayPressed.push('btn4');
            Game.Total.push(Number(Game.fillfours.innerHTML))
            break;
            case 5:
            Game.holdBool5 = true;
            Game.ButtonArrayPressed.push('btn5');
            Game.Total.push(Number(Game.fillfives.innerHTML))
            break;
            case 6:
            Game.holdBool6 = true;
            Game.ButtonArrayPressed.push('btn6');
            Game.Total.push(Number(Game.fillsixes.innerHTML))
            break;
            default:
          } // switch statement end

        }
        if (Game.ButtonArrayPressed.length === 6) {

          const calcBtn = document.getElementById("p1calc");
          calcBtn.addEventListener('click', (e) => {

            Game.TotalScore = (total, num) => {
              return total + num;
            }
            document.getElementById("p1total").innerHTML = Game.Total.reduce(Game.TotalScore)
            Game.TotalScore()
          }) // calc event listener close
        } // else if close
    }) // hold button event listener
  } // for loop close
} // Game.ButtonFunction close


Game.ButtonFunction();

Game.RoundScore = () => {
  function getSum(total, num){
    return total + num;
  }
  if (Game.ones.length !== 0) {
    Game.fillones.innerHTML = Game.ones.reduce(getSum)
  }
  if (Game.twos.length !== 0) {
    Game.filltwos.innerHTML = Game.twos.reduce(getSum)
  }
  if (Game.threes.length !== 0) {
    Game.fillthrees.innerHTML = Game.threes.reduce(getSum)
  }
  if (Game.fours.length !== 0) {
    Game.fillfours.innerHTML = Game.fours.reduce(getSum)
  }
  if (Game.fives.length !== 0) {
    Game.fillfives.innerHTML = Game.fives.reduce(getSum)
  }
  if (Game.sixes.length !== 0) {
    Game.fillsixes.innerHTML = Game.sixes.reduce(getSum)
  }
}


// PLAYER TURN

//Game.player1 = true;


}); // END
