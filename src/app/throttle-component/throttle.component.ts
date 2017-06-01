import { Component } from '@angular/core';
import { throttle } from 'try-decorators';

@Component({
  selector: 'throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.css']
})
export class Throttle {
  count: number = 0;
  count2: number = 0;
  
  @throttle(2000)
  doubleCountThrottle() {
    this.count += 2;
  }

  doubleCount() {
    this.count2 += 2;
  }
  
  onClickThrottle() {
    this.doubleCountThrottle();
  }

  onClick() {
    this.doubleCount();
  }
}
