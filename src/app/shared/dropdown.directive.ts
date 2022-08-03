import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) {}

  @HostBinding('class.open') isOpen = false; // sets no 'open' class by default

  // this listens to click and 'unclick' of the button
  //   @HostListener('click') toggleOpen(eventData: Event) {
  //     this.isOpen = !this.isOpen;
  //   }

  // this makes the opened dropdown can be closed by a click anywhere (not only upon clicking on the button)
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
