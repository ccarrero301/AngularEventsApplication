import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collaspsible-well',
  templateUrl: './collaspsible-well.component.html'
})

export class CollapsibleWellComponent implements OnInit {

  visible = true;

  @Input() title: string;

  constructor() { }

  ngOnInit() { }

  toggleContent(): void {
    this.visible = !this.visible;
  }
}

