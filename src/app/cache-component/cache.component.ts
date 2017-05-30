import { Component } from '@angular/core';
import { cacheDecorator, timingDecorator } from 'try-decorators';

@Component({
  selector: 'cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class Cache {
  num: number;
  arr: any[] = [];
 
  @timingDecorator
  @cacheDecorator
  fact(n) {
    let tot = 1;
    for(let i = 2; i <= n; i++) {
      tot *= i;
    }
    this.arr.push(tot);
    return tot;
  }

  onClick() {
    this.fact(this.num);
  }

}
