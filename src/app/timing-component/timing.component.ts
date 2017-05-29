import { Component } from '@angular/core';
import { timingDecorator } from 'try-decorators';

@Component({
  selector: 'timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class Timing {
  num: number;

  @timingDecorator
  fact(n) {
    
  }
  
}
