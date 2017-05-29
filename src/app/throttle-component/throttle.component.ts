import { Component } from '@angular/core';
import { throttle } from 'try-decorators';

@Component({
  selector: 'throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.css']
})
export class Throttle {
  count: number = 0;
  
  @throttle(2000)
  doubleCount() {
    this.count = this.count + 2;
  }
  
  onClick() {
    this.doubleCount();
  }
}
