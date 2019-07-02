import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'events-app',
  templateUrl: './events-app.component.html'
})
export class EventsAppComponent implements OnInit {

  constructor(
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.checkAuthenticationStatus();
    console.log('aca');
  }


}
