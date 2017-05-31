import { Component, OnInit } from '@angular/core';
import { cacheDecorator, timingDecorator } from 'try-decorators';

@Component({
  selector: 'cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class Cache implements OnInit {
  num: number = 0;
  arr: any[] = [];

  ngOnInit(): void {
    document.addEventListener('log', (data: CustomEvent) => {
      this.arr.push(data.detail);
    }, false);
  }
 
  @cacheDecorator
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
