import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../Models/user-model';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  private login : FormGroup;

  @Input() user : UserModel;

  @Output() onSubmit: EventEmitter<UserModel>;

  public constructor(private formBuilder: FormBuilder) {
      this.login = this.formBuilder.group({
          email: ['', Validators.email],
          password: ['',Validators.required],
        });
      this.onSubmit = new EventEmitter<UserModel>();
   }

  public submit(){
       this.onSubmit.emit(this.user);
  }

}
