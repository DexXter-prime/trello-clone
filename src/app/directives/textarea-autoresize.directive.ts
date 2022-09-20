import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextareaAutoresize]'
})
export class TextareaAutoresizeDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @HostListener(':input')
  onInput() {
    this.resize();
  }

  ngOnInit(): void {
      // if(this.elementRef.nativeElement.scrollHeight) {
      //   setTimeout(() => this.resize())
      // }
  }

  resize(): void {
    if(this.elementRef.nativeElement.className === 'active') {
      // this.elementRef.nativeElement.style.height = '120px';
      this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
    } else {
      this.elementRef.nativeElement.style.height = '60px';
    }

  }

}
