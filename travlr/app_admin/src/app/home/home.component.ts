import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/authentication';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input('user') user: any;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.authenticationService.getCurrentUser();
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

}
