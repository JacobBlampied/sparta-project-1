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

    // Hold Buttons initial condition
    Game.holdBool1 = false;
    Game.holdBool2 = false;
    Game.holdBool3 = false;
    Game.holdBool4 = false;
    Game.holdBool5 = false;
    Game.holdBool6 = false;

    // Player Specific Variables
    Game.holdbtn1 = document.getElementById('p1holdbtn1');
    Game.holdbtn2 = document.getElementById('p1holdbtn2');
    Game.holdbtn3 = document.getElementById('p1holdbtn3');
    Game.holdbtn4 = document.getElementById('p1holdbtn4');
    Game.holdbtn5 = document.getElementById('p1holdbtn5');
    Game.holdbtn6 = document.getElementById('p1holdbtn6');

    Game.fillones = document.getElementById("p1fillones");
    Game.filltwos = document.getElementById("p1filltwos");
    Game.fillthrees = document.getElementById("p1fillthrees");
    Game.fillfours = document.getElementById("p1fillfours");
    Game.fillfives = document.getElementById("p1fillfives");
    Game.fillsixes = document.getElementById("p1fillsixes");
    Game.filltotal = document.getElementById("p1total");

    // Scorecard Totals
    Game.ones = [];
    Game.twos = [];
    Game.threes = [];
    Game.fours = [];
    Game.fives = [];
    Game.sixes = [];
    Game.Numbers = [[Game.ones],[Game.twos],[Game.threes],[Game.fours],[Game.fives],[Game.sixes]];

    // Hold Variables
    Game.ButtonArrayPressed = [];
    Game.Total = [];


    // RANDOM NUMBER GENERATOR FUNCTION
    Game.Dice = () => { // DICE START
      Game.RandNumArray = [];

      Game.RandomNumber = () => { // RANDOM NUMBER START
        for(let i = 0; i < 5; i++) {
          Game.RandNumArray.push(Math.floor((Math.random() * 6) + 1));
          console.log(Game.RandNumArray);
        }
      } // RANDOM NUMBER END

      Game.rollBtn.addEventListener('click', () => { // EVENT LISTENER START
        Game.RandNumArray.splice(0, 5);
        Game.ones.splice(0, Game.ones.length);
        Game.twos.splice(0, Game.twos.length);
        Game.threes.splice(0, Game.threes.length);
        Game.fours.splice(0, Game.fours.length);
        Game.fives.splice(0, Game.fives.length);
        Game.sixes.splice(0, Game.sixes.length);

        Game.dice[0].innerHTML = Game.RandNumArray[0];
        Game.dice[1].innerHTML = Game.RandNumArray[1];
        Game.dice[2].innerHTML = Game.RandNumArray[2];
        Game.dice[3].innerHTML = Game.RandNumArray[3];
        Game.dice[4].innerHTML = Game.RandNumArray[4];
        Game.ArrayPush()
        Game.RoundScore()

      }) // EVENT LISTENER END




    //Sort and fill the array
    Game.ArrayPush = () => { // ARRAY PUSH START

      for (let i = 0; i < 6; i++) { // FOR LOOP START
        switch (Game.RandNumArray[i]) { // SWITCH START
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
        } // SWITCH END
      } // FOR LOOP END
    } // ARRAY PUSH END


    // Hold Function
    Game.ButtonFunction = () => { // BUTTON FUNCTION START
      for (var i = 1; i < 7; i++) { // FOR LOOP START
        const holdBtn = document.getElementById(`p1holdbtn${i}`);
        holdBtn.addEventListener('click', (e) => { // EVENT LISTENER START

          if (Game.ButtonArrayPressed.length < 6) { // IF START
            switch (Number(e.target.getAttribute("data-num"))) { // SWITCH START
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
            } // SWITCH END
          } // IF END
          if (Game.ButtonArrayPressed.length === 6) { // IF START

            const calcBtn = document.getElementById("p1calc");
            calcBtn.addEventListener('click', (e) => { // EVENT LISTENER END

              Game.TotalScore = (total, num) => { // TOTAL SCORE START
                return total + num;
              } // TOTAL SCORE END
              Game.filltotal.innerHTML = Game.Total.reduce(Game.TotalScore)
              Game.TotalScore()
            }) // EVENT LISTENER END
          } // IF END
        }) // EVENT LISTENER END (TOP)
      } // FOR LOOP END
    } // BUTTON FUNCTION END


    Game.ButtonFunction();

    Game.RoundScore = () => { // ROUND SCORE START
      function getSum(total, num){ // FUNCTION START
        return total + num;
      } // FUNCTION CLOSE
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
    } // ROUND SCORE CLOSE

    Game.RoundScore()

    // Game.Dice()
    // Game.RandomNumber()
    // Game.ArrayPush()
    //
    // Game.RoundScore()
} // DICE END
 Game.Dice()

 // WIN CONDITION

 // if (Game.filltotal.innerHTML > 25) {
 //   alert("You Win!")
 // } else {
 //   alert("You Lose!")
 // }

}); // DOMContentLoaded END
