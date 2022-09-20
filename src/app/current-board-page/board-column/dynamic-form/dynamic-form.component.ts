import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AutoFocusDirective } from 'src/app/directives/auto-focus.directive';
import { IControls } from 'src/app/interfaces';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

  taskCardform!: UntypedFormGroup;

  @Output() cahangeState = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<string>();

  @ViewChild(AutoFocusDirective, {static: true}) textArea!: AutoFocusDirective;



  constructor() { }


  ngOnInit(): void {
    this.taskCardform = new UntypedFormGroup({
      'text-area': new UntypedFormControl(null, [Validators.required, Validators.maxLength(200)])
    })
  }

  ngOnDestroy(): void {
      console.log('DESTROYD')
  }

  checkTheFields(controls: IControls): boolean { //put into service
    for(const key in controls) {
      if(controls[key].errors) {
        return false;
      }
    }

    return true;
  }

  onSubmit(): void {

    const isValid = this.checkTheFields(this.taskCardform.controls);
    if(isValid) {  // show up only when submit (maybe)
      const textValue = this.taskCardform.get('text-area')?.value.trim();
      if(textValue) {

        this.addTask.emit(textValue);
        this.taskCardform.reset();
        this.textArea.elementRef.nativeElement.focus(); // maybe should be deleted

      }
    }
  }


  onClose(): void {
    this.cahangeState.emit();
  }

}
