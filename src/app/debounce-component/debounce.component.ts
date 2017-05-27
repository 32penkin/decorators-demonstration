import {Component} from '@angular/core';
import {debounce} from '../../../node_modules/try-decorators/src/debounce.decorator';

@Component({
  selector: 'debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class Debounce {
  count1: number = 0;
  count2: number = 0;
  
  @debounce(2000)
  upCount() {
    this.count1++;
  }
  
  upCountWODebounce() {
    this.count2++;
  }
}
