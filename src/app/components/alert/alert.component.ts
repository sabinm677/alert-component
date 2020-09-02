import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  alertElement: any;
  private timerElement: any;
  private timerWidth: number;
  private timerInterval: any;

  ngOnInit() {
    this.alertElement = document.querySelector('div.alert');
    this.timerElement = document.getElementById('alert-timer');
    this.resetTimer();
  }

  resetTimer() {
    this.timerElement = document.getElementById('alert-timer');
    this.timerWidth = 98;
    this.timerElement.style.width = this.timerWidth + '%';
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(this.decrementTimer.bind(this), 20);
  }

  stopTimer() {
    this.timerWidth = 98;
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
    //this.alertElement.classList.toggle('hide');
  }

}
