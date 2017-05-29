import { Component, OnInit } from '@angular/core';
import { log } from 'try-decorators';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class Log implements OnInit {
  field: any;
  arr: any[];

  ngOnInit(): void {
    document.addEventListener('log', (data: CustomEvent) => {
      this.arr = data.detail;
    }, false);
  }



  @log('hello')
  onclick() {
    console.log(this.field);
  }
}