import { Component, EventEmitter, Output, OnInit } from '@angular/core';

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
export class LoginRegisterTabsComponent implements OnInit {

  public isLoginActive: boolean;

    @Output("onTabChange") change: EventEmitter<boolean>;

    constructor() {
        this.change = new EventEmitter<boolean>();
    }

    ngOnInit() {
        this.isLoginActive = true;
    }

    private selectTab() {
        this.isLoginActive = !this.isLoginActive;
        this.change.emit(this.isLoginActive);
    }

}
