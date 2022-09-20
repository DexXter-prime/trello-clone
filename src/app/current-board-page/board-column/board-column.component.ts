import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component,  Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormHostDirective } from 'src/app/directives/form-host.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent implements OnInit {

  @Input() columnName?: string;
  @Input() tasks!: string[];

  @ViewChild(FormHostDirective, {static: true}) formHost!: FormHostDirective;

  showState = true;

  private componentSub?: Subscription;
  private addTaskSub?: Subscription;

  constructor() { }

  ngOnInit(): void { }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  createForm(): void {
    const viewContainerRef = this.formHost.viewContainerRef;
    viewContainerRef.clear();


    const componentRef = viewContainerRef.createComponent(DynamicFormComponent);
    this.showState = false;

    this.addTaskSub = componentRef.instance.addTask.subscribe((task) => {
      this.tasks.push(task);
    })

    this.componentSub = componentRef.instance.cahangeState.subscribe(() => {
        this.componentSub?.unsubscribe();
        this.addTaskSub?.unsubscribe();
        viewContainerRef.clear();
        this.showState = true;

    })
  }

}
