import { Component, OnInit } from '@angular/core';
import { IBoardItem } from 'src/app/interfaces';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  items: IBoardItem[] = [
      {id: 1, title: 'Title 1'},
      {id: 2, title: 'Title 2'},
      {id: 3, title: 'Title 3'},
      {id: 4, title: 'Title 4'},
      {id: 5, title: 'Title 5'},
      {id: 6, title: 'Title 6'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
