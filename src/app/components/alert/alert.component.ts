import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <h1>JavaScript Progress Bar</h1>

    <div id="myProgress">
      <div id="myBar"></div>
    </div>

    <br>
    <button (click)="move()">Click Me</button>
  `,
  styles: [
    `h1 { font-family: Lato; }`,
    `#myProgress { width: 100%; background-color: #ddd; }`,
    `#myBar { width: 1%; height: 30px; background-color: #4CAF50; }`
  ]
})
export class AlertComponent implements OnInit {

  private i = 0;
  private elem: any;
  private width: number;
  private id: any;
  constructor() { }

  ngOnInit() {
  }

  move() {
    if (this.i === 0) {
      this.i = 1;
      this.elem = document.getElementById('myBar');
      this.width = 1;
      this.id = setInterval(this.frame.bind(this), 10);
    }
  }


  frame() {
      if (this.width >= 100) {
        clearInterval(this.id);
        this.i = 0;
      } else {
        this.width++;
        this.elem.style.width = this.width + '%';
      }
    }

}
