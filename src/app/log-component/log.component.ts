import { Component, OnInit } from '@angular/core';
import { log } from 'try-decorators';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class Log implements OnInit {
  a: number;
  b: number;
  arr: any[] = [];

  ngOnInit(): void {
    document.addEventListener('log', (data: CustomEvent) => {
     this.arr.push(data.detail);
    }, false);
  }

  onclick() {
    this.add(this.a, this.b);
  }

  @log('Hello from log decorator') 
  add(a, b) {
    return a + b;
  }

}