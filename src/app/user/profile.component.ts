import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  private firstName: FormControl;
  private lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) { }

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);

    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      [Validators.required]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  saveProfile(formValues: any): void {

    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile Saved');
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
}
