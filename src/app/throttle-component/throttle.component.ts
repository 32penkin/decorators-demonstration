import { Component } from '@angular/core';
import { throttle } from '../../../node_modules/try-decorators/src/throttle.decorator';

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
}
