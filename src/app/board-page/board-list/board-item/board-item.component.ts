import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {

  @Input() title?: string;
  @Input() boardId?: number | string;

  constructor() { }

  ngOnInit(): void {
  }

}
