import { Component, OnInit, ViewChild } from '@angular/core';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-current-board-page',
  templateUrl: './current-board-page.component.html',
  styleUrls: ['./current-board-page.component.scss']
})
export class CurrentBoardPageComponent implements OnInit {




  constructor() { }


  ngOnInit(): void {
  }

  // @ViewChild(ErrorHostDirective, {static: true}) errorContainer!: ErrorHostDirective;

  todoItems: string[] = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  doneItems: string[] = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  board: Board = new Board('New board', [
    new Column('To Do', [...this.todoItems]),
    new Column('In Progress', ['some shite', 'a few new things']),
    new Column('Coded', ['Blog App', 'Trello-clone App']),
    new Column('Testing', ['some new feature']),
    new Column('Done', [...this.doneItems])
  ]);








}
