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
 
  @timingDecorator
  @cacheDecorator
  someDelay(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
       resolve(n * 20);
      }, 2000);
    });
  }

  onClick() {
    this.someDelay(this.num)
      .then(data => {return data});
  }

}
