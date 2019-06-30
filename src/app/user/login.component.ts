import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);

    this.router.navigate(['events']);
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

}
