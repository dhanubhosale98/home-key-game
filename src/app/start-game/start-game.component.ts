import { Component } from '@angular/core';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css'],
})
export class StartGameComponent {
  o1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  obj = [
    [
      [1, 3, 4],
      [1, 2],
      [1, 4],
      [1, 3],
      [1],
      [1, 2],

      [1, 4],
      [1, 2],
      [1, 4],
      [1, 2],
    ],
    [
      [1, 2, 4],
      [2, 4],
      [3, 4],
      [1, 2],
      [2, 4],
      [3, 4],

      [2, 3],
      [3, 4],
      [2, 3],
      [2, 4],
    ],
    [
      [2, 4],
      [3, 4],
      [1, 2],
      [2, 3, 4],
      [2, 4],
      [1, 3, 4],

      [1, 3],
      [1],
      [1, 2, 3],
      [2, 4],
    ],
    [
      [4],
      [1, 2, 3],
      [2, 4],
      [1, 4],
      [2],
      [1, 4],

      [1, 2],
      [3, 4],
      [1, 3],
      [2, 3],
    ],
    [
      [4],
      [1, 3],
      [2, 3],
      [2, 4],
      [2, 3, 4],
      [2, 4],

      [3, 4],
      [1, 3],
      [1, 3],
      [1, 2],
    ],
    [
      [2, 4],
      [1, 4],
      [1, 2, 3],
      [4],
      [1, 3],
      [2, 3],

      [1, 3, 4],
      [1],
      [1, 2, 3],
      [2, 4],
    ],
    [[2, 4], [3, 4], [1, 3], [3], [1, 3], [1, 3], [1, 2], [2, 4], [1, 4], [2]],
    [
      [3, 4],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 2],
      [1, 3, 4],
      [3],
      [2, 3],
      [2, 4],
      [2, 4],
    ],
    [
      [1, 2, 4],
      [1, 4],
      [1, 3],
      [1, 2],
      [3, 4],
      [1, 3],
      [1, 2],
      [1, 4],
      [2, 3],
      [2, 4],
    ],
    [
      [3, 4],
      [3],
      [1, 2, 3],
      [3, 4],
      [1, 3],
      [1, 3],
      [3],
      [2, 3],
      [1, 3, 4],
      [2, 3],
    ],
  ];

  up = 9;
  left = 9;
  countSteps = 0;
  current = this.obj[this.up][this.left];

  constructor() {
    this.keysClick();
  }

  keysClick() {
    document.addEventListener('keydown', this.key);
  }

  key = (event: any) => {
    switch (event.keyCode) {
      case 37:
        // alert('Left key');
        if (this.obj[this.up][this.left].includes(4)) {
          // alert('not allowed');
        } else {
          this.countSteps++;
          this.left = this.left - 1;
        }
        break;
      case 38:
        // alert('Up key');
        if (this.obj[this.up][this.left].includes(1)) {
          // alert('not allowed');
        } else {
          this.countSteps++;
          this.up = this.up - 1;
        }
        break;
      case 39:
        // alert('Right key');
        if (this.obj[this.up][this.left].includes(2)) {
          // alert('not allowed');
        } else {
          this.countSteps++;
          this.left = this.left + 1;
        }

        break;
      case 40:
        // alert('Down key');
        if (this.obj[this.up][this.left].includes(3)) {
          // alert('not allowed');
        } else {
          this.countSteps++;
          this.up = this.up + 1;
        }

        break;
    }
  };

  StartNewGame() {
    this.up = 9;
    this.left = 9;
    this.countSteps = 0;
  }
}
