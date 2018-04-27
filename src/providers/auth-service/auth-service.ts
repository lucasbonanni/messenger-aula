import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../Models/user-model';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  currentUser: UserModel;
  access: boolean;
  // public http: HttpClient
  constructor() {
    this.access = false;
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    }
    else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        if (credentials.password === "pass" && credentials.email === "test@test.com") {
          this.access = true;
        }
        this.currentUser = new UserModel('Lucas Bonanni', 'test@test.com');
        observer.next(this.access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        this.currentUser.email = credentials.email;
        this.currentUser.name = 'lucas';
        this.currentUser.password = credentials.password;
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo(): UserModel {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
