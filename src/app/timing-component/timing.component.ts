import { Component } from '@angular/core';
import { timingDecorator } from 'try-decorators';

@Component({
  selector: 'timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class Timing {
  num: number;
  arr: any[] = [];

  ngOnInit(): void {
    document.addEventListener('log', (data: CustomEvent) => {
     this.arr.push(data.detail);
    }, false);
  }

  @timingDecorator
  someDelay(): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
       resolve(null);
      }, 2000);
    });
  }
  
  onClick() {
    this.someDelay()
      .then(data => console.log(data));
  }
  
}
