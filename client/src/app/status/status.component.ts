import { UserState } from './../_models/userstates';
import { Subscription } from 'rxjs';
import { UserService } from './../_services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  status = 'Not logged In';
  isLoggedIn = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.userState.subscribe(((userState: UserState) => {
      switch (userState.state) {
        case 'NOT_LOGGED_IN':
          this.isLoggedIn = false;
          this.status = 'Not Logged In';
          break;
        case 'LOGGING_IN':
          this.isLoggedIn = false;
          this.status = 'Logging In';
          break;
        case 'LOGGED_IN':
          this.isLoggedIn = true;
          this.status = 'Logged In';
          break;
        case 'LOGGING_OUT':
          this.isLoggedIn = true;
          this.status = 'Logging Out';
          break;
        case 'LOGGED_OUT':
          this.isLoggedIn = false;
          this.status = 'Logged Out';
          break;
      }
    }));
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
