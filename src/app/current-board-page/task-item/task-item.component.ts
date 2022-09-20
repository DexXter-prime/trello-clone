import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() taskName?:string;
  detailedWindowState: any = false; //chnage in the future

  constructor() { }

  ngOnInit(): void {
  }



  changeWindowState() {
    this.detailedWindowState = !this.detailedWindowState;
  }
}
