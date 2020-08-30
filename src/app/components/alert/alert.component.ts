import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <h1>Angular Toast with timer</h1>

    <div class="wrapper">
      <div class="alert" (mouseenter)="stopTimer()" (mouseleave)="resetTimer()">
        <div class="alert-wrapper">
          <div class="wrapper2">
            <div class="alert-bar"></div>
            <div class="icon"></div>
          </div>
          <div class="content">Are you sure you want to exit?</div>
          <div class="close" (click)="toggleAlert()">&times;</div>
          <div id="alert-timer"></div>
        </div>
      </div>
    </div>
    <button (click)="resetTimer()">Load Timer</button>
    <button (click)="toggleAlert()">Toggle Timer</button>
    <br>
  `,
  styles: [
    `h1 {
      font-family: Lato;
    }`,

    `.wrapper { width: 500px; margin: 0 auto; }`,
    `.alert-wrapper {
        margin: 5px;
        display: flex;
        padding: 10px;
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
        position: relative;
        max-height: 50px;
        transition: max-height 0.2s ease-in;
    }`,
    `.icon { width: 30px; height: 30px; margin-left: 10px; margin-top: 10px; border-radius: 50%; background: green; }`,
    `.alert-bar { min-height: 50px; min-width: 3px; background: red; display: inline-block; border-radius: 3px; }`,
    `.content { flex: 1; text-align: left; padding: 15px; }`,
    `.close { margin-left: auto; cursor: pointer; }`,
    `.wrapper2 { display: flex; }`,
    `#alert-timer {
        width: 100%;
        height: 3px;
        position: relative;
        display: block;
        background-color: #4CAF50;
        position: absolute;
        bottom: 0;
        left: 0;
    }`,
    `.hide { max-height: 0; transition: max-height 0.2s ease-out; overflow: hidden; margin: 0; padding: 0; } `,
  ]
})

export class AlertComponent implements OnInit {
  alertElement: any;
  private timerElement: any;
  private timerWidth: number;
  private timerInterval: any;

  ngOnInit() {
    this.alertElement = document.querySelector('div.alert-wrapper');
    this.timerElement = document.getElementById('alert-timer');
    this.resetTimer();
  }

  resetTimer() {
    this.timerElement = document.getElementById('alert-timer');
    this.timerWidth = 100;
    this.timerElement.style.width = this.timerWidth + '%';
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(this.decrementTimer.bind(this), 20);
  }

  stopTimer() {
    this.timerWidth = 100;
    this.timerElement.style.width = this.timerWidth + '%';
    clearInterval(this.timerInterval);
  }

  decrementTimer() {
      if (this.timerWidth <= 0) {
        clearInterval(this.timerInterval);
        this.toggleAlert();
      } else {
        this.timerWidth--;
        this.timerElement.style.width = this.timerWidth + '%';
      }
  }

  toggleAlert() {
    this.alertElement.classList.toggle('hide');
  }

}
