import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Future';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.changeState('NOT_LOGGED_IN');
  }

}
