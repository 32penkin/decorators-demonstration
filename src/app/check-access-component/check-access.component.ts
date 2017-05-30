import { Component } from '@angular/core';
import { checkAccess } from 'try-decorators';

@Component({
  selector: 'check-access',
  templateUrl: './check-access.component.html',
  styleUrls: ['./check-access.component.css']
})
export class CheckAccess {
  isActive: boolean = false;
  
  @checkAccess(function() {
    return this.isActive;
  })
  login() {
    alert('You are successfully logged in!');
  }

  onClick() {
    this.login();
  }
}
