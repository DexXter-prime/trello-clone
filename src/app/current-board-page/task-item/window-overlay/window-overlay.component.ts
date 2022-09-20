import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-window-overlay',
  templateUrl: './window-overlay.component.html',
  styleUrls: ['./window-overlay.component.scss']
})
export class WindowOverlayComponent implements OnInit {



  @Input() title!: string;

  @Output() closeEvent = new EventEmitter<void>();

  @ViewChild('descriptionElement') descriptionElement: ElementRef | undefined;

  descriptionForm!: UntypedFormGroup;
  descriptionValue = ''; //it will have to change
  formState?: boolean;
  closeState = false;

  constructor() { }

  ngOnInit(): void {
    this.descriptionForm = new UntypedFormGroup({
      'description-area': new UntypedFormControl(null)
    })
  }



  onClose(): void {
    this.closeEvent.emit();
  }

  makeInactive(): void {
    this.formState = false;
    this.saveTextValue();
  }



  makeActive(): void {
    this.formState = true;

  }


  showForm() {
    this.makeActive();
    this.descriptionForm.get('description-area')?.patchValue(this.descriptionValue);
    this.descriptionValue = ''
  }


  closeForm() {
    let text = this.descriptionValue;
    this.descriptionValue = '';
    console.log(text)
  }


  saveTextValue(): void {
    let textValue = this.descriptionElement?.nativeElement.value;
    if(textValue) {
      this.descriptionValue = textValue;
    }
  }


}
