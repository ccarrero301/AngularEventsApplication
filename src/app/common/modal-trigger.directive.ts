import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective implements OnInit {

  private htmlElement: HTMLElement;

  @Input('modal-trigger') modalId: string;

  constructor(
    @Inject(JQ_TOKEN) private $: any,
    elementRef: ElementRef) {
      this.htmlElement = elementRef.nativeElement;
    }

  ngOnInit(): void {
    this.htmlElement.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
