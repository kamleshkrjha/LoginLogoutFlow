import { UserService } from './../_services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
  user = '';
  ngOnInit() {
    // check if user is logged in
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
      // user is not logged in redirect to login page
      this.router.navigate(['/home']);
    } else {
      this.userService.changeState('LOGGED_IN');
      const currentUserObj = JSON.parse(currentUser);
      this.user = currentUserObj.first_name + ' ' + currentUserObj.last_name;
    }
  }

}
