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
  fact(n) {
    let tot = 1;
    for(let i = 2; i <= n; i++) {
      tot *= i;
    }
    return tot;
  }

  onClick() {
    this.fact(this.num);
  }
  
}
