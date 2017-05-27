import { Component } from '@angular/core';
import { log } from '../../../node_modules/try-decorators/src/log.decorator';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class Log {
  results: any[];
  
  @log('This is log decorator')
  add(a, b){
    // this.results.push({
    //   args: [a, b],
    //   res: a + b
    // });
   return a + b;
  }
}
