import { Component } from '@angular/core';
import { debounce } from 'try-decorators';

@Component({
  selector: 'debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class Debounce {
  count1: number = 0;
  count2: number = 0;
  
  @debounce(2000)
  upCountDebouce() {
    this.count1++;
  }
  
  upCount() {
    this.count2++;
  }
  
  onClick() {
    this.upCount();
  }
  
  onClickDebouce() {
    this.upCountDebouce();
  }
}
