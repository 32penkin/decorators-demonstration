import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { Log } from './log-component/log.component';
import { Cache } from './cache-component/cache.component';
import { CheckAccess } from './check-access-component/check-access.component';
import { Debounce } from './debounce-component/debounce.component';
import { Throttle } from './throttle-component/throttle.component';
import { Timing } from './timing-component/timing.component';

@NgModule({
  declarations: [
    AppComponent,
    Log,
    Cache,
    CheckAccess,
    Debounce,
    Throttle,
    Timing
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'log',
        component: Log
      },
      {
        path: 'cache',
        component: Cache
      },
      {
        path: 'timing',
        component: Timing
      },
      {
        path: 'throttle',
        component: Throttle
      },
      {
        path: 'debounce',
        component: Debounce
      },
      {
        path: 'check-access',
        component: CheckAccess
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
   
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
