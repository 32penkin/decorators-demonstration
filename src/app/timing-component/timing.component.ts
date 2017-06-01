import { Component } from '@angular/core';
import { timingDecorator } from 'try-decorators';

@Component({
  selector: 'timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class Timing {
  ms: number;
  arr: any[] = [];

  ngOnInit(): void {
    document.addEventListener('log', (data: CustomEvent) => {
     this.arr.push(data.detail);
    }, false);
  }

  @timingDecorator
  someDelay(delay): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
       resolve(null);
      }, delay);
    });
  }
  
  onClick() {
    this.someDelay(this.ms)
      .then(data => {return data;});
  }
  
}
