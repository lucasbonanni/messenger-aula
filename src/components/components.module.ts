import { NgModule } from '@angular/core';
import { LoginRegisterTabsComponent } from './login-register-tabs/login-register-tabs';
import { LoginFormComponent } from './login-form/login-form';
@NgModule({
	declarations: [LoginRegisterTabsComponent,
    LoginFormComponent],
	imports: [],
	exports: [LoginRegisterTabsComponent,
    LoginFormComponent]
})
export class ComponentsModule {}
