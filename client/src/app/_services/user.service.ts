import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserState } from './../_models/userstates';


@Injectable()
export class UserService {
  private stateSubject = new Subject<UserState>();

  userState = this.stateSubject.asObservable();
  constructor() { }

  changeState (state: string) {
    this.stateSubject.next(<UserState>{state : state});
  }
}
