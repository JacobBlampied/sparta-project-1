#SPARTA PROJECT ONE: Yahtzee

## Description
This game is a variation on Yahtzee where you use a random number generator as a dice where you try to reach the target value to win the game.

## Languages Used
* HTML
* CSS
* JavaScript

## How To Download
Clone down the repository to your console from the following link: https://github.com/JacobBlampied/sparta-project-1
Or to view the game on your browser use the GitHub Pages link:
https://jacobblampied.github.io/sparta-project-1/

## Challenges
* Getting the scorecard to display and hold the number totals. The following code fixed the problem:

```
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

```
