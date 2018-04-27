import { Component } from '@angular/core';

/**
 * Generated class for the LoginRegisterTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-register-tabs',
  templateUrl: 'login-register-tabs.html'
})
export class LoginRegisterTabsComponent {

  text: string;

  constructor() {
    console.log('Hello LoginRegisterTabsComponent Component');
    this.text = 'Hello World';
  }

}
