import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html'
})

export class SimpleModalComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() { }
}

