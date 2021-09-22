import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit, OnChanges {
  @Input() inputData!: string;

  time: number = 0;
  intervalId!: ReturnType<typeof setInterval>;

  constructor() {}

  setTimeInterval() {
    this.intervalId = setInterval(() => {
      this.time++;
    }, 1000);
  }

  clearTimeInterval() {
    clearInterval(this.intervalId);
  }

  resetTimeInterval() {
    this.clearTimeInterval();
    this.time = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    const command: string = changes.inputData.currentValue;

    switch (command) {
      case 'start': {
        this.setTimeInterval();
        break;
      }
      case 'stop': {
        this.clearTimeInterval();
        break;
      }
      case 'reset': {
        this.resetTimeInterval();
        break;
      }
      default: {
      }
    }
  }

  ngOnInit(): void {}
}
