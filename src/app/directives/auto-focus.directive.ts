import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements OnInit {

  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
    // this.elementRef.nativeElement.focus();
    this.focusOrNot()
  }


  focusOrNot() {
   let classNames =  this.elementRef.nativeElement.className.split(' ');
   console.log(classNames)
   if(!classNames.includes('non-active')) {
    this.elementRef.nativeElement.focus();
   }
  }
}
