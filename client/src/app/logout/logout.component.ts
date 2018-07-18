import { LoaderService } from './../_services/loader.service';
import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  message = '';
  constructor(private userService: UserService,
    private authService: AuthenticationService,
    private router: Router,
    private loaderService: LoaderService) { }
  currentUser: any;
  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.loaderService.show();
    this.userService.changeState('LOGGING_OUT');
    this.authService.logout(this.currentUser.username).subscribe((res) => {
      this.loaderService.hide();
      this.userService.changeState('LOGGED_OUT');
      this.message = `Logged out.
       Redirecting to home in few seconds`;
      setTimeout(() => {
        this.router.navigate(['/home']);
        }, 3000);
    });
  }

}
