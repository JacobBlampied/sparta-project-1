document.addEventListener('DOMContentLoaded', () => {

  const Game = new Object();

  // VARIABLES
  // Boxes
  Game.dice = document.getElementsByTagName('td');
  // Roll Button
  Game.rollBtn = document.getElementById('roll');
  // Number Total
  Game.numtotal = document.getElementsByClassName('numtotal');
  // Hold Buttons
  Game.holdbtn1 = document.getElementById('holdbtn1');
  Game.holdbtn2 = document.getElementById('holdbtn2');
  Game.holdbtn3 = document.getElementById('holdbtn3');
  Game.holdbtn4 = document.getElementById('holdbtn4');
  Game.holdbtn5 = document.getElementById('holdbtn5');
  Game.holdbtn6 = document.getElementById('holdbtn6');

  // Hold Buttons
  Game.holdBool1 = false;
  Game.holdBool2 = false;
  Game.holdBool3 = false;
  Game.holdBool4 = false;
  Game.holdBool5 = false;
  Game.holdBool6 = false;


  // RANDOM NUMBER GENERATOR FUNCTION
  // Define array
  Game.RandNumArray = [];
  console.log("before", Game.RandNumArray)
  // Generate six random numbers and send to array
  Game.RandomNumber = () => {
    for(let i = 0; i < 5; i++) {
      Game.RandNumArray.push(Math.floor((Math.random() * 6) + 1));
      console.log("after push", Game.RandNumArray)
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
  // Make arrays for the totals
  Game.ones = [];
  Game.twos = [];
  Game.threes = [];
  Game.fours = [];
  Game.fives = [];
  Game.sixes = [];
  Game.Numbers = [[Game.ones],[Game.twos],[Game.threes],[Game.fours],[Game.fives],[Game.sixes]];
  // Game.total = [[Game.ones],[Game.twos],[Game.threes],[Game.fours],[Game.fives],[Game.sixes]];

  //Sort and fill the array
  Game.ArrayPush = () => {

    for (let i = 0; i < 6; i++) {
      switch (Game.RandNumArray[i]) {
        case 1:
        if ((Game.RandNumArray[i] === 1) && (Game.holdBool1 === false)) {
          Game.ones.push(1);
          console.log("ones", Game.ones);
          console.log(Game.holdBool1);
        }
        break;
        case 2:
        if ((Game.RandNumArray[i] === 2) && (Game.holdBool2 === false)) {
          Game.RandNumArray[i] === 2
          Game.twos.push(2);
          console.log("twos", Game.twos);
        }
        break;
        case 3:
        if ((Game.RandNumArray[i] === 3) && (Game.holdBool3 === false)) {
          Game.RandNumArray[i] === 3
          Game.threes.push(3);
          console.log("threes", Game.threes);
        }
        break;
        case 4:
        if ((Game.RandNumArray[i] === 4) && (Game.holdBool4 === false)) {
          Game.RandNumArray[i] === 4
          Game.fours.push(4);
          console.log("fours", Game.fours);
        }
        break;
        case 5:
        if ((Game.RandNumArray[i] === 5) && (Game.holdBool5 === false)) {
          Game.RandNumArray[i] === 5
          Game.fives.push(5);
          console.log("fives", Game.fives);
        }
        break;
        case 6:
        if ((Game.RandNumArray[i] === 6) && (Game.holdBool6 === false)) {
          Game.RandNumArray[i] === 6
          Game.sixes.push(6);
          console.log("sixes", Game.sixes);
        }
        break;
      }
    }
  }

  // Hold Function
  Game.ButtonArrayPressed = [];
  console.log(Game.ButtonArrayPressed);
  Game.total = [[Game.ones.reduce(getSum)],[Game.twos.reduce(getSum)],[Game.threes.reduce(getSum)],[Game.fours.reduce(getSum)],[Game.fives.reduce(getSum)],[Game.sixes.reduce(getSum)]];

  Game.ButtonFunction = () => {
    for (var i = 1; i < 7; i++) {
      const holdBtn = document.getElementById(`holdbtn${i}`);
      holdBtn.addEventListener('click', (e) => {
        console.log(Number(e.target.getAttribute("data-num")));
        if (Game.ButtonArrayPressed.length < 6) { // if statement start

          switch (Number(e.target.getAttribute("data-num"))) { // switch start
            case 1:
            Game.holdBool1 = true;
            console.log(Game.holdBool1);
            Game.ButtonArrayPressed.push('btn1');
            console.log(Game.ButtonArrayPressed);
            break;
            case 2:
            Game.holdBool2 = true;
            console.log(Game.holdBool2);
            Game.ButtonArrayPressed.push('btn2');
            console.log(Game.ButtonArrayPressed);
            break;
            case 3:
            Game.holdBool3 = true;
            console.log(Game.holdBool3);
            Game.ButtonArrayPressed.push('btn3');
            console.log(Game.ButtonArrayPressed);
            break;
            case 4:
            Game.holdBool4 = true;
            console.log(Game.holdBool4);
            Game.ButtonArrayPressed.push('btn4');
            console.log(Game.ButtonArrayPressed);
            break;
            case 5:
            Game.holdBool5 = true;
            console.log(Game.holdBool5);
            Game.ButtonArrayPressed.push('btn5');
            console.log(Game.ButtonArrayPressed);
            break;
            case 6:
            Game.holdBool6 = true;
            console.log(Game.holdBool6);
            Game.ButtonArrayPressed.push('btn6');
            console.log(Game.ButtonArrayPressed);
            break;
            default:
          } // switch statement end
        } else if (Game.ButtonArrayPressed.length === 6) {

          Game.TotalScore = () => {
            function getSum(total, num){
              return total + num;
            }
          }

          document.getElementById("total").innerHTML = Game.total.reduce(getSum)

        } // if statement end

      }) // event listener end
    } // for statemnet end
  }; // button function end


  Game.ButtonFunction();

  Game.RoundScore = () => {
    function getSum(total, num){
      return total + num;
    }
    if (Game.ones.length !== 0) {
      // console.log(Game.ones.reduce(getSum));
      document.getElementById("fillones").innerHTML = Game.ones.reduce(getSum)
    }
    if (Game.twos.length !== 0) {
      // console.log(Game.twos.reduce(getSum));
      document.getElementById("filltwos").innerHTML = Game.twos.reduce(getSum)
    }
    if (Game.threes.length !== 0) {
      // console.log(Game.threes.reduce(getSum));
      document.getElementById("fillthrees").innerHTML = Game.threes.reduce(getSum)
    }
    if (Game.fours.length !== 0) {
      // console.log(Game.fours.reduce(getSum));
      document.getElementById("fillfours").innerHTML = Game.fours.reduce(getSum)
    }
    if (Game.fives.length !== 0) {
      // console.log(Game.fives.reduce(getSum));
      document.getElementById("fillfives").innerHTML = Game.fives.reduce(getSum)
    }
    if (Game.sixes.length !== 0) {
      // console.log(Game.sixes.reduce(getSum));
      document.getElementById("fillsixes").innerHTML = Game.sixes.reduce(getSum)
    }
  }


}); // END
