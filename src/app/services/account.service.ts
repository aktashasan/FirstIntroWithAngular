import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn=false;


login(user:User):boolean{
  if(user.userName=="hasan"&&user.password=="12345"){
    this.loggedIn=true;
    localStorage.setItem("isloged","ture");
    return true;
  }
  return false;

}

  isloggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("islogged");
    this.loggedIn=false;
  }

}
