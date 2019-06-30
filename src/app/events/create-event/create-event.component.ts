import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-event.component.html'
})

export class CreateEventComponent implements OnInit {

  isDirty = true;

  constructor(private router: Router) { }

  ngOnInit() { }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
