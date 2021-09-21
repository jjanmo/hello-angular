import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  count = 0;
  constructor() {
    this.setCountInterval();
  }

  setCountInterval() {
    setInterval(() => {
      console.log(this);
      this.count++;
    }, 1000);
  }

  ngOnInit(): void {}
}
