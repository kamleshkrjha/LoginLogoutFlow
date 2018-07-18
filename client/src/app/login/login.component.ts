import { UserService } from './../_services/user.service';
import { Router } from '@angular/router';
import { LoaderService } from './../_services/loader.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private users = [{username: 'kamlesh', pwd: '123'}];
  constructor(
    private loaderService: LoaderService,
    private authService: AuthenticationService,
    private router: Router,
    private userService: UserService) { }
  username = '';
  password = '';
  onSubmit (): any {
    // successful submission -> details page
    this.userService.changeState('LOGGING_IN');
    this.loaderService.show();
    this.authService.login(this.username, this.password)
    .subscribe((res) => {
      this.loaderService.hide();
      if (res.success) {
        // navigate to next state
        this.router.navigate(['/details']);
      } else {
        alert(res.errorMessage);
      }
    });
  }
  ngOnInit() {
  }
}
