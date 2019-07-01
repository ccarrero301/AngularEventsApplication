import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html'
})

export class SimpleModalComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalContainer') containerElement: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() { }

  closeModal(): void {
    this.$(this.containerElement.nativeElement).modal('hide');
  }
}

