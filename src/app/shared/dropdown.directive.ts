import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  // attribute selector '[selectorName]'
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  // opens the dropdown button while clicking on it and closes the dropdown button while clicking anywhere away from the button
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

    // Opens and closes the dropdown while clicking on the dropdown button
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  constructor(private elRef: ElementRef) { }

}
